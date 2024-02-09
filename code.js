'use strict';

const cart = document.querySelector('.cart');
const Quantity = document.querySelector('.quantity-counter');
const items = document.querySelector('.items');
const sum = document.querySelector('.sum');
const price = document.querySelector('.price');
const emptyCartMess = document.querySelector('.empty-cart');
const cartNotify = document.querySelector('.cart-notification');
const thumbnail = document.querySelectorAll('.small-img');
const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('.main-img');
const cancel = document.querySelector('.cancel');
let amount = 0;


let shoppingCart = document.querySelector('.shopping-cart').addEventListener('click', function() {
    if ( cart.classList.contains('hidden') ) {
        cart.classList.remove('hidden');
    }
    else {
        cart.classList.add('hidden');
    }

})

const addBtn = document.querySelector('.add').addEventListener('click', function() {
    amount ++;
    Quantity.textContent = amount;
}) 

const minusBtn = document.querySelector('.minus').addEventListener('click', function() {
    if ( amount > 0 ) {
        amount--;
        Quantity.textContent = amount;
    }

})

const checkoutBtn = document.querySelector('.add-to-cart').addEventListener('click', function () {
    if (amount > 0) {
        emptyCartMess.classList.add('hidden');
        items.classList.remove('hidden');
        sum.textContent = amount;
        cartNotify.textContent = amount;
        cartNotify.classList.remove('hidden');
        price.textContent = `$ ${amount * 125.00}.00`;
        Quantity.textContent = 0;
    }
})

const deleteBtn = document.querySelector('.delete').addEventListener('click', function () {
    emptyCartMess.classList.remove('hidden');
    items.classList.add('hidden');
    cart.classList.add('hidden');
    cartNotify.classList.add('hidden');
})

function displayThumbnail() {
    thumbnail.forEach(image => {
        image.addEventListener('mouseover', function () {
            image.classList.add('blur');
        })

        image.addEventListener('mouseout', function () {
            image.classList.remove('blur');
        })
    })
}

displayThumbnail();

modalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
})

cancel.addEventListener('click', function () {
    modal.style.display = 'none';
})

console.log(modalBtn)




