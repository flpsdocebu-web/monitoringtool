<?php
declare(strict_types=1);
session_start();
const DB_FILE = __DIR__ . '/monitoring.sqlite';
const SECRET_FILE = __DIR__ . '/app.key';
$ready = file_exists(DB_FILE);
$error = '';
if (!isset($_SESSION['setup_csrf'])) $_SESSION['setup_csrf'] = bin2hex(random_bytes(24));
if ($_SERVER['REQUEST_METHOD'] === 'POST' && !$ready) {
    $password = (string)($_POST['password'] ?? '');
    $confirm = (string)($_POST['confirm'] ?? '');
    if (!hash_equals($_SESSION['setup_csrf'], (string)($_POST['csrf'] ?? ''))) $error = 'The setup session expired. Refresh and try again.';
    elseif (strlen($password) < 12) $error = 'Use an administrator password with at least 12 characters.';
    elseif ($password !== $confirm) $error = 'The passwords do not match.';
    elseif (!extension_loaded('pdo_sqlite')) $error = 'PDO SQLite is not enabled for this Hostinger PHP installation.';
    else {
        try {
            $db = new PDO('sqlite:' . DB_FILE, null, null, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
            $db->exec('PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON; CREATE TABLE users (id TEXT PRIMARY KEY, username TEXT UNIQUE NOT NULL, password_hash TEXT NOT NULL, name TEXT NOT NULL, role TEXT NOT NULL, status TEXT NOT NULL, district TEXT NOT NULL DEFAULT "", school_name TEXT NOT NULL DEFAULT "", school_id TEXT NOT NULL DEFAULT "", created_at TEXT NOT NULL); CREATE TABLE drafts (user_id TEXT PRIMARY KEY, data TEXT NOT NULL, saved_at TEXT NOT NULL, FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE); CREATE TABLE reports (id TEXT PRIMARY KEY, user_id TEXT NOT NULL, username TEXT NOT NULL, district TEXT NOT NULL, school_name TEXT NOT NULL, school_id TEXT NOT NULL, submitted_at TEXT NOT NULL, status TEXT NOT NULL, score TEXT NOT NULL, data TEXT NOT NULL, FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE); CREATE INDEX reports_user_idx ON reports(user_id); CREATE INDEX reports_date_idx ON reports(submitted_at DESC);');
            $stmt = $db->prepare('INSERT INTO users (id,username,password_hash,name,role,status,created_at) VALUES (?,?,?,?,?,?,?)');
            $stmt->execute(['admin-001','admin',password_hash($password, PASSWORD_DEFAULT),'Administrator','admin','active',gmdate('c')]);
            file_put_contents(SECRET_FILE, bin2hex(random_bytes(48)), LOCK_EX);
            @chmod(DB_FILE, 0660); @chmod(SECRET_FILE, 0660);
            $ready = true;
        } catch (Throwable $e) { $error = 'Database setup failed. Confirm that the api folder is writable by PHP.'; }
    }
}
?><!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>EIE M&E Database Setup</title><style>body{margin:0;font-family:Arial,sans-serif;background:#eef4fb;color:#183550;display:grid;place-items:center;min-height:100vh}.box{width:min(520px,calc(100% - 32px));background:#fff;border:1px solid #d6e1ec;border-radius:16px;padding:28px;box-shadow:0 18px 55px #173b6520}h1{color:#0b3c72;margin-top:0}label{display:block;font-weight:700;margin:15px 0 6px}input{box-sizing:border-box;width:100%;padding:12px;border:1px solid #bccddd;border-radius:9px}button{width:100%;margin-top:18px;padding:12px;border:0;border-radius:9px;background:#0b4da2;color:#fff;font-weight:800}.error{color:#a52626}.ok{padding:14px;border-radius:9px;background:#e4f5eb;color:#176c45}a{color:#0b4da2;font-weight:700}</style></head><body><main class="box"><h1>EIE M&E Database Setup</h1><?php if($ready): ?><div class="ok"><strong>Database is ready.</strong><p>The setup page is now locked. Sign in with username <b>admin</b> and the password you created.</p><a href="/">Open the monitoring website</a></div><?php else: ?><p>Create the first administrator account. This runs only once and stores the password securely.</p><?php if($error): ?><p class="error"><?=htmlspecialchars($error)?></p><?php endif; ?><form method="post"><input type="hidden" name="csrf" value="<?=htmlspecialchars($_SESSION['setup_csrf'])?>"><label>Administrator password</label><input name="password" type="password" minlength="12" required autocomplete="new-password"><label>Confirm password</label><input name="confirm" type="password" minlength="12" required autocomplete="new-password"><button type="submit">Create Database</button></form><?php endif; ?></main></body></html>

