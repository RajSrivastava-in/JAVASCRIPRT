const products = [
    {
        id: 1,
        name: "T-Shirt",
        price: 499,
        image: ""
    },
    {
        id: 2,
        name: "Shoes",
        price: 999,
        image: "https://rukminim2.flixcart.com/image/768/768/xif0q/shoe/a/5/u/-resized-original-imahesyawgzggu6e.jpeg?q=90"
    },
    {
        id: 3,
        name: "Watch",
        price: 1499,
        image: "https://rukminim2.flixcart.com/image/768/768/xif0q/watch/q/4/2/1-anlg-491-blue-blue-sc-analogue-men-original-imahqnhefgdyszfd.jpeg?q=90"
    },
    {
        id: 4,
        name: "Headphones",
        price: 799,
        image: "https://rukminim2.flixcart.com/image/768/768/xif0q/headphone/m/x/0/wk-854-p47-headset-super-extra-bass-bluetooth-headset-furious-on-original-imahyyyqgzqt6hyg.jpeg?q=90"
    }
];

let cart = [];

function displayProducts() {

    let productContainer = document.getElementById("products");

    products.forEach((product) => {

        productContainer.innerHTML += `
            <div class="product">
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <br>
                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;

    });
}

function addToCart(id) {

    let product = products.find(item => item.id === id);

    let cartItem = cart.find(item => item.id === id);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
}

function updateCart() {

    let cartItems = document.getElementById("cart-items");

    cartItems.innerHTML = "";

    let total = 0;
    let count = 0;

    cart.forEach((item) => {

        total += item.price * item.quantity;
        count += item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name} x ${item.quantity}</span>
                <span>₹${item.price * item.quantity}</span>
                <button onclick="removeItem(${item.id})">
                    Remove
                </button>
            </div>
        `;

    });

    document.getElementById("total").innerText = total;

    document.getElementById("cart-count").innerText = count;
}

function removeItem(id) {

    cart = cart.filter(item => item.id !== id);

    updateCart();
}

function showCart() {

    document.querySelector(".cart").scrollIntoView({
        behavior: "smooth"
    });
}

function checkout() {

    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Order placed successfully!");

        cart = [];

        updateCart();
    }
}


displayProducts();