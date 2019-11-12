// JavaScript Document
function addItem(){

	var textBox = document.getElementById("newItem");
	var ul = document.getElementById("list");
	var li = document.createElement("li");
	var priceList = document.getElementById("options");
	var prices = priceList.getElementsByTagName("li");
	
	var productNames = [];
	
	var productPrices = [];
	
	var i = 0;
	
	for (i = 0; i < prices.length; i++){
		var a = prices[i].textContent.split("$")[0];
		a = a.substring(0,(a.length - 2));
		
		productNames.push(a);

		productPrices.push(prices[i].textContent.split("$")[1]);
	}
	
	var totalHeader = document.getElementById("total");
	
	var totalSoFar = parseFloat(0.0);

	if (totalHeader.textContent.length > 0){
		var totalArr = (totalHeader.textContent.split("$"));
		alert("It gets this far!");
		totalSoFar = totalArr[1];
	}

	var choice = textBox.value;
	var choicePrice = 0.0;
	var foundChoice = false;

	for (i = 0; i < productNames.length; i++){
		if (choice === productNames[i]){
			foundChoice = true;
			choicePrice = productPrices[i];
			break;
		}
	}
	
	if (!foundChoice){
		alert("Looks like we don't have that in stock.");
	}
	else{
		totalSoFar = parseFloat(totalSoFar) + parseFloat(choicePrice);
		totalHeader.textContent = "Total: $" + totalSoFar;
		li.appendChild(document.createTextNode(textBox.value));
		ul.appendChild(li);
	}
	
	textBox.value = "";
}
