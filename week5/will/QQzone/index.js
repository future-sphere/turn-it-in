document.getElementById("scan-login").style.display = "none";
const handleClick = () => {
    document.getElementById("login-block").style.display = "none";
    document.getElementById("scan-login").style.display = "flex";
};
const handleSwitchBack = () => {
    document.getElementById("login-block").style.display = "block";
    document.getElementById("scan-login").style.display = "none";
};