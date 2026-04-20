const selected = document.getElementById("selectedQty");
const options = document.getElementById("options");
const price = document.querySelector(".price")



let value = 0
// let number_of_items = JSON.parse(quantityno.textContent)
// console.log(number_of_items)
selected.addEventListener("click", () => {
    options.style.display =
        options.style.display === "block" ? "none" : "block";
});

options.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {

    // Quantity number nikaalo (Quantity: 2 → 2)
    value = Number(e.target.innerText.replace(/\D/g, ""));
    selected.innerText = e.target.innerText;

    const unitPrice = 233754;
    const newprice = unitPrice * value;

    // Indian format
    price.textContent = "₹" + newprice.toLocaleString("en-IN");

    options.style.display = "none";
  }
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".quantity-box")) {
        options.style.display = "none";
    }
});

const cartCount = document.querySelector(".cart-count");
const addbtn = document.querySelector(".add_cart_btn")
const removebtn = document.querySelector(".remove_cart_btn")
count = localStorage.getItem("cartCount")
cartCount.textContent = count

addbtn.addEventListener("click", () => {
    count++
    updateCartCount()
    localStorage.setItem("cartCount")
})

removebtn.addEventListener("click", () => { 
    count--
    updateCartCount()
    localStorage.setItem("cartCount")
})

function updateCartCount() {
    localStorage.setItem("cartCount", count);
  cartCount.textContent = count;
}

// let smallbikAtribute = smallBikeimg.getAttribute("src")
// let bigbikeAttribute = bigBikeimg.getAttribute("src")
// console.log(smallbikAtribute)


// .smallBikeimg.addEventListener()

