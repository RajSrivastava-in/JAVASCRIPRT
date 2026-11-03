<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Online Shop</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <h1>My Online Shop</h1>
        <button onclick="showCart()">
            Cart 🛒 (<span id="cart-count">0</span>)
        </button>
    </header>

    <h2>Our Products</h2>

    <div class="products" id="products"></div>

    <div class="cart">
        <h2>Shopping Cart</h2>
        <div id="cart-items"></div>
        <h3>Total: ₹<span id="total">0</span></h3>
        <button onclick="checkout()">Checkout</button>
    </div>

    <script src="practic.js"></script>

</body>
</html>