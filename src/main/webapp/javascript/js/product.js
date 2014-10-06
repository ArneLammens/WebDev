var productid = sessionStorage.getItem("productid");
var user = JSON.parse(sessionStorage.getItem("user"));
var url = "http://localhost:8080/Scriptie/webresources/product";
var product={};
window.onload = function()
{
    getAProduct();
    
};
function hideButtons()
{
    if (user)
    {
        document.getElementById("loginbtn").style.visibility = 'hidden';
        document.getElementById("logoutbtn").style.visibility = 'visible';
        document.getElementById("profilebtn").style.visibility = 'visible';
        if(user.id === product.addBy.id)
        {
            document.getElementById("removebtn").style.visibility='visible';
        }
        else
        {
           document.getElementById("removebtn").style.visibility='hidden'; 
        }
        
    }
    else
    {
        document.getElementById("loginbtn").style.visibility = 'visible';
        document.getElementById("logoutbtn").style.visibility = 'hidden';
        document.getElementById("profilebtn").style.visibility = 'hidden';
        document.getElementById("removebtn").style.visibility='hidden';
    }
}

function logout()
{
    sessionStorage.removeItem("user");
    location.reload();

}
function getAProduct()
{
    var request = new XMLHttpRequest();
    request.open("GET", url+"/"+productid);
    request.onload = function()
    {
        if (request.status === 200)
        { 
            
            product = JSON.parse(request.responseText);
            hideButtons();
            displayevent(product); 
        }
        else
        {
            alert("something went wrong");
        }

    };
    request.send(null);
}
function displayevent(product)
{
    var product = product;
    document.getElementById("head").innerHTML=""+product.name+" "+product.price;
    document.getElementById("description").innerHTML=""+product.description;
    document.getElementById("stock").innerHTML="is the item in stock : "+product.instock;
    document.getElementById("name").innerHTML="name: "+product.addBy.name+" "+product.addBy.lastname;
    document.getElementById("address").innerHTML="address: "+product.addBy.street+" "+product.addBy.homeNumber+" "+product.addBy.municipality+" "+product.addBy.zipcode;

}
function removeProduct()
{
     var request = new XMLHttpRequest();
    request.open("DELETE", url+"/"+productid);
    request.onload = function()
    {
        if (request.status === 200)
        { 
            
            window.location.href="listProducts.html";
        }
        else
        {
            alert("something went wrong");
        }

    };
    request.send();
}

