
const API="/api";
const indicators=[
{code:"A1",domain:"A. Planning and Preparedness",text:"Current LSCP is developed annually and updated every term through participatory planning.",movs:["Approved LSCP","Term revision log","Meeting minutes","Attendance sheets","Consultation notes","Stakeholder sign-off"]},
{code:"A2",domain:"A. Planning and Preparedness",text:"Capability mapping covers learner access/home support and teacher capacity before the school year and informs the LSCP.",movs:["Completed capability-mapping forms/database","Early-registration data","Learner access profile","Teacher capacity profile","Analysis linked to LSCP choices"]},
{code:"A3",domain:"A. Planning and Preparedness",text:"School/CLC capacity and resource inventory is complete and current.",movs:["Printing-capacity inventory","Modules and packets inventory","Digital resources inventory","Emergency kits inventory","LMS/broadcast access record","Communication channels inventory","Inspection/stock cards"]},
{code:"A4",domain:"A. Planning and Preparedness",text:"Learning experiences and resources are preselected for each continuity level and each key stage/CBLC.",movs:["LSCP Part II matrix","Key-stage/CBLC plans","Resource catalogue","Modality-selection rationale","IEP/context adaptations"]},
{code:"A5",domain:"A. Planning and Preparedness",text:"Emergency learning resources are sufficient, accessible, securely stored, and accountable.",movs:["Learner-to-kit computation","Stock and issuance records","Device inventory","Storage/security protocol","Distribution plan","Distribution receipts"]},
{code:"A6",domain:"A. Planning and Preparedness",text:"An updated emergency call tree and alternative communication arrangements are included in the LSCP.",movs:["Call tree with alternates","Contact validation log","Communication allowance/AIP entry","SMS/radio fallback protocol","Drill/test record"]},
{code:"A7",domain:"A. Planning and Preparedness",text:"School-based and community-based CLC requirements and teacher MHPSS/relief strategies are reflected in the proper LSCP and AIP.",movs:["School/SDO LSCP entries","AIP entries","CLC list","MHPSS resource plan","Relief staffing plan","Budget/work plan"]},
{code:"B1",domain:"B. Capacity Building and Engagement",text:"Teachers/ALS implementers understand the learning experiences and competencies required at every continuity level.",movs:["Orientation materials","Attendance record","Pre/post assessment","Competency checklist","Coaching/LAC records","Teacher deployment plan"]},
{code:"B2",domain:"B. Capacity Building and Engagement",text:"At least one annual INSET session covers learning continuity, trauma-informed teaching, psychological first aid, and/or flexible learning experiences.",movs:["Approved INSET program","Session guide","Attendance record","Certificates","Participant outputs","Evaluation results","School L&D record"]},
{code:"B3",domain:"B. Capacity Building and Engagement",text:"Counselors, counselor associates, and guidance advocates are trained and equipped in MHPSS.",movs:["Training certificates","Competency/needs assessment","MHPSS tools","Referral directory","Supervision/coaching records"]},
{code:"B4",domain:"B. Capacity Building and Engagement",text:"Parents/guardians are oriented on the LSCP, modalities, materials, home support, and MHPSS.",movs:["Opening Block orientation program","Attendance record","Parent guide/Family Kit","IEC materials","Follow-up session records","Feedback survey"]},
{code:"B5",domain:"B. Capacity Building and Engagement",text:"LGUs, LCEs, SDOs and relevant partners are engaged for preparedness, access, safety, capacity building, and emergency support.",movs:["MOA/MOU","Coordination minutes","Partner map","Referral/response agreements","Resource commitments","Joint activity reports"]},
{code:"C1",domain:"C. Emergency Decision and Activation",text:"The learning continuity level is selected using safety, well-being, access, readiness, local evidence, culture, and official advisories.",movs:["Decision log","Rapid assessment","Official advisories","Stakeholder consultation notes","Hazard evidence","Signed level determination"]},
{code:"C2",domain:"C. Emergency Decision and Activation",text:"The LSCP is activated promptly and learning priorities match Hayo, Hinay, Hinga, or Hinto.",movs:["Activation order/notice","Class program","Lesson/check-in plans","Workload adjustments","Pacing adjustments","Implementation monitoring notes"]},
{code:"C3",domain:"C. Emergency Decision and Activation",text:"Selected learning experiences/resources match the activated level and learners' safety, readiness, disability, home context, and available support.",movs:["Contextualized materials","Quality-assurance records","IEP adaptations","Accessibility checklist","Sample modules/packets/check-in guides","Teacher logs"]},
{code:"C4",domain:"C. Emergency Decision and Activation",text:"Hinay/Hinga/Hinto learners receive required resources, including one week's printed materials/kits when a shift occurs before prior distribution.",movs:["Distribution master list","Learner acknowledgments","Delivery logs","Photographs with context","Exception/nonreceipt list","Follow-up actions"]},
{code:"C5",domain:"C. Emergency Decision and Activation",text:"Teacher and learner safety/well-being checks are completed through the call tree, with alternates assigned when needed.",movs:["Teacher safety status log","Class contact/check-in log","Alternate teacher assignment","Unresolved-contact escalation record","Privacy-safe summary"]},
{code:"C6",domain:"C. Emergency Decision and Activation",text:"MHPSS, protection, basic-needs response, and referral mechanisms are implemented proportionate to the activated level.",movs:["MHPSS activity log","De-identified referral records","Counselor/guidance reports","Relief/support distribution","Safeguarding records","Consent records"]},
{code:"C7",domain:"C. Emergency Decision and Activation",text:"Level changes and return-to-Hayo decisions are evidence-based, gradual, and supported by fitness, resources, psychosocial readiness, and facility safety.",movs:["Transition assessment","Personnel/learner readiness evidence","Facility safety validation","Authorized inspection","Reopening plan","SDO support record"]},
{code:"C8",domain:"C. Emergency Decision and Activation",text:"Prolonged disruptions trigger the prescribed narrowing of goals, stronger home-school communication, or shift to a flexible learning program.",movs:["Duration tracker","Revised learning plan","FLP approval/implementation record","Communication logs","Intervention requests","Resource requests"]},
{code:"C9",domain:"C. Emergency Decision and Activation",text:"Attendance, assessment, makeup classes, teacher workload, periodical exams, and work immersion are managed according to the level.",movs:["Adjusted class program","Attendance/assessment accommodations","Makeup plan","Workload/compensation records","Exam rescheduling","Work-immersion notices/MOA"]},
{code:"D1",domain:"D. Reporting, Reflection and Improvement",text:"Initial status is reported within 12 hours and updated every 24 hours until return to Hayo, using the official mechanism or approved fallback.",movs:["Time-stamped dashboard entries/screenshots","SMS/radio log","SDO proxy report","Status-change history","Data validation record"]},
{code:"D2",domain:"D. Reporting, Reflection and Improvement",text:"Reports include the level, affected learners/personnel, learning experiences/materials, days lost, damages, and operational status.",movs:["Dashboard-generated report","Learner/class-level summary","Modality/material utilization report","Damage assessment","Class-day loss record"]},
{code:"D3",domain:"D. Reporting, Reflection and Improvement",text:"A quick incident management report is completed after every emergency through collaborative reflection.",movs:["Completed Annex E.3 report","Personnel reflection notes","Rating consolidation","Identified information gaps","Lessons and recommendations"]},
{code:"D4",domain:"D. Reporting, Reflection and Improvement",text:"Incident actions are evaluated for contextual appropriateness, implementation gaps, safety, well-being, and learning continuity.",movs:["Evidence-supported rating for each key action","Learner feedback","Teacher feedback","Parent feedback","Implementation observations","Gap analysis"]},
{code:"D5",domain:"D. Reporting, Reflection and Improvement",text:"Incident reports are consolidated and submitted at term end; SDO findings are synthesized and transmitted as required.",movs:["School consolidation and transmittal","Receiving copy","SDO synthesis","RO/CO transmittal","Submission tracker"]},
{code:"D6",domain:"D. Reporting, Reflection and Improvement",text:"Dashboard and incident evidence is used to revise the LSCP, close capacity gaps, and improve future support.",movs:["LSCP change log","Improvement/action plan","PIR/SMEA minutes","Budget/resource adjustments","Technical-assistance plan","Completion evidence"]}
];
let state={token:null,user:null,emergencyRecords:[],continuityRecords:[],technicalAssistanceRecords:[],draftSaved:false,draftLocked:false,editingSubmissionId:null,hasSubmitted:false};
let editingEmergencyIndex=null,editingContinuityIndex=null;
let presenceTimer=null;
const scoreValues={"Compliant":3,"Partially Compliant":2,"Not Compliant":1};
function ratingFor(p){if(p==null)return"Not yet rated";if(p>=90)return"Outstanding";if(p>=80)return"Very Satisfactory";if(p>=70)return"Satisfactory";if(p>=60)return"Needs Improvement";return"Needs Immediate Technical Assistance"}
function currentSchoolYear(date=new Date()){const year=date.getFullYear(),start=date.getMonth()>=5?year:year-1;return`${start}-${start+1}`}
function calculateScore(items){const a=(items||[]).filter(x=>Object.hasOwn(scoreValues,x.status));const earned=a.reduce((n,x)=>n+scoreValues[x.status],0),maximum=a.length*3,percentage=maximum?Math.round(earned/maximum*10000)/100:null;return{earnedPoints:earned,maximumPoints:maximum,applicableItems:a.length,percentage,rating:ratingFor(percentage)}}
function scoreOfReport(r){const s=r.score||r.data?.score;return s&&s.percentage!=null?s:calculateScore(r.data?.checklist||r.checklist||[])}
function selectedMovs(i){return qsa(`input[name="indicator_${i}_mov_option"]:checked`).map(x=>x.value)}
function automaticStatus(i){const item=indicators[i],na=qs(`#indicator_${i}_na`)?.checked,checked=selectedMovs(i).length;if(na)return"Not Applicable";if(checked===0)return"";if(checked===item.movs.length)return"Compliant";if(checked>=3)return"Partially Compliant";return"Not Compliant"}
function serializeChecklist(){return indicators.map((item,i)=>({indicator:item.text,code:item.code,domain:item.domain,status:automaticStatus(i),mov:selectedMovs(i).join("; "),movChecks:selectedMovs(i)}))}
function updateIndicatorRating(i){const status=automaticStatus(i),field=qs(`#indicator_${i}_status`),pill=qs(`#indicator_${i}_rating`),na=qs(`#indicator_${i}_na`);if(field)field.value=status;if(pill){pill.textContent=status||"Not Yet Rated";pill.className=`auto-rating ${status==="Compliant"?"compliant":status==="Partially Compliant"?"partial":status==="Not Applicable"?"na":status==="Not Compliant"?"noncompliant":"unrated"}`}qsa(`input[name="indicator_${i}_mov_option"]`).forEach(x=>x.disabled=Boolean(na?.checked));updateLiveScore()}
function updateLiveScore(){const box=qs("#liveScore");if(!box)return;const s=calculateScore(serializeChecklist());box.textContent=s.percentage==null?"0.00%":`${s.percentage.toFixed(2)}%`;qs("#livePoints").textContent=s.maximumPoints?`${s.earnedPoints} of ${s.maximumPoints} points • ${s.applicableItems} rated indicator${s.applicableItems===1?"":"s"}`:"Check an MOV to begin scoring.";const p=qs("#liveRating");p.textContent=s.rating;p.className=`rating-pill ${s.percentage==null?"neutral":s.percentage>=80?"high":s.percentage>=60?"mid":"low"}`}

