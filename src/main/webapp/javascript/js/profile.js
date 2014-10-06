var url = "http://localhost:8080/Scriptie/webresources/user";
var user = JSON.parse(sessionStorage.getItem("user"));

window.onload = function()
{
    displayevent();
    
};

function modifyAccount()
{
    var modifyAccount = {};
    modifyAccount.name = document.getElementById("user.name").value;
    modifyAccount.lastname = document.getElementById("user.lastname").value;
    modifyAccount.email = user.email;
    modifyAccount.password = user.password;
    modifyAccount.zipcode = document.getElementById("user.zipcode").value;
    modifyAccount.homeNumber = document.getElementById("user.homeNumber").value;
    modifyAccount.street = document.getElementById("user.street").value;
    modifyAccount.municipality = document.getElementById("user.municipality").value;

    var request = new XMLHttpRequest();
    request.open("PUT", url+"/"+user.id);
    request.onload = function()
    {
        if (request.status === 200)
        {
            
            sessionStorage.setItem("user", request.responseText);
            window.location.href = "home.html";
        }

        else
        {
            alert("something went wrong");
        }

    };
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(modifyAccount));


}
function displayevent()
{    
    document.getElementById("user.name").value=user.name;
    document.getElementById("user.lastname").value=user.lastname;
    document.getElementById("user.zipcode").value=user.zipcode;
    document.getElementById("user.homeNumber").value=user.homeNumber;
    document.getElementById("user.street").value=user.street;
    document.getElementById("user.municipality").value=user.municipality;
}

