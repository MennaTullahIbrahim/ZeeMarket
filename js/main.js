// Open & close cart

var cart = document.querySelector('.cart')

function open_cart(){
    cart.classList.add("active")
}
function close_cart(){
    cart.classList.remove("active")
}

// Add & remove items from cart

var all_products_json;

var items_in_cart = document.querySelector('.items_in_cart')
let product_cart =[];

function add_to_cart(id, btn){
    product_cart.push(all_products_json[id])
    btn.classList.add('active')

    console.log(product_cart);
    get_cart_items()
}

let count_item =document.querySelector('.count_item');
let price_cart_header = document.querySelector('.price_cart_header');
let count_item_cart = document.querySelector('.count_item_cart');
let price_cart_total = document.querySelector('.price_cart_total');

function get_cart_items(){
    let total_price = 0;
    let active_cart_items ="";
    for (let i = 0; i < product_cart.length; i++) {
        active_cart_items += `
        <div class="cart_item">
            <img src="${product_cart[i].img}" alt="">
            <div class="content">
                <h4>${product_cart[i].name}</h4>
                <p class="price">$${product_cart[i].price}</p>
            </div>
            <button onclick="remove_from_cart(${i})" class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        `
        total_price += product_cart[i].price
    }
    items_in_cart.innerHTML = active_cart_items
    price_cart_header.innerHTML = `$${total_price}`
    count_item.innerHTML = product_cart.length
    price_cart_total.innerHTML = `$${total_price}`
    count_item_cart.innerHTML = `(${product_cart.length} Items in cart)`

}

function remove_from_cart(index){
    product_cart.splice(index, 1)
    get_cart_items()
    
    let all_btns = document.querySelectorAll('.fa-cart-plus')
    for (let i = 0; i < all_btns.length; i++) {
        all_btns[i].classList.remove('active')

        product_cart.forEach(product => {
            if(product.id == i){
                all_btns[i].classList.add('active')
            }
        });
    }
}

// Back to top button

let back_to_top = document.querySelector('.back_to_top')

back_to_top.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

// change item image

let MainImage = document.getElementById("MainImg");

function ChangeItemImage(img) {
    MainImage.src = img.src;
}

// Contact us button
let contact_us = document.querySelector('.contact_us')

contact_us.addEventListener('click', function(){
    window.scrollTo(0, document.body.scrollHeight);
})