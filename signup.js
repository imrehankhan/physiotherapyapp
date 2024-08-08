// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDxLmw3zWE93K5jRsx_wYDAVXBDanztp3c",
    authDomain: "physiofit-9c4d7.firebaseapp.com",
    projectId: "physiofit-9c4d7",
    storageBucket: "physiofit-9c4d7.appspot.com",
    messagingSenderId: "956006738338",
    appId: "1:956006738338:web:622760d8c7ad167af36afb"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

//   submit button 
const submit = document.getElementById('submit');
submit.addEventListener("click",function(event) {
    event.preventDefault()
    //inputs
  const email= document.getElementById('email').value;
  const password= document.getElementById('password').value;


    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating account...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

})