document.getElementById("quick-login").style.display = "none";

const handleClick = () => {
  document.getElementById("login-box").style.display = "none";
  document.getElementById("quick-login").style.display = "block";
};

const handleSwitchBack = () => {
  document.getElementById("login-box").style.display = "block";
  document.getElementById("quick-login").style.display = "none";
};
