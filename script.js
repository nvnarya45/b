firebase.initializeApp({
 apiKey:"AIzaSyBY0nqRGsqMMDFTENPoT3es5NQZpUTGRe0",
 authDomain:"energy-meter-data-37caf.firebaseapp.com",
 projectId:"energy-meter-data-37caf"
});

const db=firebase.firestore();
const auth=firebase.auth();

function login(){
 auth.signInWithEmailAndPassword(
  email.value, pass.value
 ).then(()=>alert("Login Success"))
 .catch(e=>alert(e.message));
}

function logout(){
 auth.signOut();
 alert("Logged out");
}

function addDoc(){
 db.collection("docs").add({
  title:dtitle.value,
  url:durl.value,
  date:new Date()
 });
}

function addPost(){
 db.collection("posts").add({
  title:ptitle.value,
  content:pcontent.value,
  date:new Date()
 });
}

db.collection("docs").onSnapshot(s=>{
 let html="";
 s.forEach(d=>{
  let data=d.data();
  html+=`<p><a href="${data.url}" target="_blank">${data.title}</a></p>`;
 });
 docs.innerHTML=html;
});

db.collection("posts").onSnapshot(s=>{
 let html="";
 s.forEach(d=>{
  let data=d.data();
  html+=`<h4>${data.title}</h4><p>${data.content}</p>`;
 });
 posts.innerHTML=html;
});