function qs(s){return document.querySelector(s)}
function qsa(s){return [...document.querySelectorAll(s)]}
function toast(msg){const t=qs("#toast");t.textContent=msg;t.classList.remove("hidden");setTimeout(()=>t.classList.add("hidden"),3500)}
async function api(path,opts={}){
  const headers={"Content-Type":"application/json",...(opts.headers||{})};
  if(state.token) headers.Authorization=`Bearer ${state.token}`;
  let r;try{r=await fetch(API+path,{...opts,headers})}catch{throw new Error("Cannot connect to the website service. Please refresh and try again.")}
  const raw=await r.text();let data={};try{data=raw?JSON.parse(raw):{}}catch{}
  if(!r.ok) throw new Error(data.error||(r.status>=500?"The website service is temporarily unavailable. Please try again.":"Request failed."));
  return data;
}
function setTabs(mode){
  qs("#loginForm").classList.toggle("hidden",mode!=="login");
  qs("#registerForm").classList.toggle("hidden",mode!=="register");
  qs("#loginTab").classList.toggle("active",mode==="login");
  qs("#registerTab").classList.toggle("active",mode==="register");
  if(mode==="login")clearLoginFields();
}
function clearLoginFields(){const user=qs("#loginUsername"),pass=qs("#loginPassword");if(user){user.value="";user.readOnly=true}if(pass){pass.value="";pass.type="password";pass.readOnly=true}qs("#toggleLoginPassword").textContent="Show";qs("#loginError").textContent=""}
[qs("#loginUsername"),qs("#loginPassword")].forEach(field=>{field.addEventListener("focus",()=>field.readOnly=false);field.addEventListener("pointerdown",()=>field.readOnly=false)});
window.addEventListener("pageshow",clearLoginFields);
requestAnimationFrame(clearLoginFields);
qs("#loginTab").addEventListener("click",()=>setTabs("login"));
qs("#registerTab").addEventListener("click",()=>setTabs("register"));
qs("#toggleLoginPassword").addEventListener("click",()=>{
  const f=qs("#loginPassword");const show=f.type==="password";f.type=show?"text":"password";qs("#toggleLoginPassword").textContent=show?"Hide":"Show";
});
qs("#loginForm").addEventListener("submit",async e=>{
  e.preventDefault();qs("#loginError").textContent="";const button=e.submitter||qs('#loginForm button[type="submit"]'),label=button?.textContent;if(button){button.disabled=true;button.textContent="Signing in…"}
  try{
    const d=await api("/login",{method:"POST",body:JSON.stringify({username:qs("#loginUsername").value.trim(),password:qs("#loginPassword").value})});
    state.token=d.token;state.user=d.user;sessionStorage.setItem("eieToken",d.token);await openApp();
  }catch(err){qs("#loginError").textContent=err.message}finally{if(button){button.disabled=false;button.textContent=label}}
});
qs("#registerForm").addEventListener("submit",async e=>{
  e.preventDefault();qs("#registerError").textContent="";
  const password=qs("#regPassword").value,confirm=qs("#regConfirmPassword").value;
  if(password!==confirm){qs("#registerError").textContent="Passwords do not match.";return}
  const button=e.submitter||qs('#registerForm button[type="submit"]'),label=button?.textContent;if(button){button.disabled=true;button.textContent="Creating account…"}
  try{
    await api("/register",{method:"POST",body:JSON.stringify({
      district:qs("#regDistrict").value.trim(),schoolName:qs("#regSchoolName").value.trim(),schoolId:qs("#regSchoolId").value.trim(),email:qs("#regEmail").value.trim().toLowerCase(),
      username:qs("#regUsername").value.trim(),password,confirmPassword:confirm
    })});
    toast("Account created and submitted for administrator approval.");qs("#registerForm").reset();setTabs("login");
  }catch(err){qs("#registerError").textContent=err.message}finally{if(button){button.disabled=false;button.textContent=label}}
});
qs("#logoutBtn").addEventListener("click",async()=>{try{await api("/logout",{method:"POST"})}catch{}clearInterval(presenceTimer);presenceTimer=null;sessionStorage.removeItem("eieToken");state={token:null,user:null,emergencyRecords:[],continuityRecords:[],technicalAssistanceRecords:[],draftSaved:false,draftLocked:false,editingSubmissionId:null,hasSubmitted:false};clearLoginFields();qs("#appView").classList.add("hidden");qs("#authView").classList.remove("hidden")});
function startPresence(){clearInterval(presenceTimer);const ping=()=>{if(state.token&&document.visibilityState==="visible")api("/presence",{method:"POST"}).catch(()=>{})};setTimeout(ping,2000);presenceTimer=setInterval(ping,60000)}

function buildChecklist(){
  const tb=qs("#checklistTable tbody");tb.innerHTML="";
  let domain="";indicators.forEach((x,i)=>{if(x.domain!==domain){domain=x.domain;tb.insertAdjacentHTML("beforeend",`<tr class="checklist-domain"><th colspan="6">${esc(domain)}</th></tr>`)}const movs=x.movs.map((mov,j)=>`<label class="mov-option"><input type="checkbox" name="indicator_${i}_mov_option" value="${escAttr(mov)}"><span>${esc(mov)}</span></label>`).join("");tb.insertAdjacentHTML("beforeend",`<tr><td><b>${esc(x.code)}</b></td><td>${esc(x.text)}</td><td><input type="hidden" id="indicator_${i}_status" name="indicator_${i}_status"><span id="indicator_${i}_rating" class="auto-rating unrated">Not Yet Rated</span><label class="na-option"><input type="checkbox" id="indicator_${i}_na"><span>Not Applicable</span></label></td><td><div class="mov-checklist">${movs}</div></td><td><textarea rows="3" name="indicator_${i}_findings"></textarea></td><td><textarea rows="3" name="indicator_${i}_action"></textarea></td></tr>`)});
  indicators.forEach((_,i)=>{qsa(`input[name="indicator_${i}_mov_option"],#indicator_${i}_na`).forEach(x=>x.addEventListener("change",()=>updateIndicatorRating(i)));updateIndicatorRating(i)});configureRequiredFields();updateLiveScore();
}
const emergencyFieldNames=["hazardType","affectedArea","levelActivatedAt","affectedLearners","affectedPersonnel","decisionMaker","reportedAt","reviewDate","assessmentSources","activatedResources","communicationChannels"];
const emergencyFieldLabels={hazardType:"Type of Emergency / Hazard",affectedArea:"Affected Area",levelActivatedAt:"Date and Time Level Activated",affectedLearners:"Affected Learners",affectedPersonnel:"Affected Personnel",decisionMaker:"Decision Maker / Approving Authority",reportedAt:"Date/Time Reported to EiE Dashboard / SDO",reviewDate:"Planned Review / Transition Date",assessmentSources:"Assessment Sources Used",activatedResources:"Learning Experiences / Resources Activated",communicationChannels:"Communication Channels Used"};
const continuityFieldNames=["continuityLevel","learningArrangement","continuityActivationDate","continuityDuration","continuityResponsible","continuityStatus","continuityNotes"];
const taFieldNames=["taIssue","taRootCause","taProvided","taResponsible","taTimeline","taStatus","taFollowUp"];
function configureRequiredFields(){
  const form=qs("#meForm");if(!form)return;
  qsa("#meForm label:not(.mov-option):not(.na-option)").forEach(label=>label.classList.add("required-field"));
  qsa("#meForm input,#meForm select,#meForm textarea").forEach(el=>{
    if(el.type!=="button"&&el.type!=="checkbox"&&el.type!=="hidden"&&!emergencyFieldNames.includes(el.name)&&!continuityFieldNames.includes(el.name)&&!taFieldNames.includes(el.name))el.required=true;
  });
}
function validateNamedFields(names,message){
  const form=qs("#meForm");
  qsa("#meForm .field-invalid").forEach(x=>x.classList.remove("field-invalid"));
  for(const name of names){
    const field=form.elements.namedItem(name);
    const valid=field instanceof RadioNodeList?[...field].some(x=>x.checked):String(field?.value||"").trim()!=="";
    if(!valid){const target=field instanceof RadioNodeList?[...field][0]:field,label=emergencyFieldLabels[name]||target?.closest("label")?.childNodes?.[0]?.textContent?.trim()||"required field";target?.classList.add("field-invalid");toast(`${message} Missing: ${label}.`);target?.focus();target?.scrollIntoView({behavior:"smooth",block:"center"});return false}
  }
  return true;
}
function validateReportForSubmission(){
  if(!(state.emergencyRecords||[]).length){toast("Save at least one complete Emergency / Hazard record before submitting.");qs("#saveEmergency")?.scrollIntoView({behavior:"smooth",block:"center"});return false}
  if(state.emergencyRecords.some(record=>emergencyFieldNames.some(name=>String(record[name]??"").trim()===""))){toast("Every saved Emergency / Hazard record must contain all required activation details.");qs("#emergencyRecords")?.scrollIntoView({behavior:"smooth",block:"center"});return false}
  if(!(state.continuityRecords||[]).length){toast("Save at least one complete Learning Continuity activation before submitting.");qs("#saveContinuity")?.scrollIntoView({behavior:"smooth",block:"center"});return false}
  if(!(state.technicalAssistanceRecords||[]).length){toast("Save at least one complete Technical Assistance record before submitting.");qs("#saveTA")?.scrollIntoView({behavior:"smooth",block:"center"});return false}
  if(state.technicalAssistanceRecords.some(record=>taFieldNames.some(name=>String(record[name]??"").trim()===""))){toast("Every saved Technical Assistance record must contain all required details.");qs("#taRecords")?.scrollIntoView({behavior:"smooth",block:"center"});return false}
  const form=qs("#meForm");if(!form.reportValidity()){toast("Please complete every required field marked with an asterisk.");return false}
  return true;
}
buildChecklist();
const enrollmentNames=["enrollmentES","enrollmentJHS","enrollmentSHS","enrollmentALS"];
function updateEnrollmentTotal(){const total=enrollmentNames.reduce((sum,name)=>sum+(Number(formValue(name))||0),0),field=qs("#meForm")?.elements.namedItem("enrollmentTotal");if(field)field.value=total}
enrollmentNames.forEach(name=>qs("#meForm").elements.namedItem(name)?.addEventListener("input",updateEnrollmentTotal));

