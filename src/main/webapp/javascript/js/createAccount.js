var url = "http://localhost:8080/Scriptie/webresources/user";

function createAccount()
{
    var createAccount = {};
    createAccount.name = document.getElementById("name").value;
    createAccount.lastname = document.getElementById("lastname").value;
    createAccount.email = document.getElementById("email").value;
    createAccount.password = document.getElementById("password").value;
    createAccount.zipcode = document.getElementById("zipcode").value;
    createAccount.homeNumber = document.getElementById("homeNumber").value;
    createAccount.street = document.getElementById("street").value;
    createAccount.municipality = document.getElementById("municipality").value;

    var request = new XMLHttpRequest();
    request.open("POST", url);
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
    request.send(JSON.stringify(createAccount));


}

