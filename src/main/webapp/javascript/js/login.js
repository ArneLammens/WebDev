var url = "http://localhost:8080/Scriptie/webresources/user";

function login( email, password)
{

    var request = new XMLHttpRequest();
    request.open("GET", url +"/"+email+"/"+password );//+ "/" + begin + "," + end
    request.onload = function()
    {
        if (request.status === 200)
        {
            sessionStorage.setItem("user",request.responseText);
            window.location.href="home.html";
        }

        else
        {
           alert("something went wrong");
        }

    };
    request.send(null);



}
;


