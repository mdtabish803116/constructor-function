
let products = JSON.parse(localStorage.getItem("products"));


function displayProduct(products){
    document.getElementById("productContainer").innerHTML = "";
    products.forEach(function(product , index){
        var productCart = document.createElement("div");
          var imgDiv = document.createElement("div");
             var img = document.createElement("img");
               img.src = product.imageUrl;
            imgDiv.append(img);
            var productDiv = document.createElement("div");
             productDiv.innerText = product.product;
            
             var btnDiv = document.createElement("div");
             var removeBtn = document.createElement("button");
               removeBtn.innerText = "Remove";

               removeBtn.addEventListener("click", function(){
                     removeFunc(index);
               })
              var soldBtn = document.createElement("button");
                 soldBtn.innerText = "Sold";
                 soldBtn.style.color = "white";

                 if(product.sold == "False"){
                     soldBtn.style.background = "Green";
                 }else {
                    soldBtn.style.background = "Red";
                 }

                 soldBtn.addEventListener("click", function(){
                     if(product.sold == "False"){
                         product.sold = "True";
                         soldBtn.style.background = "Red";
                     }else {
                         product.sold = "False";
                         soldBtn.style.background = "Green";
                     }
                 })
              btnDiv.append(removeBtn , soldBtn);


              productCart.append(imgDiv , productDiv , btnDiv);

              document.getElementById("productContainer").append(productCart);     
    })
}

   displayProduct(products);

  function removeFunc(index){
      let products = JSON.parse(localStorage.getItem("products"));
      products.splice(index , 1);
      localStorage.setItem("products", JSON.stringify(products));
      displayProduct(products);
  }