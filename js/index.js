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
 
  let product = document.createElement("tr");
  product.className="product"



  let nameHolder = document.querySelector(".create-product input[type=text");
  let newName = document.createElement("td");
  newName.className="name"
 newName.innerHTML=`<span>${nameHolder.value}</span>`
  product.appendChild(newName)
 




  
 let priceHolder = document.querySelector(".create-product input[type=number]");
 let newPrice = document.createElement("td");
 newPrice.className="price"
 let floatPrice=parseFloat(priceHolder.value).toFixed(2)
 newPrice.innerHTML=`$<span>${floatPrice}</span>`
 product.appendChild(newPrice)


 let quantityCell = document.createElement("td");
 quantityCell.className="quantity"
 let newQuantity=document.createElement("input")
 newQuantity.type="number"
 newQuantity.value="0"
 newQuantity.min="0"
 newQuantity.placeholder="Quantity"
quantityCell.appendChild(newQuantity)
 product.appendChild(quantityCell)



 let subtotalCell = document.createElement("td");
 subtotalCell.className="subtotal"
 subtotalCell.innerHTML="$<span>0</<span>"
 product.appendChild(subtotalCell)



 let buttonCell = document.createElement("td");
 buttonCell.className="action";
 let newButton = document.createElement("button");
 newButton.className="btn btn-remove"
 newButton.innerHTML="Remove"
 buttonCell.appendChild(newButton)
 product.appendChild(buttonCell)


let productList = document.querySelector("#cart tbody");
 productList.appendChild(product)
  



 const removeButton =document.querySelectorAll(".btn-remove")
  removeButton.forEach((button)=>{button.addEventListener("click",removeProduct)})
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
