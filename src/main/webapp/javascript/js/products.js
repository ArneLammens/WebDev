var user = JSON.parse(sessionStorage.getItem("user"));
var url = "http://localhost:8080/Scriptie/webresources/product";
var products = [];
window.onload = function()
{
    hideButtons();
    getAllProducts();
    
};
var lijst = ["woef","waf"];
var objectje={};
var primitief= 12;

window.onload()
{
		for(var i in lijst)
		{
			alert('niets');
		}
}
function hideButtons()
{
    if (user)
    {
        document.getElementById("loginbtn").style.visibility = 'hidden';
        document.getElementById("logoutbtn").style.visibility = 'visible';
        document.getElementById("profilebtn").style.visibility = 'visible';
        document.getElementById("createProductbtn").style.visibility='visible';
    }
    else
    {
        document.getElementById("loginbtn").style.visibility = 'visible';
        document.getElementById("logoutbtn").style.visibility = 'hidden';
        document.getElementById("profilebtn").style.visibility = 'hidden';
        document.getElementById("createProductbtn").style.visibility='hidden';
    }
}

function logout()
{
    sessionStorage.removeItem("user");
    location.reload();

}


function getAllProducts()
{

    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function()
    {
        if (request.status === 200)
        {
            products = JSON.parse(request.responseText);
            products.sort(function(a,b) { return a.name.localeCompare(b.name) } );
            displayevent(products);
            
        }

        else
        {
            alert("something went wrong");
        }

    };
    request.send(null);
}
function displayevent(products)
{

    var productlist = document.getElementById("productlist");

    for (var i = 0; i < products.length; i++)
    {
        var product = products[i];
        var li = document.createElement("li");
        var a = document.createElement("a");
        var a2 = document.createElement("a");
        var br= document.createElement("br");
        
        
        li.setAttribute("class","border")
        a.setAttribute("href", "detailProduct.html");
        a2.setAttribute("href", "detailProduct.html");
        a.setAttribute("class", "name");
        a2.setAttribute("class", "price");
        a.innerHTML = product.name + " ";
        a2.innerHTML ="&#8364 "+ product.price;

        productlist.appendChild(li);
        li.appendChild(a);
        li.appendChild(br);
        li.appendChild(a2);
        
        with({n:i})
        {
            a.onclick=function()
            {
                var product=products[n];
                var productid= product.id;
                sessionStorage.setItem("productid",productid);
                
            }
              a2.onclick=function()
            {
                var product=products[n];
                var productid= product.id;
                sessionStorage.setItem("productid",productid);
                
            }
        }

    }

}
function search()
{
    var input = document.getElementById('query');
    var filter = input.value.toUpperCase();
    var lis = document.getElementsByTagName('li');
    
    for (var i = 0; i < lis.length; i++)
    {
        var name = lis[i].getElementsByClassName('name')[0].innerHTML;
        var price = lis[i].getElementsByClassName('price')[0].innerHTML;

        if (name.toUpperCase().indexOf(filter) == 0)
            lis[i].style.display = 'list-item';
        else if (price.indexOf(filter) == 0)
            lis[i].style.display = 'list-item';
        else
            lis[i].style.display = 'none';
    }



}

function order(value){
   
    if(value === 1)
    {
       products.sort(function(a,b) { return parseFloat(a.price) - parseFloat(b.price) } );
    }
   else
   {
        products.sort(function(a,b) {  return a.name.localeCompare(b.name) } );
   }
   var ul = document.getElementById("productlist");
   while(ul.firstChild)
   { 
       ul.removeChild(ul.firstChild);
   }
   displayevent(products);
   
}

