var user = JSON.parse(sessionStorage.getItem("user"));

window.onload = function()
{
 
    hiddenDiv();
};


function hiddenDiv()
{
    if (user)
    {   document.getElementById("loginbtn").style.visibility = 'hidden';
        document.getElementById("logoutbtn").style.visibility = 'visible';
        document.getElementById("profilebtn").style.visibility = 'visible';        
        document.getElementById("notlogin").style.visibility = 'hidden';
        document.getElementById("login").style.visibility = 'visible';
    }
    else
    {
        document.getElementById("loginbtn").style.visibility = 'visible';
        document.getElementById("logoutbtn").style.visibility = 'hidden';
        document.getElementById("profilebtn").style.visibility = 'hidden';
        document.getElementById("notlogin").style.visibility = 'visible';
        document.getElementById("login").style.visibility = 'hidden';
    }
}
function logout()
{
    sessionStorage.removeItem("user");
    location.reload();

}


