function login() {
  document.getElementById("for-log").style.display = "block";
  document.getElementsByClassName("login-page")[0].style.display = "block";
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";
}

function cut() {
  document.getElementById("for-log").style.display = "none";
  document.getElementsByTagName("body")[0].style.overflowY = "auto";
}

function signup() {
  document.getElementById("for-log").style.display = "block";
  document.getElementsByClassName("signup-page")[0].style.display = "block";
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";
}

function change() {
  document.getElementsByClassName("login-page")[0].style.display = "none";
  document.getElementsByClassName("signup-page")[0].style.display = "block";
}

function change2() {
  document.getElementsByClassName("login-page")[0].style.display = "block";
  document.getElementsByClassName("signup-page")[0].style.display = "none";
}

function clickalert() {
  alert("Please fill valid data");
}
