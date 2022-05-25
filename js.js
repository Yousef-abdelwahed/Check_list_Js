
var productName = document.getElementById("productName")
var productPrice=document.getElementById("productPrice");
var productCategory=document.getElementById("productCategory");
var productDecs=document.getElementById("productDecs");
var productContainer;
if(localStorage.getItem("product")==null){
    productContainer=[];
}else{
   productContainer= JSON.parse( localStorage.getItem("product"));
   displayProduct();
}

function addProduct(){
        product = {
            name :document.getElementById("productName").value,
            price:document.getElementById("productPrice").value,
            category:document.getElementById("productCategory").value,
            des:document.getElementById("productDecs").value,
            };
            productContainer.push(product);
            clearProduct();
            displayProduct();
            localStorage.setItem( "product",JSON.stringify(productContainer));
         
    }


function displayProduct(){
    var cartoorna = ``;
    
    for( var i = 0; i<productContainer.length;i++){
     cartoorna +=`
    <tr>
            <td>${i}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].category}</td>
            <td>${productContainer[i].des}</td>
            <td><button class="btn btn-warning" onclick="updateProduct(${i});">update</button></td>
            <td><button class="btn btn-danger" onclick="deletProduct(${i}); " >delete</button></td>
    </tr>
            `; }
        document.getElementById("tableRow").innerHTML=cartoorna;
        }

function clearProduct(){
    document.getElementById("productName").value="";
    document.getElementById("productPrice").value="";
    document.getElementById("productCategory").value="";
    document.getElementById("productDecs").value="";
}
function deletProduct(productIndex){
    productContainer.splice(productIndex , 1);
    localStorage.setItem( "product",JSON.stringify(productContainer));
    displayProduct();
   
}

function updateProduct(index){
    productName.value=productContainer[index].name;

}
function serachProduct(term){
    var serachProduct=[];
    for( var i =0; i<productContainer.length;i++){
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase())==ture)
        {
            serachProduct.push(productContainer[i])
        }
    }
    displayProduct(serachProduct);
}