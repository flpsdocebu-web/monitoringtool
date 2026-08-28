# Hostinger deployment and database setup

Deploy the repository's `main` branch to the domain's `public_html` directory.
Use PHP 8.1 or newer and make sure the `api` directory is writable by PHP.

After the files are deployed, open:

`https://monitoring.sdocebuprovince.com/api/setup.php`

Create a private administrator password of at least 12 characters. The setup
page creates the SQLite database and locks itself automatically. Then open the
main website and sign in with username `admin` and the password you created.

The database files are protected from web access and excluded from Git. Do not
delete `api/monitoring.sqlite` or `api/app.key` during later deployments.
