import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA5BDecaGpmmHxR-hhH7EUZyJ81_fEf4OA",
  authDomain: "psrsign-330e9.firebaseapp.com",
  projectId: "psrsign-330e9",
  storageBucket: "psrsign-330e9.appspot.com",
  messagingSenderId: "508246816151",
  appId: "1:508246816151:web:ebfa5c6d44bf7f6b20c0d2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const submitButton = document.getElementById("submit");
const signupButton = document.getElementById("sign-up");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
const createacctbtn = document.getElementById("create-acct-btn");

const returnBtn = document.getElementById("return-btn");

submitButton.addEventListener("click", function() {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    window.alert("Please fill out all required fields.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.replace('crud.html'); // Redirect without keeping the current page in history
    })
    .catch((error) => {
      window.alert("Error occurred: " + error.message);
    });
});

signupButton.addEventListener("click", function() {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function() {
  main.style.display = "block";
  createacct.style.display = "none";
});

createacctbtn.addEventListener("click", function() {
  const signupEmail = signupEmailIn.value.trim();
  const confirmSignupEmail = confirmSignupEmailIn.value.trim();
  const signupPassword = signupPasswordIn.value;
  const confirmSignUpPassword = confirmSignUpPasswordIn.value;

  if (!signupEmail || !confirmSignupEmail || !signupPassword || !confirmSignUpPassword) {
    window.alert("Please fill out all required fields.");
    return;
  }

  if (signupEmail !== confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    return;
  }

  if (signupPassword !== confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    return;
  }

  createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
    .then(() => {
      window.alert("Success! Account created.");
      main.style.display = "block";
      createacct.style.display = "none";
    })
    .catch((error) => {
      window.alert("Error occurred: " + error.message);
    });
});
