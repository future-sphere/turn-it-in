document.getElementById("scan-login-container").style.display = "none";
const handleClick = () => {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("scan-login-container").style.display = "block";
};
const handleSwitchBack = () => {
    document.getElementById("login-container").style.display = "block";
    document.getElementById("scan-login-container").style.display = "none";
};