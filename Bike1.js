const bigBikeimg = document.querySelector(".bigBikeimg")
const smallBikeimg = document.querySelector(".smallBikeimg")
const cartBtn = document.getElementById("cart-btn");
const cartContainer = document.getElementById("cart-container");

let imgCount = 0
smallBikeimg.addEventListener("click", () => { 
  if(imgCount%2 === 0){
    imgCount++
    bigBikeimg.setAttribute("src", "Bikeimages/Bike1Redbig.jpg")
    smallBikeimg.setAttribute("src", "Bikeimages/Bike1smallblack.jpg")
  }
  else{
    imgCount--
    bigBikeimg.setAttribute("src", "Bikeimages/Bike1bigblack.jpg")
    smallBikeimg.setAttribute("src", "Bikeimages/Bike1redsmall.jpg")
  }
})

let cartimg = bigBikeimg.getAttribute("src")

function renderCart() {
  cartContainer.innerHTML= ""
  cartContainer.innerHTML = `
         <img src="${cartimg}" width="50" id="cartitemimg" class="cartitemimg">
       
       `
}

let cartimgCounter = 0

// const cartItem = document.querySelector(".cart-item")
cartBtn.addEventListener("click", () => {
  if(cartimgCounter % 2 === 0){
    cartimgCounter++
    cartContainer.style.display = "initial"
  }
  else{
    cartimgCounter--
    cartContainer.style.display = "none"
  }
  renderCart();
});

