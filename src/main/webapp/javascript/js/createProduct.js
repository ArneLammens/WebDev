var url = "http://localhost:8080/Scriptie/webresources/product";
var user= JSON.parse(sessionStorage.getItem("user"));
function CreateProduct()
{
    var createProduct = {};
    createProduct.name = document.getElementById("name").value;
    createProduct.price = document.getElementById("price").value;
    createProduct.description = document.getElementById("description").value;
    createProduct.instock = document.getElementById("instock").value;
    createProduct.addBy=user;


    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.onload = function()
    {
        if (request.status === 200)
        {
            
            window.location.href = "listProducts.html";
        }

        else
        {
            alert("something went wrong");
        }

    };
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(createProduct));


}



