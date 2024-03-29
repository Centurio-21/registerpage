//password show or not script

let eyeopen = document.getElementById("eyeopen");
let eyeclose = document.getElementById("eyeslash");
let password = document.getElementById("oripass");

eyeopen.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeopen.style.display = "none";
    eyeclose.style.display = "block";
  }
  eyeclose.onclick = () => {
    if (password.type == "text") {
      password.type = "password";
      eyeclose.style.display = "none";
      eyeopen.style.display = "block";
    }
  };
};

//password show or not script ended

let form = document.getElementById("formwrap");

let a = document.getElementById("firstNamevalue");
let b = document.getElementById("lastNamevalue");
let c = document.getElementById("emailaddress");
let d = document.getElementById("oripass");
let e = document.getElementById("conformpass");

let firstnameerr = document.getElementById("firstnameerror");
let lastnameerr = document.getElementById("lastnameerror");
let emailerr = document.getElementById("emailerror");
let passworderr = document.getElementById("passworderror");
let conformpasserr = document.getElementById("conformpassworderror");

firstnameerr.textContent = "";
lastnameerr.textContent = "";
emailerr.textContent = "";
passworderr.textContent = "";
conformpasserr.textContent = "";

let btn = document.getElementById("submitbtn");

btn.onclick = function () {
  firstnameerr.style.display = "block";
  lastnameerr.style.display = "block";
  emailerr.style.display = "block";
  passworderr.style.display = "block";
  conformpasserr.style.display = "block";
  if (a.value === "") {
    firstnameerr.textContent = "First Name Required";
    return false;
  } else if (b.value === "") {
    lastnameerr.textContent = "Last Name Required";
    return false;
  } else if (c.value === "") {
    emailerr.textContent = "Email Address Required";
    return false;
  } else if (d.value === "") {
    passworderr.textContent = "Password Required";
    return false;
  } else if (e.value != d.value) {
    conformpasserr.textContent = "Password does not match";
    return false;
  } else if (
    a.value != "" ||
    b.value != "" ||
    c.value != "" ||
    d.value != "" ||
    e.value != ""
  ) {
    firstnameerr.style.display = "none";
    lastnameerr.style.display = "none";
    emailerr.style.display = "none";
    passworderr.style.display = "none";
    formwrap.reset();
    return false;
  }
};