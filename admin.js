var products = JSON.parse(localStorage.getItem("products"))||[];

document.querySelector("form").addEventListener("submit" , function(e){
    e.preventDefault();

    var product = document.getElementById("product").value;
    var category = document.getElementById("category").value;
    var imageUrl = document.getElementById("image").value;
    var price = document.getElementById("price").value;
    var gender = document.getElementById("gender").value;
    var sold = document.getElementById("sold").value;


    function user (product , category , imageUrl , price , gender , sold) {
            this.product = product;
            this.category = category;
            this.imageUrl = imageUrl;
            this.price = price;
            this.gender = gender;
            this.sold = sold;
    }

   var userObj =  new user(product , category , imageUrl , price , gender , sold);

   if(product == "" || category == "" || imageUrl == "" || price == "" || gender == "" || sold == ""){
       alert("please fill the details Properly !");
   }else {  

     products.push(userObj);

     localStorage.setItem("products" , JSON.stringify(products));

   }
})