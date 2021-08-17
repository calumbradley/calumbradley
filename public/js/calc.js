let cakePrices = new Array();
 
cakePrices['Null'] = 0;
cakePrices['6'] = 4;
cakePrices['8'] = 8;
cakePrices['10'] = 12;
cakePrices['12'] = 15;
 
function getCakeSizePrice(){
 
  let selectedCakeSize = document.getElementById('cakeSize');
  //console.log(selectedCakeSize.value);
 
  let cakeSizeResult = cakePrices[selectedCakeSize.value];
  return cakeSizeResult;
 
}
 
let cakeShape = []
 
cakeShape['round'] = 10;
cakeShape['square'] = 15;
 
function getCakeShape(){
 
let cakeShapePrice = 0;
let getCakeShapes = document.getElementsByName('selectedcake');
  for (let i = 0; i < getCakeShapes.length; i++) {
 
          if (getCakeShapes[i].checked) {
                cakeShapePrice = cakeShape[getCakeShapes[i].value];
    break;
  }
}
  return cakeShapePrice;
}
 
let spongePrices = new Array()
 
spongePrices[''] = 0;
spongePrices['plain'] = 3;
spongePrices['lemon'] = 4;
spongePrices['chocolate'] = 4.50;
spongePrices['carrotCake'] = 5;
spongePrices['otherSpongeFlavour'] = 10;
 
function getSpongePrice(){
 
let selectedSponge = document.getElementById('sponge');
let chosenSponge = spongePrices[selectedSponge.value];
 
return chosenSponge;
 
}
 
let butterCream = []
 
butterCream[''] = 0;
butterCream['vanilla'] = 1;
butterCream['chocolate'] = 2;
butterCream['vanillaCreamCheese'] = 3;
butterCream['lemon'] = 2;
butterCream['lemonCurd'] = 3;
 
function getButterCreamPrice(){
 
let selectedButtercream = document.getElementById('butterCream');
let chosenButterCream = butterCream[selectedButtercream.value];
 
return chosenButterCream;
 
}
 
function getIcingSugar(){
  let eleIceSugar = document.getElementById('icing');
  let icingSugar = 0;
 
  if (eleIceSugar.checked === true) {
     icingSugar = 5;
  }
 
  else {
    icingSugar = 0;
  }
 
  return icingSugar;
 
}
 
function decoration(){
  let eleDecoration = document.getElementById('custom');
  let decoration = 0;
 
  if (eleDecoration.checked === true) {
     decoration = 5;
  }
 
  else {
    decoration = 0;
  }
 
  return decoration;
 
}
function getdelorcol() {
     
  
    let delivery = document.getElementById('delivery');
    let collection = document.getElementById('collection');
    let delcolprice = 0;
 
 
      if(delivery.checked === true) {
        delcolprice = 4.95;
  }
 
        if (collection.checked === true) {
       
        }
 
        return delcolprice;
        
}
 
function calculateTotal()
{
    let cakePrice = getCakeSizePrice() + getSpongePrice() + getCakeShape() + getIcingSugar() + decoration() + getButterCreamPrice() + getdelorcol()
   
    let price = document.getElementById('price');
 
    price.innerHTML = "£"+cakePrice;
 
    return cakePrice;
   
  } 