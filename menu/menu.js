let input;
let price;
function changePrice(){
 input= prompt("Do you want to change the price?if yes then enter the name of the product");
 price=prompt("Enter the price you want to change")
 alert("price changed sucessfully")
 document.getElementById(input).innerHTML=price;
}