function navItems(){
  if(state.user.role==="admin") return [
    ["dashboardPage","Dashboard"],["mePage","M&E Tool"],["usersPage","User Management"],["submissionsPage","Submitted Reports"],["analyticsPage","Reports & Analytics"],["settingsPage","Settings"]
  ];
  return [["mePage","M&E Tool"],["myReportsPage","My Submitted Reports"],["profilePage","Profile"]];
}
function buildNav(){
  const n=qs("#sidebarNav");n.innerHTML="";
  navItems().forEach(([id,label])=>{
    const b=document.createElement("button");b.type="button";b.dataset.page=id;b.innerHTML=`<b>•</b><span>${label}</span>`;
    b.addEventListener("click",()=>showPage(id));n.appendChild(b);
  });
}
async function showPage(id){
  qsa(".page").forEach(p=>p.classList.add("hidden"));qs("#"+id).classList.remove("hidden");
  qsa("#sidebarNav button").forEach(b=>b.classList.toggle("active",b.dataset.page===id));
  const page=qs("#"+id),dynamicPages=["dashboardPage","usersPage","submissionsPage","analyticsPage","myReportsPage"];if(dynamicPages.includes(id)&&!page.dataset.loaded)page.innerHTML=`<div class="page-loading"><div class="loading-spinner"></div><strong>Loading ${esc(qs(`#sidebarNav button[data-page="${id}"]`)?.textContent||"page")}…</strong><span>Please wait a moment.</span></div>`;
  const submissionPanel=qs("#meSubmissionPanel"),showSubmissionPanel=id==="mePage"&&state.user?.role!=="admin";submissionPanel?.classList.toggle("hidden",!showSubmissionPanel);const submissionPanelTask=showSubmissionPanel?renderMeSubmissionPanel():Promise.resolve();
  if(id==="dashboardPage") await renderDashboard();
  if(id==="usersPage") await renderUsers();
  if(id==="submissionsPage") await renderSubmissions();
  if(id==="analyticsPage") await renderAnalytics();
  if(id==="myReportsPage") await renderMyReports();
  if(id==="profilePage") renderProfile();
  if(id==="settingsPage") renderSettings();
  page.dataset.loaded="true";
  if(id==="mePage")await Promise.all([submissionPanelTask,loadDraft()]);else await submissionPanelTask;
}
function fillSchoolProfile(){
  const schoolYear=qs("#meSchoolYear");if(schoolYear)schoolYear.value=currentSchoolYear();
  if(state.user.role!=="admin"){
    qs("#meDistrict").value=state.user.district||"";qs("#meSchoolName").value=state.user.schoolName||"";qs("#meSchoolId").value=state.user.schoolId||"";
    ["#meDistrict","#meSchoolName","#meSchoolId"].forEach(s=>qs(s).readOnly=true);
  }
}
function serializeForm(){
  const d=Object.fromEntries(new FormData(qs("#meForm")).entries());
  d.checklist=indicators.map((item,i)=>{const movChecks=selectedMovs(i);return{indicator:item.text,code:item.code,domain:item.domain,status:automaticStatus(i),mov:movChecks.join("; "),movChecks,findings:d[`indicator_${i}_findings`]||"",action:d[`indicator_${i}_action`]||""}});
  d.emergencies=state.emergencyRecords||[];
  d.continuityActivations=state.continuityRecords||[];
  d.technicalAssistanceRecords=state.technicalAssistanceRecords||[];
  d.score=calculateScore(d.checklist);
  return d;
}
function fillForm(data){
  if(!data)return;
  const legacyLevels={"Level 0 - Normal Operations":"HAYO (Continue)","Level 1 - Preparedness / Alert":"HINAY (Ease-in)","Level 2 - Alternative Learning Delivery":"HINGA (Check-in)","Level 3 - Full Emergency Response":"HINTO (Stop)"};
  if(legacyLevels[data.continuityLevel])data={...data,continuityLevel:legacyLevels[data.continuityLevel]};
  state.emergencyRecords=Array.isArray(data.emergencies)?data.emergencies:[];
  state.continuityRecords=Array.isArray(data.continuityActivations)?data.continuityActivations.map(x=>({...x,level:legacyLevels[x.level]||x.level})):[];
  state.technicalAssistanceRecords=Array.isArray(data.technicalAssistanceRecords)?data.technicalAssistanceRecords:[];
  if(!state.technicalAssistanceRecords.length&&(data.technicalAssistance||data.responsiblePerson||data.overallStatus))state.technicalAssistanceRecords=[{taIssue:data.gaps||"Legacy report issue / gap",taRootCause:"Not specified in legacy report",taProvided:data.technicalAssistance||"Not specified in legacy report",taResponsible:data.responsiblePerson||"Not specified in legacy report",taTimeline:data.targetDate||"Not specified",taStatus:String(data.overallStatus||"").includes("Fully")?"Completed":String(data.overallStatus||"").includes("Ongoing")?"Ongoing":"Open",taFollowUp:data.nextSteps||"Not specified in legacy report"}];
  for(const [k,v] of Object.entries(data)){
    if(k==="checklist"||v==null||typeof v==="object")continue;
    const el=qs("#meForm").elements.namedItem(k);if(!el)continue;
    if(el instanceof RadioNodeList){[...el].forEach(x=>x.checked=x.value===v)} else el.value=v;
  }
  if(Array.isArray(data.checklist)) indicators.forEach((item,i)=>{
    const x=data.checklist.find(saved=>saved.code===item.code||saved.indicator===item.text)||(data.checklist.length===indicators.length?data.checklist[i]:null);if(!x)return;
    const checked=Array.isArray(x.movChecks)?x.movChecks:String(x.mov||x.remarks||"").split(";").map(v=>v.trim()).filter(Boolean);
    qsa(`input[name="indicator_${i}_mov_option"]`).forEach(el=>el.checked=checked.includes(el.value));
    const na=qs(`#indicator_${i}_na`);if(na)na.checked=x.status==="Not Applicable";
    const findings=qs("#meForm").elements.namedItem(`indicator_${i}_findings`),action=qs("#meForm").elements.namedItem(`indicator_${i}_action`);if(findings)findings.value=x.findings||"";if(action)action.value=x.action||"";updateIndicatorRating(i);
  });
  renderEmergencyRecords();renderContinuityRecords();renderTARecords();
  updateEnrollmentTotal();
  updateLiveScore();
}
function formValue(name){return qs("#meForm").elements.namedItem(name)?.value||""}
function clearFields(names){names.forEach(name=>{const el=qs("#meForm").elements.namedItem(name);if(!el)return;if(el instanceof RadioNodeList)[...el].forEach(x=>x.checked=false);else el.value=""})}
function setNamedField(name,value){const el=qs("#meForm").elements.namedItem(name);if(!el)return;if(el instanceof RadioNodeList)[...el].forEach(x=>x.checked=x.value===String(value??""));else el.value=value??""}
function renderEmergencyRecords(){
  const box=qs("#emergencyRecords");if(!box)return;const rows=state.emergencyRecords||[];
  box.innerHTML=rows.length?rows.map((r,i)=>`<div class="saved-record"><div><span class="record-number">Emergency ${i+1}</span><strong>${esc(r.hazardType)} — ${esc(r.affectedArea)}</strong><small>${esc(formatDateTime(r.levelActivatedAt)||"Activation time not specified")} • ${esc(r.affectedLearners||0)} learner(s) • ${esc(r.affectedPersonnel||0)} personnel</small><p><b>Learning response:</b> ${esc(r.activatedResources||"—")}</p><small><b>Approved by:</b> ${esc(r.decisionMaker||"—")} &nbsp; • &nbsp; <b>Review:</b> ${esc(printDate(r.reviewDate)||"—")}</small></div><div class="saved-record-actions"><button class="btn gold edit-emergency" data-index="${i}" type="button">Edit</button><button class="btn red remove-emergency" data-index="${i}" type="button">Remove</button></div></div>`).join(""):`<p class="muted">No emergency records saved yet.</p>`;
  qsa(".edit-emergency").forEach(b=>b.onclick=()=>{const i=Number(b.dataset.index),record=state.emergencyRecords[i];emergencyFieldNames.forEach(name=>setNamedField(name,record[name]));editingEmergencyIndex=i;qs("#saveEmergency").textContent="Update Emergency";qs("#saveEmergency").scrollIntoView({behavior:"smooth",block:"center"});toast(`Editing Emergency ${i+1}.`)});
  qsa(".remove-emergency").forEach(b=>b.onclick=()=>{state.emergencyRecords.splice(Number(b.dataset.index),1);editingEmergencyIndex=null;qs("#saveEmergency").textContent="Save Emergency";renderEmergencyRecords();toast("Emergency record removed.")});
}
function saveEmergencyRecord(){
  if(!validateNamedFields(emergencyFieldNames,"Please complete all required Emergency / Hazard fields."))return;
  const record=Object.fromEntries(emergencyFieldNames.map(name=>[name,formValue(name)]));record.savedAt=new Date().toISOString();
  const updating=Number.isInteger(editingEmergencyIndex);if(updating)state.emergencyRecords[editingEmergencyIndex]=record;else state.emergencyRecords.push(record);editingEmergencyIndex=null;qs("#saveEmergency").textContent="Save Emergency";renderEmergencyRecords();qs("#addEmergency").disabled=false;toast(updating?"Emergency record updated.":"Emergency record saved.");
}
function renderContinuityRecords(){
  const box=qs("#continuityRecords");if(!box)return;const rows=state.continuityRecords||[];
  box.innerHTML=rows.length?rows.map((r,i)=>`<div class="saved-record"><div><span class="record-number">Activation ${i+1}</span><strong>${esc(r.level)}</strong><small>${esc(r.activationDate||"Date not specified")} • ${esc(r.status||"Status not specified")} • ${esc(r.duration||"Duration not specified")}</small><p>${esc(r.arrangement||"No learning delivery arrangement entered.")}</p></div><div class="saved-record-actions"><button class="btn gold edit-continuity" data-index="${i}" type="button">Edit</button><button class="btn red remove-continuity" data-index="${i}" type="button">Remove</button></div></div>`).join(""):`<p class="muted">No continuity-level records saved yet.</p>`;
  qsa(".edit-continuity").forEach(b=>b.onclick=()=>{const i=Number(b.dataset.index),r=state.continuityRecords[i];setNamedField("continuityLevel",r.level);setNamedField("learningArrangement",r.arrangement);setNamedField("continuityActivationDate",r.activationDate);setNamedField("continuityDuration",r.duration);setNamedField("continuityResponsible",r.responsible);setNamedField("continuityStatus",r.status);setNamedField("continuityNotes",r.notes);editingContinuityIndex=i;qs("#saveContinuity").textContent="Update Continuity Level";qs("#saveContinuity").scrollIntoView({behavior:"smooth",block:"center"});toast(`Editing Activation ${i+1}.`)});
  qsa(".remove-continuity").forEach(b=>b.onclick=()=>{state.continuityRecords.splice(Number(b.dataset.index),1);editingContinuityIndex=null;qs("#saveContinuity").textContent="Save Continuity Level";renderContinuityRecords();toast("Continuity record removed.")});
}
function saveContinuityRecord(){
  if(!validateNamedFields(continuityFieldNames,"Please complete all required Learning Continuity fields."))return;
  const record={level:formValue("continuityLevel"),arrangement:formValue("learningArrangement"),activationDate:formValue("continuityActivationDate"),duration:formValue("continuityDuration"),responsible:formValue("continuityResponsible"),status:formValue("continuityStatus"),notes:formValue("continuityNotes"),savedAt:new Date().toISOString()};
  const updating=Number.isInteger(editingContinuityIndex);if(updating)state.continuityRecords[editingContinuityIndex]=record;else state.continuityRecords.push(record);editingContinuityIndex=null;qs("#saveContinuity").textContent="Save Continuity Level";renderContinuityRecords();qs("#addContinuity").disabled=false;toast(updating?"Continuity-level record updated.":"Continuity-level record saved.");
}
function renderTARecords(){
  const box=qs("#taRecords");if(!box)return;const rows=state.technicalAssistanceRecords||[];
  box.innerHTML=rows.length?rows.map((r,i)=>`<div class="saved-record"><div><span class="record-number">Technical Assistance ${i+1}</span><strong>${esc(r.taIssue)}</strong><small>${esc(r.taStatus||"Status not specified")} • ${esc(r.taResponsible||"Responsible person not specified")} • ${esc(printDate(r.taTimeline))}</small><p><b>Root cause:</b> ${esc(r.taRootCause||"—")}</p><p><b>Assistance:</b> ${esc(r.taProvided||"—")}</p><small><b>Follow-up / Evidence:</b> ${esc(r.taFollowUp||"—")}</small></div><button class="btn red remove-ta" data-index="${i}" type="button">Remove</button></div>`).join(""):`<p class="muted">No technical assistance records saved yet.</p>`;
  qsa(".remove-ta").forEach(b=>b.onclick=()=>{state.technicalAssistanceRecords.splice(Number(b.dataset.index),1);renderTARecords();toast("Technical assistance record removed.")});
}
function saveTARecord(){
  if(!validateNamedFields(taFieldNames,"Please complete all required Technical Assistance fields."))return;
  const record=Object.fromEntries(taFieldNames.map(name=>[name,formValue(name)]));record.savedAt=new Date().toISOString();
  state.technicalAssistanceRecords.push(record);renderTARecords();qs("#addTA").disabled=false;toast("Technical assistance record saved.");
}
qs("#saveEmergency").onclick=saveEmergencyRecord;
qs("#addEmergency").onclick=()=>{editingEmergencyIndex=null;clearFields(emergencyFieldNames);qs("#saveEmergency").textContent="Save Emergency";qs("#addEmergency").disabled=true;toast("Ready for another emergency record.")};
qs("#saveContinuity").onclick=saveContinuityRecord;
qs("#addContinuity").onclick=()=>{editingContinuityIndex=null;clearFields(["continuityLevel","learningArrangement","continuityActivationDate","continuityDuration","continuityResponsible","continuityStatus","continuityNotes"]);qs("#saveContinuity").textContent="Save Continuity Level";qs("#addContinuity").disabled=true;toast("Ready for another continuity activation.")};
qs("#saveTA").onclick=saveTARecord;
qs("#addTA").onclick=()=>{clearFields(taFieldNames);qs("#addTA").disabled=true;toast("Ready for another technical assistance entry.")};
async function loadDraft(){
  buildChecklist();fillSchoolProfile();
  state.emergencyRecords=[];state.continuityRecords=[];state.technicalAssistanceRecords=[];renderEmergencyRecords();renderContinuityRecords();renderTARecords();
  let hasDraft=false;try{const d=await api("/draft");if(d.draft){fillForm(d.draft);hasDraft=true}}catch{}
  fillSchoolProfile();
  if(state.user?.role!=="admin")setDraftMode(hasDraft);
}
function setDraftMode(locked){state.draftLocked=Boolean(locked);state.draftSaved=Boolean(locked);const form=qs("#meForm");form?.classList.toggle("draft-locked",state.draftLocked);form?.setAttribute("aria-readonly",String(state.draftLocked));const save=qs("#saveDraft"),edit=qs("#editDraft"),submit=qs("#submitME");if(save)save.disabled=state.draftLocked;if(edit)edit.disabled=!state.draftLocked;if(submit){submit.disabled=!state.draftSaved||(state.hasSubmitted&&!state.editingSubmissionId);submit.textContent=state.editingSubmissionId?"Update Submission":state.hasSubmitted?"Submitted":"Submit"}}
function renderMeActions(){
  const a=qs("#meActions");a.innerHTML="";
  if(state.user.role==="admin"){
    a.innerHTML=`<button class="btn primary" type="button" id="adminSave">Save</button><button class="btn secondary" type="button" id="adminPrint">Print Blank Tool</button>`;
    qs("#adminSave").onclick=async()=>{try{await api("/draft",{method:"POST",body:JSON.stringify({data:serializeForm()})});toast("M&E record saved successfully.")}catch(err){toast(err.message)}};
    qs("#adminPrint").onclick=()=>printMEReport();return
  }
  a.innerHTML=`<button class="btn secondary" type="button" id="saveDraft">Save</button><button class="btn gold" type="button" id="editDraft" disabled>Edit</button><button class="btn green" type="button" id="submitME" disabled>Submit</button><button class="btn secondary" type="button" id="printME">Print</button><button class="btn red" type="button" id="pdfME">Save as PDF</button>`;
  qs("#saveDraft").onclick=async()=>{const button=qs("#saveDraft");button.disabled=true;button.textContent="Saving…";try{await api("/draft",{method:"POST",body:JSON.stringify({data:serializeForm()})});setDraftMode(true);toast("M&E Tool saved. You may now submit or click Edit to make changes.")}catch(err){button.disabled=false;toast(err.message)}finally{button.textContent="Save"}};
  qs("#editDraft").onclick=()=>{setDraftMode(false);toast("Editing enabled. Save your changes again before submitting.")};
  qs("#submitME").onclick=async()=>{if(state.hasSubmitted&&!state.editingSubmissionId){toast("This M&E Tool has already been submitted.");return}if(!state.draftSaved){toast("Save the M&E Tool before submitting.");return}if(!validateReportForSubmission())return;const button=qs("#submitME"),editing=state.editingSubmissionId;button.disabled=true;button.textContent=editing?"Updating…":"Submitting…";try{await api("/submit",{method:"POST",body:JSON.stringify({reportId:editing||null})});state.editingSubmissionId=null;state.hasSubmitted=true;toast(editing?"M&E submission updated successfully.":"M&E report submitted successfully.");await renderMeSubmissionPanel()}catch(err){toast(err.message);setDraftMode(true)}};
  qs("#printME").onclick=()=>printMEReport();
  qs("#pdfME").onclick=()=>savePDF();
}
function savePDF(){
  printMEReport();
}

