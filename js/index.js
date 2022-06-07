// ITERATION 1

function updateSubtotal(product) {
let priceHolder= product.querySelector(".price span")
let quantityHolder= product.querySelector(".quantity input")
let price= Number(priceHolder.innerText);
let quantity=Number(quantityHolder.value);
let subtotal= price*quantity
console.log(subtotal)
let subtotalHolder= product.querySelector(".subtotal span")
subtotalHolder.innerText=subtotal

  console.log('Calculating subtotal, yey!');
return subtotal
  //... your code goes here

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let products=document.querySelectorAll(".product")
  products.forEach((product) => {updateSubtotal(product)
    
  });
console.log(products)

  // ITERATION 3
  let totalHolder= document.querySelector("#total-value span")
let total =0
products.forEach((product)=>{total+=updateSubtotal(product)})

totalHolder.innerText=total
}

// ITERATION 4

function removeProduct(event) {

  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove()
  
  
}

// ITERATION 5

function createProduct(event) {
  //... your code goes here


 let newName = document.querySelector(".create-product input[type=text");
  console.log(newName)


  let newPrice = document.querySelector(".create-product input[type=number]");
 console.log(newPrice)



  
}

window.addEventListener('load', () => {
  const removeButton =document.querySelectorAll(".btn-remove")
  removeButton.forEach((button)=>{button.addEventListener("click",removeProduct)})


  const createButton =document.querySelectorAll("#create")
  createButton.forEach((button)=>{button.addEventListener("click",createProduct)})

  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