function printDate(value){if(!value)return"";const d=new Date(`${value}T00:00:00`);return Number.isNaN(d.valueOf())?value:d.toLocaleDateString("en-PH",{year:"numeric",month:"long",day:"numeric"})}
function formatDateTime(value){if(!value)return"";const d=new Date(value);return Number.isNaN(d.valueOf())?value:d.toLocaleString("en-PH",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}
function printCell(label,value){return`<tr><th>${esc(label)}</th><td>${esc(value||"")}</td></tr>`}
function buildPrintReport(){
  const d=serializeForm(),score=d.score||calculateScore(d.checklist),short={"Compliant":"C","Partially Compliant":"PC","Not Compliant":"NC","Not Applicable":"NA"};
  const counts={C:0,PC:0,NC:0,NA:0};(d.checklist||[]).forEach(x=>{if(short[x.status])counts[short[x.status]]++});
  const emergencies=(d.emergencies?.length?d.emergencies:[Object.fromEntries(emergencyFieldNames.map(name=>[name,d[name]]))]).filter(x=>x.hazardType||x.affectedArea||x.levelActivatedAt);
  const activations=(d.continuityActivations?.length?d.continuityActivations:[{level:d.continuityLevel,arrangement:d.learningArrangement,activationDate:d.continuityActivationDate,duration:d.continuityDuration,responsible:d.continuityResponsible,status:d.continuityStatus,notes:d.continuityNotes}]).filter(x=>x.level||x.arrangement);
  const taRecords=d.technicalAssistanceRecords?.length?d.technicalAssistanceRecords:(d.technicalAssistance||d.responsiblePerson?[{taIssue:d.gaps,taRootCause:"",taProvided:d.technicalAssistance,taResponsible:d.responsiblePerson,taTimeline:d.targetDate,taStatus:d.overallStatus,taFollowUp:d.nextSteps}]:[]);
  let printedDomain="";const checkRows=(d.checklist||[]).map((x,i)=>{const domain=x.domain||indicators[i]?.domain||"";const heading=domain!==printedDomain?`<tr class="print-domain"><th colspan="9">${esc(domain)}</th></tr>`:"";printedDomain=domain;return`${heading}<tr><td class="center">${esc(x.code||indicators[i]?.code||i+1)}</td><td>${esc(x.indicator)}</td><td class="center mark">${x.status==="Compliant"?"✓":""}</td><td class="center mark">${x.status==="Partially Compliant"?"✓":""}</td><td class="center mark">${x.status==="Not Compliant"?"✓":""}</td><td class="center mark">${x.status==="Not Applicable"?"✓":""}</td><td>${esc(x.mov||x.remarks||"")}</td><td>${esc(x.findings||"")}</td><td>${esc(x.action||"")}</td></tr>`}).join("");
  const domainRows=[...new Set(indicators.map(x=>x.domain))].map(domain=>{const items=(d.checklist||[]).filter((x,i)=>(x.domain||indicators[i]?.domain)===domain),domainScore=calculateScore(items),domainCounts={C:0,PC:0,NC:0,NA:0};items.forEach(x=>{if(short[x.status])domainCounts[short[x.status]]++});return`<tr><td>${esc(domain.replace(/^[A-H]\. /,""))}</td><td>${domainCounts.C}</td><td>${domainCounts.PC}</td><td>${domainCounts.NC}</td><td>${domainCounts.NA}</td><td>${domainScore.applicableItems}</td><td>${domainScore.percentage==null?"—":domainScore.percentage.toFixed(2)+"%"}</td></tr>`}).join("");
  qs("#printReport").innerHTML=`
    <div class="print-sheet print-cover">
      <header class="report-header"><img src="/assets/cebu-province-logo-web.png" alt=""><div><div>REPUBLIC OF THE PHILIPPINES</div><strong>DEPARTMENT OF EDUCATION</strong><small>SCHOOLS DIVISION OF CEBU PROVINCE</small></div></header>
      <div class="cover-title"><h1>MONITORING AND<br>EVALUATION TOOL</h1><h2>Learning and Service Continuity Plan (LSCP)</h2><p>Anchored on DepEd Order No. 14, s. 2026<br>Guidelines on Learning Continuity in Emergencies</p></div>
      <table class="form-table cover-details">${printCell("School",d.schoolName)}${printCell("Schools Division Office",d.division)}${printCell("Region",d.region)}${printCell("School Year",d.schoolYear)}${printCell("Monitoring Date",printDate(d.monitoringDate))}${printCell("Evaluator / Team",d.monitoredBy)}</table>
      <p class="controlled">CONTROLLED WORKING COPY &nbsp;•&nbsp; OFFICIAL SYSTEM-GENERATED REPORT</p>
    </div>
    <div class="print-sheet">
      <h2 class="section-title">1. School Profile</h2>
      <table class="form-table">${printCell("Region / SDO / District",[d.region,d.division,d.district].filter(Boolean).join(" / "))}${printCell("School Name / School ID",[d.schoolName,d.schoolId].filter(Boolean).join(" / "))}${printCell("School Year",d.schoolYear)}${printCell("Date of Monitoring",printDate(d.monitoringDate))}${printCell("School Address / Contact Details",[d.schoolAddress,d.schoolContact].filter(Boolean).join(" / "))}${printCell("School Head / Contact Number",[d.schoolHead,d.schoolHeadContact].filter(Boolean).join(" / "))}${printCell("School Type",d.schoolType)}${printCell("Classification / Location",d.schoolClassification)}${printCell("Enrollment",`ES: ${d.enrollmentES||0} | JHS: ${d.enrollmentJHS||0} | SHS: ${d.enrollmentSHS||0} | ALS: ${d.enrollmentALS||0} | Total: ${d.enrollmentTotal||0}`)}${printCell("Personnel",`Teaching: ${d.personnelTeaching||0} | Non-teaching: ${d.personnelNonTeaching||0} | ALS Implementers: ${d.personnelALS||0} | Volunteers/Partners: ${d.personnelVolunteers||0}`)}${printCell("Date LSCP developed / last updated",printDate(d.lscpUpdatedDate))}${printCell("Stakeholders involved in LSCP development",d.lscpStakeholders)}${printCell("LSCP reflected in SIP/AIP",d.lscpInSipAip)}</table>
      <h2 class="section-title">2. Emergency / Hazard Profile</h2>
      ${emergencies.length?emergencies.map((x,i)=>`<h3 class="sub-title">Emergency ${i+1}</h3><table class="form-table emergency-print-details">${printCell("Emergency / hazard and affected area",[x.hazardType,x.affectedArea].filter(Boolean).join(" — "))}${printCell("Date and time level activated",formatDateTime(x.levelActivatedAt))}${printCell("Decision maker / approving authority",x.decisionMaker)}${printCell("Assessment sources used",x.assessmentSources)}${printCell("Learners / personnel affected",`${x.affectedLearners||0} learners / ${x.affectedPersonnel||0} personnel`)}${printCell("Learning experiences/resources activated",x.activatedResources)}${printCell("Communication channels used",x.communicationChannels)}${printCell("Date/time reported to EiE dashboard / SDO",formatDateTime(x.reportedAt))}${printCell("Planned review / transition date",printDate(x.reviewDate))}</table>`).join(""):`<table class="form-table emergency-print-details">${["Emergency / hazard and affected area","Date and time level activated","Decision maker / approving authority","Assessment sources used","Learners / personnel affected","Learning experiences/resources activated","Communication channels used","Date/time reported to EiE dashboard / SDO","Planned review / transition date"].map(label=>printCell(label,"")).join("")}</table>`}
      <h2 class="section-title">3. Activated Learning Continuity Level</h2>
      <table class="report-grid"><thead><tr><th>Selected Level</th><th>Learning Delivery Arrangement</th><th>Date Activated</th><th>Status / Duration</th><th>Responsible Person</th><th>Basis / Actions Taken</th></tr></thead><tbody>${activations.length?activations.map(x=>`<tr><td>${esc(x.level||"")}</td><td>${esc(x.arrangement||"")}</td><td>${esc(printDate(x.activationDate))}</td><td>${esc([x.status,x.duration].filter(Boolean).join(" / "))}</td><td>${esc(x.responsible||"")}</td><td>${esc(x.notes||"")}</td></tr>`).join(""):`<tr><td colspan="6" class="blank-row"></td></tr>`}</tbody></table>
    </div>
    <div class="print-sheet print-landscape">
      <h2 class="section-title">4. Compliance and Implementation Checklist</h2>
      <p class="guide"><b>Automatic MOV rating:</b> No MOV selected = Not Yet Rated; 1–2 MOVs = Not Compliant; at least 3 but not all = Partially Compliant; all MOVs = Compliant. Approved Not Applicable items are excluded from scoring.</p>
      <table class="report-grid checklist-print"><thead><tr><th>Code</th><th>Indicator</th><th>C</th><th>PC</th><th>NC</th><th>NA</th><th>Checked Means of Verification</th><th>Findings / Gaps</th><th>Remarks / Action Needed</th></tr></thead><tbody>${checkRows}</tbody></table>
    </div>
    <div class="print-sheet">
      <h2 class="section-title">5. Rating Summary</h2>
      <table class="report-grid summary-table domain-summary"><thead><tr><th>Domain</th><th>C</th><th>PC</th><th>NC</th><th>NA</th><th>Applicable Items</th><th>Score</th></tr></thead><tbody>${domainRows}<tr class="summary-total"><td><b>TOTAL / OVERALL</b></td><td>${counts.C}</td><td>${counts.PC}</td><td>${counts.NC}</td><td>${counts.NA}</td><td>${score.applicableItems}</td><td><b>${score.percentage==null?"—":score.percentage.toFixed(2)+"%"}</b></td></tr></tbody></table>
      <p class="overall-print-rating"><b>Descriptive Rating:</b> ${esc(score.rating)} &nbsp; | &nbsp; <b>Points:</b> ${score.earnedPoints} of ${score.maximumPoints}</p>
      <p class="guide"><b>Automatic computation used by the online tool:</b> earned points ÷ maximum applicable points × 100. Compliant = 3; Partially Compliant = 2; Not Compliant = 1; Not Applicable is excluded.</p>
    </div>
    <div class="print-sheet print-landscape">
      <h2 class="section-title">6. Summary of Technical Assistance</h2>
      <table class="report-grid ta-table"><thead><tr><th>No.</th><th>Issue / Gap</th><th>Root Cause</th><th>Technical Assistance Provided / Agreed</th><th>Responsible Person / Office</th><th>Timeline</th><th>Status</th><th>Follow-up / Evidence</th></tr></thead><tbody>${taRecords.length?taRecords.map((x,i)=>`<tr><td class="center">${i+1}</td><td>${esc(x.taIssue||"")}</td><td>${esc(x.taRootCause||"")}</td><td>${esc(x.taProvided||"")}</td><td>${esc(x.taResponsible||"")}</td><td>${esc(printDate(x.taTimeline))}</td><td>${esc(x.taStatus||"")}</td><td>${esc(x.taFollowUp||"")}</td></tr>`).join(""):Array.from({length:6},(_,i)=>`<tr><td class="center">${i+1}</td><td></td><td></td><td></td><td></td><td></td><td>☐ Open<br>☐ Ongoing<br>☐ Completed</td><td></td></tr>`).join("")}</tbody></table>
    </div>
    <div class="print-sheet">
      <h2 class="section-title">7. Overall Findings and Recommendations</h2>
      <div class="narrative"><h3>Key strengths / good practices</h3><p>${esc(d.strengths||"")}</p><h3>Priority gaps / risks requiring action</h3><p>${esc(d.gaps||"")}</p><h3>Recommendations and agreed next steps</h3><p>${esc(d.nextSteps||"")}</p><h3>Support required from District / SDO / partners</h3><p>${esc(d.supportRequired||"")}</p><h3>Additional remarks</h3><p>${esc(d.additionalRemarks||"")}</p></div>
      <h2 class="section-title">8. Signatures and Acknowledgment</h2>
      <p class="acknowledgment">The findings and agreed technical assistance/actions were discussed with the school personnel concerned. Signatures acknowledge receipt and discussion; they do not preclude submission of clarifications or additional evidence.</p>
      <table class="signature-table"><tbody><tr><td><div class="printed-signatory">${esc(d.schoolHead||"")}</div><div class="signature-line"></div><div class="signature-caption">Name and Signature</div><div class="signature-date">Date:<span></span></div></td><td><div class="printed-signatory">${esc(d.validatedBy||"")}</div><div class="signature-line"></div><div class="signature-caption">Name and Signature</div><div class="signature-date">Date:<span></span></div></td><td><div class="printed-signatory">${esc(d.monitoredBy||"")}</div><div class="signature-line"></div><div class="signature-caption">Name and Signature</div><div class="signature-date">Date:<span></span></div></td></tr><tr class="signature-roles"><th>School Head</th><th>Public Schools District Supervisor</th><th>Evaluator / M&amp;E Team Leader</th></tr></tbody></table>
    </div>`;
}
function printMEReport(){buildPrintReport();document.body.classList.add("printing-report");qs("#printReport").setAttribute("aria-hidden","false");setTimeout(()=>window.print(),60)}
window.addEventListener("afterprint",()=>{document.body.classList.remove("printing-report");qs("#printReport")?.setAttribute("aria-hidden","true")});
async function renderDashboard(){
  const d=await api("/dashboard"),reports=d.reports||d.recent||[],latest=d.latest||[...[...reports].sort((a,b)=>new Date(b.submittedAt)-new Date(a.submittedAt)).reduce((m,r)=>{const key=r.schoolId||String(r.schoolName||"").trim().toLowerCase()||r.id;if(!m.has(key))m.set(key,r);return m},new Map()).values()],metrics=d.metrics||{};
  const scores=latest.map(scoreOfReport).filter(s=>s.percentage!=null);
  const average=scores.length?scores.reduce((n,s)=>n+s.percentage,0)/scores.length:null;
  const overallRating=ratingFor(average);
  const answeredItems=metrics.answeredItems||0,expectedItems=metrics.expectedItems||0,completionRate=expectedItems?answeredItems/expectedItems*100:null;
  const emergencyCount=metrics.emergencyCount||0,technicalAssistanceCount=metrics.technicalAssistanceCount||0;
  const continuityBands=["HAYO","HINAY","HINGA","HINTO"].map(level=>[level,metrics.continuity?.[level]||0]);
  const urgentActivations=continuityBands.filter(([level])=>level==="HINGA"||level==="HINTO").reduce((n,[,count])=>n+count,0);
  const domainPerformance=metrics.domainPerformance||[],topHazards=Object.entries(metrics.hazards||{}).sort((a,b)=>b[1]-a[1]);
  const bands=[["Outstanding",scores.filter(s=>s.percentage>=90).length,"high","#1c8f5b"],["Very Satisfactory",scores.filter(s=>s.percentage>=80&&s.percentage<90).length,"high","#57b985"],["Satisfactory",scores.filter(s=>s.percentage>=70&&s.percentage<80).length,"mid","#1768c5"],["Needs Improvement",scores.filter(s=>s.percentage>=60&&s.percentage<70).length,"mid","#f4b400"],["Needs Immediate Technical Assistance",scores.filter(s=>s.percentage<60).length,"low","#c33d3d"]];
  let donutCursor=0;const donutStops=bands.map(([,count,,color])=>{const start=donutCursor;donutCursor+=scores.length?count/scores.length*100:0;return`${color} ${start}% ${donutCursor}%`}).join(",");
  const donutBackground=scores.length?`conic-gradient(${donutStops})`:"#e4ebf3";
  const overallClass=average==null?"neutral":average>=80?"high":average>=60?"mid":"low";
  qs("#dashboardPage").innerHTML=`<div class="page-title"><div><div class="kicker">ADMINISTRATOR</div><h2>Dashboard</h2><p>Division-wide status of registered schools and EIE M&E submissions.</p></div></div>
  <div class="stats dashboard-primary-stats"><div class="stat"><span>Registered Schools</span><strong>${d.registeredSchools}</strong></div><div class="stat online-stat"><span>Users Online</span><strong>${d.onlineUsers||0}</strong><small>Active within the last 3 minutes</small></div><div class="stat"><span>Submitted Reports</span><strong>${latest.length}</strong><small>Unique schools represented in District Submission Distribution</small></div><div class="stat"><span>Division Average</span><strong>${average==null?"—":average.toFixed(2)+"%"}</strong></div><div class="stat"><span>Outstanding Schools</span><strong>${scores.filter(s=>s.percentage>=90).length}</strong></div></div>
  <div class="stats operational-stats"><div class="stat"><span>Checklist Completion</span><strong>${completionRate==null?"—":completionRate.toFixed(1)+"%"}</strong><small>${answeredItems} of ${expectedItems} expected responses</small></div><div class="stat"><span>Recorded Emergencies</span><strong>${emergencyCount}</strong><small>From each school's latest report</small></div><div class="stat"><span>HINGA / HINTO Activations</span><strong>${urgentActivations}</strong><small>May require closer division support</small></div><div class="stat"><span>Technical Assistance Actions</span><strong>${technicalAssistanceCount}</strong><small>${metrics.technicalAssistanceOpen||0} open • ${metrics.technicalAssistanceOngoing||0} ongoing</small></div></div>
  <article class="card overall-card"><div class="overall-head"><div><div class="kicker">OVERALL DIVISION PERFORMANCE</div><h3>${esc(overallRating)}</h3><p>${scores.length} of ${d.registeredSchools} registered school${d.registeredSchools===1?"":"s"} evaluated using their latest submission.</p></div><div class="overall-score ${overallClass}">${average==null?"—":average.toFixed(2)+"%"}</div></div><div class="overall-progress"><span style="width:${average||0}%"></span></div><div class="band-grid">${bands.map(([label,count,tone])=>`<div class="band-item ${tone}"><strong>${count}</strong><span>${esc(label)}</span></div>`).join("")}</div>${bands[4][1]?`<div class="ta-alert"><strong>${bands[4][1]} school${bands[4][1]===1?"":"s"}</strong> currently need immediate technical assistance based on their latest rating.</div>`:""}</article>
  <div class="dashboard-two"><article class="card"><h3>Overall Rating Distribution</h3><div class="donut-layout"><div class="donut-chart" role="img" aria-label="Rating distribution for ${scores.length} evaluated schools" style="background:${donutBackground}"><div class="donut-center"><strong>${scores.length}</strong><span>Evaluated<br>Schools</span></div></div><div class="donut-legend">${bands.map(([label,count,,color])=>`<div><i style="background:${color}"></i><span>${esc(label)}</span><strong>${count} <small>(${scores.length?Math.round(count/scores.length*100):0}%)</small></strong></div>`).join("")}</div></div></article><article class="card"><h3>Activated Continuity Levels</h3><div class="continuity-summary">${continuityBands.map(([level,count])=>`<div class="continuity-count ${level.toLowerCase()}"><strong>${count}</strong><span>${level}</span></div>`).join("")}</div><h3 class="dashboard-subtitle">Emergency / Hazard Profile</h3>${topHazards.length?`<div class="hazard-list">${topHazards.map(([name,count])=>`<div><span>${esc(name)}</span><strong>${count}</strong></div>`).join("")}</div>`:`<p class="muted">No emergency records in the latest reports.</p>`}</article></div>
  <article class="card district-distribution-card"><div class="district-distribution-heading"><div><h3>District Submission Distribution</h3><p class="muted">Calculated from School Rating Submissions, counting each school only once. When a school submits more than once, only its latest M&E Tool and recorded district are included.</p></div><span class="badge gray">${new Set(latest.map(r=>canonicalDistrictClient(r.district)||r.district).filter(Boolean)).size} of 58 represented</span></div>${districtReportDonutCards(latest)}</article>
  <article class="card"><h3>Performance by Compliance Domain</h3><p class="muted">Aggregated from the latest school submission and excluding Not Applicable items.</p><div class="domain-performance">${domainPerformance.map(x=>`<div class="domain-performance-row"><span>${esc(x.domain)}</span><div class="domain-track"><i style="width:${x.percentage||0}%"></i></div><strong>${x.percentage==null?"—":x.percentage.toFixed(1)+"%"}</strong><small>${x.applicable} items</small></div>`).join("")}</div></article>
  <article class="card"><h3>School Rating Submissions</h3><p class="muted">All submitted reports are shown below in date-and-time order. Division statistics above continue to use each school's latest submission.</p>${renderSubmissionTable(reports,false)}</article>`;
}
function renderSubmissionTable(rows,actions=true){
  if(!rows.length)return `<p class="muted">No submissions yet.</p>`;
  return `<div class="table-wrap"><table><thead><tr><th>School</th><th>District</th><th>School ID</th><th>Submitted</th><th>Score</th><th>Rating</th><th>Status</th>${actions?"<th>Action</th>":""}</tr></thead><tbody>${rows.map(r=>{const s=scoreOfReport(r);return`<tr><td>${esc(r.schoolName)}</td><td>${esc(r.district)}</td><td>${esc(r.schoolId)}</td><td>${new Date(r.submittedAt).toLocaleString()}</td><td><strong>${s.percentage==null?"—":s.percentage.toFixed(2)+"%"}</strong></td><td><span class="badge ${s.percentage==null?"gray":s.percentage>=80?"green":s.percentage>=60?"gold":"red"}">${esc(s.rating)}</span></td><td><span class="badge green">${esc(r.status||"Submitted")}</span></td>${actions?`<td><button class="btn secondary view-report" data-id="${r.id}" type="button">View</button></td>`:""}</tr>`}).join("")}</tbody></table></div>`;
}
async function renderUsers(){
  const d=await api("/users");
  const schoolUsers=d.users.filter(u=>u.role!=="admin").map(u=>{const canonical=canonicalDistrictClient(u.district);return{...u,district:canonical||u.district,districtValid:Boolean(canonical)}}),active=schoolUsers.filter(u=>u.status==="active").length,pending=schoolUsers.length-active,districts=new Set(schoolUsers.map(u=>(u.district||"Unassigned").trim().toLowerCase())).size,invalidDistricts=schoolUsers.filter(u=>u.districtValid===false).length;
  qs("#usersPage").innerHTML=`<div class="page-title"><div><div class="kicker">ADMINISTRATION</div><h2>User Management</h2><p>Review and manage school accounts by district.</p></div></div>
  <div class="stats user-stats"><div class="stat"><span>Total School Accounts</span><strong>${schoolUsers.length}</strong><small>Registered users</small></div><div class="stat online-stat"><span>Users Online</span><strong>${d.onlineUsers||0}</strong><small>Active within the last 3 minutes</small></div><div class="stat"><span>Approved Accounts</span><strong>${active}</strong><small>Can access the system</small></div><div class="stat"><span>Pending Approval</span><strong>${pending}</strong><small>Waiting for activation</small></div><div class="stat"><span>District Coverage</span><strong>${districts} / 58</strong><small>${Math.max(0,58-districts)} districts without registered accounts</small></div></div>
  ${invalidDistricts?`<div class="district-warning"><strong>${invalidDistricts} account${invalidDistricts===1?" has":"s have"} an unrecognized district name.</strong><span>The account is flagged for correction and is not merged with an official district.</span></div>`:""}<article class="card district-distribution-card"><div class="district-distribution-heading"><div><h3>District Account Distribution</h3><p class="muted">Equivalent spellings, capitalization, spacing, Arabic numerals, Roman numerals, and the word “district” are automatically merged under the official district name.</p></div><span class="badge gray">${districts} of 58 represented</span></div>${districtDonutCards(schoolUsers)}</article>
  <article class="card"><div class="user-toolbar"><div><h3>Registered School Accounts</h3><p class="muted">Select accounts individually or check all visible accounts for bulk approval.</p></div><div class="user-toolbar-actions"><label class="select-all-users"><input id="selectAllUsers" type="checkbox"> Check all accounts</label><button id="approveSelectedUsers" class="btn green" type="button" disabled>Approve Selected</button><input id="userSearch" placeholder="Search school, district, ID, username, or email"></div></div><div id="userGroups"></div></article>`;
  const renderFiltered=()=>{const term=qs("#userSearch").value.trim().toLowerCase(),filtered=schoolUsers.filter(u=>`${u.schoolName} ${u.district} ${u.schoolId} ${u.username} ${u.email}`.toLowerCase().includes(term));qs("#userGroups").innerHTML=userDistrictGroups(filtered);qs("#selectAllUsers").checked=false;qs("#selectAllUsers").indeterminate=false;bindUserActions();updateBulkUserControls()};
  qs("#userSearch").oninput=renderFiltered;
  qs("#selectAllUsers").onchange=e=>{qsa(".user-select").forEach(x=>x.checked=e.target.checked);updateBulkUserControls()};
  qs("#approveSelectedUsers").onclick=async()=>{const selected=qsa('.user-select:checked').filter(x=>x.dataset.status!=="active");if(!selected.length){toast("Select at least one pending account to approve.");return}await Promise.all(selected.map(x=>api("/users/update",{method:"POST",body:JSON.stringify({id:x.value,status:"active"})})));toast(`${selected.length} account${selected.length===1?"":"s"} approved.`);renderUsers()};
  renderFiltered();
}
function districtKeyClient(value){return String(value||"").toLowerCase().replace(/[Ⅰⅰ]/g,"1").replace(/[Ⅱⅱ]/g,"2").replace(/\b(?:district|distict|distrct)\b/g," ").replace(/\bii\b/g,"2").replace(/\bi\b/g,"1").replace(/[^a-z0-9]/g,"")}
function districtEditDistance(a,b){const row=Array.from({length:b.length+1},(_,i)=>i);for(let i=1;i<=a.length;i++){let previous=row[0];row[0]=i;for(let j=1;j<=b.length;j++){const saved=row[j];row[j]=Math.min(row[j]+1,row[j-1]+1,previous+(a[i-1]===b[j-1]?0:1));previous=saved}}return row[b.length]}
function canonicalDistrictClient(value){const key=districtKeyClient(value),options=qsa("#regDistrict option").map(x=>x.value).filter(Boolean),aliases={bantayanl:"Bantayan I"};if(!key)return null;if(aliases[key])return aliases[key];const exact=options.find(name=>districtKeyClient(name)===key);if(exact)return exact;const ranked=options.map(name=>({name,distance:districtEditDistance(key,districtKeyClient(name))})).sort((a,b)=>a.distance-b.distance),limit=key.length<=6?1:2;return ranked[0]?.distance<=limit&&ranked[0].distance!==ranked[1]?.distance?ranked[0].name:null}
function districtPastel(name){let hash=0;for(const char of name)hash=(hash*31+char.charCodeAt(0))>>>0;return`hsl(${hash%360} 58% 74%)`}
function districtReportDonutCards(reports){if(!reports.length)return`<div class="empty-state"><strong>No district submissions yet</strong><span>District graphs will appear after schools submit their M&amp;E Tool.</span></div>`;const groups=reports.reduce((m,r)=>{const canonical=canonicalDistrictClient(r.district),district=canonical||(r.district||"Unassigned District").trim()||"Unassigned District";(m[district]??=[]).push(r);return m},{}),total=reports.length;return`<div class="district-donut-grid">${Object.keys(groups).sort((a,b)=>a.localeCompare(b)).map(district=>{const rows=groups[district],count=rows.length,percentage=count/total*100,values=rows.map(scoreOfReport).map(x=>x.percentage).filter(x=>x!=null),average=values.length?values.reduce((sum,x)=>sum+x,0)/values.length:null,color=districtPastel(district),invalid=!canonicalDistrictClient(district);return`<section class="district-donut-card ${invalid?"district-invalid":""}" style="--district-color:${color}"><div class="district-mini-donut" role="img" aria-label="${escAttr(district)} represents ${percentage.toFixed(1)} percent of schools with submissions" style="background:conic-gradient(var(--district-color) 0 ${percentage}%,#edf1f5 ${percentage}% 100%)"><div><strong>${percentage.toFixed(1)}%</strong><span>of schools</span></div></div><div class="district-donut-copy"><h4>${esc(district)}</h4><p><strong>${count}</strong> school${count===1?"":"s"}</p><small>Latest-score average: ${average==null?"Not rated":average.toFixed(2)+"%"}${invalid?" • Needs correction":""}</small></div></section>`}).join("")}</div>`}
function districtDonutCards(users){if(!users.length)return`<div class="empty-state"><strong>No district data yet</strong><span>District donuts will appear when school accounts register.</span></div>`;const groups=users.reduce((m,u)=>{const district=(u.district||"Unassigned District").trim()||"Unassigned District";(m[district]??=[]).push(u);return m},{}),total=users.length;return`<div class="district-donut-grid">${Object.keys(groups).sort((a,b)=>a.localeCompare(b)).map(district=>{const rows=groups[district],count=rows.length,approved=rows.filter(u=>u.status==="active").length,pending=count-approved,invalid=rows.some(u=>u.districtValid===false),percentage=count/total*100,color=districtPastel(district);return`<div class="district-donut-card ${invalid?"district-invalid":""}" style="--district-color:${color}"><div class="district-mini-donut" role="img" aria-label="${escAttr(district)} has ${percentage.toFixed(1)} percent of registered accounts" style="background:conic-gradient(var(--district-color) 0 ${percentage}%,#edf1f5 ${percentage}% 100%)"><div><strong>${percentage.toFixed(1)}%</strong><span>of accounts</span></div></div><div class="district-donut-copy"><h4>${esc(district)}</h4><p><strong>${count}</strong> account${count===1?"":"s"}</p><small>${approved} approved • ${pending} pending${invalid?" • Needs correction":""}</small></div></div>`}).join("")}</div>`}
function userDistrictGroups(users){if(!users.length)return`<div class="empty-state"><strong>No matching school accounts</strong><span>Try another search term.</span></div>`;const groups=users.reduce((m,u)=>{const district=(u.district||"Unassigned District").trim()||"Unassigned District";(m[district]??=[]).push(u);return m},{});return Object.keys(groups).sort((a,b)=>a.localeCompare(b)).map(district=>{const rows=groups[district].sort((a,b)=>(a.schoolName||"").localeCompare(b.schoolName||"")),pending=rows.filter(u=>u.status!=="active").length,invalid=rows.some(u=>u.districtValid===false);return`<section class="district-user-group ${invalid?"district-invalid":""}"><header><div><h3>${esc(district)}</h3><span>${rows.length} account${rows.length===1?"":"s"}</span></div><div class="district-group-badges">${invalid?'<span class="badge red">Needs district correction</span>':""}<span class="badge ${pending?"red":"green"}">${pending?`${pending} pending`:"All approved"}</span></div></header>${userTable(rows)}</section>`}).join("")}
function userTable(users){return `<div class="table-wrap"><table class="user-table"><thead><tr><th class="select-column">Select</th><th>School</th><th>School ID</th><th>Username</th><th>Email</th><th>Status</th><th>Actions</th></tr></thead><tbody>${users.map(u=>`<tr><td class="select-column"><input class="user-select" type="checkbox" value="${escAttr(u.id)}" data-status="${escAttr(u.status)}" aria-label="Select ${escAttr(u.schoolName||u.username)}"></td><td><strong>${esc(u.schoolName||u.name||"School Account")}</strong></td><td>${esc(u.schoolId||"—")}</td><td>${esc(u.username)}</td><td>${esc(u.email||"Legacy account — no email")}</td><td><span class="badge ${u.status==="active"?"green":"red"}">${u.status==="active"?"Approved":"Pending"}</span></td><td><button class="btn secondary user-toggle" data-id="${u.id}" data-status="${u.status}" type="button">${u.status==="active"?"Deactivate":"Approve"}</button> <button class="btn gold user-reset" data-id="${u.id}" data-school="${escAttr(u.schoolName||u.username)}" type="button">Reset Password</button> <button class="btn red user-delete" data-id="${u.id}" type="button">Delete</button></td></tr>`).join("")}</tbody></table></div>`}
function updateBulkUserControls(){const boxes=qsa(".user-select"),checked=boxes.filter(x=>x.checked),pending=checked.filter(x=>x.dataset.status!=="active"),all=qs("#selectAllUsers"),button=qs("#approveSelectedUsers");if(all){all.checked=boxes.length>0&&checked.length===boxes.length;all.indeterminate=checked.length>0&&checked.length<boxes.length}if(button){button.disabled=pending.length===0;button.textContent=pending.length?`Approve Selected (${pending.length})`:"Approve Selected"}}
function bindUserActions(){
  qsa(".user-select").forEach(x=>x.onchange=updateBulkUserControls);
  qsa(".user-toggle").forEach(b=>b.onclick=async()=>{await api("/users/update",{method:"POST",body:JSON.stringify({id:b.dataset.id,status:b.dataset.status==="active"?"inactive":"active"})});toast("User updated.");renderUsers()});
  qsa(".user-reset").forEach(b=>b.onclick=async()=>{if(!confirm(`Reset the password for ${b.dataset.school}?`))return;const d=await api("/users/reset-password",{method:"POST",body:JSON.stringify({id:b.dataset.id})});openModal(`<h2>Password Reset</h2><p>The temporary password for <strong>${esc(b.dataset.school)}</strong> is shown below. Copy and provide it securely to the user. It will not be shown again after closing this window.</p><div class="temporary-password"><code id="temporaryPasswordValue">${esc(d.temporaryPassword)}</code><button class="btn primary" id="copyTemporaryPassword" type="button">Copy Password</button></div>`);qs("#copyTemporaryPassword").onclick=async()=>{try{await navigator.clipboard.writeText(d.temporaryPassword);toast("Temporary password copied.")}catch{toast("Copy the temporary password manually.")}}});
  qsa(".user-delete").forEach(b=>b.onclick=async()=>{if(confirm("Delete this user account?")){await api("/users/delete",{method:"POST",body:JSON.stringify({id:b.dataset.id})});toast("User deleted.");renderUsers()}});
}
async function renderSubmissions(){
  const d=await api("/submissions");
  qs("#submissionsPage").innerHTML=`<div class="page-title"><div><div class="kicker">REPORTS</div><h2>Submitted M&E Reports</h2><p>Review reports submitted by schools.</p></div></div><article class="card">${renderSubmissionTable(d.submissions,true)}</article>`;
  qsa(".view-report").forEach(b=>b.onclick=()=>viewReport(b.dataset.id));
}
async function viewReport(id){
  const d=await api(`/submission?id=${encodeURIComponent(id)}`);
  const r=d.report;
  openModal(`<h2>${esc(r.schoolName)} — M&E Report</h2><p class="muted">${esc(r.district)} • School ID ${esc(r.schoolId)} • ${new Date(r.submittedAt).toLocaleString()}</p><div class="card"><pre style="white-space:pre-wrap;font-family:inherit">${esc(JSON.stringify(r.data,null,2))}</pre></div>`);
}
async function renderAnalytics(){
  const d=await api("/analytics"),latest=d.latest||[],metrics=d.analytics||{},scores=latest.map(scoreOfReport).filter(s=>s.percentage!=null);
  const bands=[["Outstanding",scores.filter(s=>s.percentage>=90).length],["Very Satisfactory",scores.filter(s=>s.percentage>=80&&s.percentage<90).length],["Satisfactory",scores.filter(s=>s.percentage>=70&&s.percentage<80).length],["Needs Improvement",scores.filter(s=>s.percentage>=60&&s.percentage<70).length],["Needs Immediate Technical Assistance",scores.filter(s=>s.percentage<60).length]];
  const average=scores.length?scores.reduce((n,s)=>n+s.percentage,0)/scores.length:null,responseCounts=[["Compliant",metrics.responses?.["Compliant"]||0],["Partially Compliant",metrics.responses?.["Partially Compliant"]||0],["Not Compliant",metrics.responses?.["Not Compliant"]||0],["Not Applicable",metrics.responses?.["Not Applicable"]||0]],responseTotal=metrics.responseTotal||0;
  const domainPerformance=metrics.domainPerformance||[],hazards=Object.entries(metrics.hazards||{}).sort((a,b)=>b[1]-a[1]),levels=["HAYO","HINAY","HINGA","HINTO"].map(level=>[level,metrics.continuity?.[level]||0]),taRows=Object.entries(metrics.technicalAssistanceStatuses||{}),byDistrict=metrics.byDistrict||[];
  const max=Math.max(1,...byDistrict.map(x=>x.count));
  const bandMax=Math.max(1,...bands.map(x=>x[1]));
  qs("#analyticsPage").innerHTML=`<div class="page-title"><div><div class="kicker">ANALYTICS</div><h2>Reports & Analytics</h2><p>Division analysis based on each school's latest complete EIE M&E submission.</p></div></div>
  <div class="stats"><div class="stat"><span>Evaluated Schools</span><strong>${latest.length}</strong><small>Latest submission per school</small></div><div class="stat"><span>Division Average</span><strong>${average==null?"—":average.toFixed(2)+"%"}</strong><small>${esc(ratingFor(average))}</small></div><div class="stat"><span>Emergency Records</span><strong>${metrics.emergencyCount||0}</strong><small>Documented in latest reports</small></div><div class="stat"><span>TA Action Records</span><strong>${metrics.technicalAssistanceCount||0}</strong><small>${metrics.technicalAssistanceCompleted||0} completed</small></div></div>
  <div class="analytics-grid"><article class="card"><h3>Rating Distribution</h3>${scores.length?bands.map(x=>`<div class="bar-row"><span>${esc(x[0])}</span><div class="bar"><span style="width:${Math.round(x[1]/bandMax*100)}%"></span></div><strong>${x[1]}</strong></div>`).join(""):`<p class="muted">No scored submissions yet.</p>`}</article><article class="card"><h3>Checklist Response Mix</h3><div class="response-mix">${responseCounts.map(([label,count],i)=>`<div class="response-${i}"><strong>${count}</strong><span>${esc(label)}</span><small>${responseTotal?Math.round(count/responseTotal*100):0}%</small></div>`).join("")}</div></article></div>
  <article class="card"><h3>Performance by Compliance Domain</h3><p class="muted">Combined performance across rubric domains A–D; Not Applicable responses are excluded.</p><div class="domain-performance">${domainPerformance.map(x=>`<div class="domain-performance-row"><span>${esc(x.domain)}</span><div class="domain-track"><i style="width:${x.percentage||0}%"></i></div><strong>${x.percentage==null?"—":x.percentage.toFixed(1)+"%"}</strong><small>${x.applicable} items</small></div>`).join("")}</div></article>
  <div class="analytics-grid"><article class="card"><h3>Activated Learning Continuity Levels</h3><div class="continuity-summary">${levels.map(([level,count])=>`<div class="continuity-count ${level.toLowerCase()}"><strong>${count}</strong><span>${level}</span></div>`).join("")}</div></article><article class="card"><h3>Emergency / Hazard Distribution</h3>${hazards.length?`<div class="hazard-list">${hazards.map(([name,count])=>`<div><span>${esc(name)}</span><strong>${count}</strong></div>`).join("")}</div>`:`<p class="muted">No emergency records available.</p>`}</article></div>
  <div class="analytics-grid"><article class="card"><h3>Technical Assistance Action Status</h3>${taRows.length?`<div class="hazard-list">${taRows.map(([name,count])=>`<div><span>${esc(name)}</span><strong>${count}</strong></div>`).join("")}</div>`:`<p class="muted">No technical assistance records available.</p>`}</article><article class="card"><h3>Submissions by District</h3>${byDistrict.length?byDistrict.map(x=>`<div class="bar-row"><span>${esc(x.district)}</span><div class="bar"><span style="width:${Math.round(x.count/max*100)}%"></span></div><strong>${x.count}</strong></div>`).join(""):`<p class="muted">No submissions yet.</p>`}</article></div>
  <article class="card"><h3>Latest School Performance</h3>${renderSubmissionTable(latest,false)}</article>`;
}
async function renderMyReports(){
  const d=await api("/my-submissions");
  qs("#myReportsPage").innerHTML=`<div class="page-title"><div><div class="kicker">MY REPORTS</div><h2>Submitted M&E Reports</h2><p>Your submission history.</p></div></div><article class="card">${renderSubmissionTable(d.submissions,false)}</article>`;
}
function editTimeRemaining(editableUntil){const remaining=new Date(editableUntil).getTime()-Date.now();if(remaining<=0)return"Editing period expired";const hours=Math.floor(remaining/3600000),minutes=Math.max(0,Math.ceil((remaining%3600000)/60000));return`${hours}h ${minutes}m remaining to edit`}
async function renderMeSubmissionPanel(){
  const panel=qs("#meSubmissionPanel");if(!panel||state.user?.role==="admin")return;
  try{
    const d=await api("/my-submissions"),rows=d.submissions||[];state.hasSubmitted=rows.length>0;setDraftMode(state.draftLocked);
    const list=rows.length?`<div class="me-submission-list">${rows.map((r,i)=>`<article class="me-submission-item"><b>Submission ${rows.length-i}</b><time>${new Date(r.submittedAt).toLocaleString()}</time><small class="${r.canEdit?"editable":"locked"}">${r.canEdit?editTimeRemaining(r.editableUntil):"Locked after 24 hours"}</small>${r.canEdit?`<button class="btn gold edit-submission" data-id="${escAttr(r.id)}" type="button">Edit Submission</button>`:`<span class="submission-lock">Editing locked</span><button class="btn secondary print-submission" data-id="${escAttr(r.id)}" type="button">Print Submission</button>`}</article>`).join("")}</div>`:`<p class="me-submission-empty">No submitted reports yet.</p>`;
    panel.innerHTML=`<div class="me-submission-heading"><strong>My Submissions</strong><span>${rows.length}</span></div>${list}`;
    qsa(".edit-submission").forEach(button=>button.onclick=()=>{const report=rows.find(r=>r.id===button.dataset.id);if(!report?.canEdit){toast("The 24-hour editing period has expired.");renderMeSubmissionPanel();return}fillForm(report.data||{});state.editingSubmissionId=report.id;setDraftMode(false);const submit=qs("#submitME");if(submit)submit.textContent="Update Submission";qs("#mePage")?.scrollIntoView({behavior:"smooth",block:"start"});toast("Submission loaded for editing. Save your changes, then click Update Submission.")});
    qsa(".print-submission").forEach(button=>button.onclick=()=>{const report=rows.find(r=>r.id===button.dataset.id);if(!report?.data){toast("The submitted report could not be loaded for printing.");return}const current=serializeForm();fillForm(report.data);window.addEventListener("afterprint",()=>fillForm(current),{once:true});printMEReport()});
  }catch(err){panel.innerHTML=`<p class="me-submission-empty">Unable to load submissions.</p>`}
}
function renderProfile(){
  const u=state.user,initials=String(u.schoolName||u.name||u.username||"U").split(/\s+/).slice(0,2).map(x=>x[0]||"").join("").toUpperCase();qs("#profilePage").innerHTML=`<div class="page-title"><div><div class="kicker">ACCOUNT</div><h2>Profile</h2><p>View your school account and update your profile photo.</p></div></div><article class="card profile-card"><div class="profile-photo-section"><div id="profilePhotoPreview" class="profile-photo-preview">${u.profilePhoto?`<img src="${escAttr(u.profilePhoto)}" alt="Profile photo">`:`<span>${esc(initials)}</span>`}</div><h3>${esc(u.schoolName||u.name||"School Account")}</h3><p>${esc(u.district||"")} • School ID ${esc(u.schoolId||"—")}</p><input id="profilePhotoInput" type="file" accept="image/jpeg,image/png,image/webp" hidden><div class="profile-photo-actions"><button id="chooseProfilePhoto" class="btn secondary" type="button">Choose Photo</button><button id="uploadProfilePhoto" class="btn primary" type="button" disabled>Upload Photo</button>${u.profilePhoto?'<button id="removeProfilePhoto" class="btn red" type="button">Remove Photo</button>':""}</div><small>JPG, PNG, or WebP. Automatically resized for faster loading.</small></div><div class="profile-details"><h3>Account Information</h3><div class="grid two"><label>School Name<input value="${escAttr(u.schoolName||u.name||"")}" readonly></label><label>School ID<input value="${escAttr(u.schoolId||"")}" readonly></label><label>District<input value="${escAttr(u.district||"")}" readonly></label><label>Username<input value="${escAttr(u.username||"")}" readonly></label><label>Email Address<input value="${escAttr(u.email||"Not provided")}" readonly></label><label>Account Status<input value="${escAttr(u.status==="active"?"Approved / Active":u.status||"Pending")}" readonly></label><label>Account Role<input value="${escAttr(u.role==="admin"?"Administrator":"School User")}" readonly></label><label>Account Created<input value="${escAttr(u.createdAt?new Date(u.createdAt).toLocaleString():"—")}" readonly></label></div></div></article>`;
  let preparedPhoto="";const input=qs("#profilePhotoInput"),preview=qs("#profilePhotoPreview"),upload=qs("#uploadProfilePhoto");qs("#chooseProfilePhoto").onclick=()=>input.click();input.onchange=async()=>{const file=input.files?.[0];if(!file)return;if(file.size>8*1024*1024){toast("Choose an image smaller than 8 MB.");input.value="";return}try{preparedPhoto=await resizeProfilePhoto(file);preview.innerHTML=`<img src="${escAttr(preparedPhoto)}" alt="Profile photo preview">`;upload.disabled=false}catch{toast("The selected image could not be processed.")}};upload.onclick=async()=>{if(!preparedPhoto)return;upload.disabled=true;upload.textContent="Uploading…";try{const d=await api("/profile-photo",{method:"POST",body:JSON.stringify({photo:preparedPhoto})});state.user.profilePhoto=d.profilePhoto;toast("Profile photo updated.");renderProfile()}catch(err){toast(err.message);upload.disabled=false;upload.textContent="Upload Photo"}};const remove=qs("#removeProfilePhoto");if(remove)remove.onclick=async()=>{if(!confirm("Remove your profile photo?"))return;await api("/profile-photo",{method:"POST",body:JSON.stringify({photo:""})});state.user.profilePhoto="";toast("Profile photo removed.");renderProfile()};
}
function resizeProfilePhoto(file){return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onerror=reject;reader.onload=()=>{const image=new Image();image.onerror=reject;image.onload=()=>{const size=400,canvas=document.createElement("canvas"),ctx=canvas.getContext("2d"),side=Math.min(image.width,image.height),sx=(image.width-side)/2,sy=(image.height-side)/2;canvas.width=size;canvas.height=size;ctx.drawImage(image,sx,sy,side,side,0,0,size,size);resolve(canvas.toDataURL("image/jpeg",.84))};image.src=reader.result};reader.readAsDataURL(file)})}
function renderSettings(){
  qs("#settingsPage").innerHTML=`<div class="page-title"><div><div class="kicker">SECURITY</div><h2>Administrator Settings</h2><p>Change the administrator password after first login.</p></div></div><article class="card"><h3>Change Password</h3><form id="changePasswordForm" class="grid two"><label>Current Password<input id="curPass" type="password" required></label><label>New Password<input id="newPass" type="password" minlength="10" required></label><div><button class="btn primary" type="submit">Update Password</button></div></form></article>`;
  qs("#changePasswordForm").onsubmit=async e=>{e.preventDefault();await api("/change-password",{method:"POST",body:JSON.stringify({currentPassword:qs("#curPass").value,newPassword:qs("#newPass").value})});e.target.reset();toast("Password changed successfully.")};
}
function openModal(html){qs("#modalBody").innerHTML=html;qs("#modal").classList.remove("hidden")}
function closeModal(){qs("#modal").classList.add("hidden")}
qs("#modalClose").onclick=closeModal;qs("#modalBackdrop").onclick=closeModal;
function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function escAttr(v){return esc(v)}
async function openApp(){
  if(!state.user){const me=await api("/me");state.user=me.user}qs("#authView").classList.add("hidden");qs("#appView").classList.remove("hidden");
  qs("#headerName").textContent=state.user.role==="admin"?"Administrator":state.user.schoolName;
  qs("#headerRole").textContent=state.user.role==="admin"?`System Administrator • SY ${currentSchoolYear()}`:`${state.user.district} • School ID ${state.user.schoolId} • SY ${currentSchoolYear()}`;
  startPresence();buildNav();renderMeActions();fillSchoolProfile();const initialPage=state.user.role==="admin"?"dashboardPage":"mePage";showPage(initialPage).catch(err=>{const page=qs("#"+initialPage);if(page)page.innerHTML=`<div class="card load-error"><h3>Unable to load this page</h3><p>${esc(err.message||"Please refresh and try again.")}</p><button class="btn primary" type="button" onclick="location.reload()">Refresh</button></div>`});if(state.user.role!=="admin"&&state.user.districtValid===false)setTimeout(()=>toast("Your registered district name is not recognized. Please contact the administrator to correct it."),150);
}
(async()=>{
  const token=sessionStorage.getItem("eieToken");
  try{if(token){state.token=token;await openApp()}}
  catch{sessionStorage.removeItem("eieToken");state.token=null;qs("#appView").classList.add("hidden");qs("#authView").classList.remove("hidden")}
  finally{document.body.classList.remove("app-booting")}
})();
