// Input elements
const your_input = [
	document.getElementById("copper"),
	document.getElementById("silver"),
	document.getElementById("gold")
];
const add_input = [
	document.getElementById("copper1"),
	document.getElementById("silver1"),
	document.getElementById("gold1")
];
const inputFields = [your_input, add_input];

// Operating elements
const add_button = document.getElementById("add-btn");
const subt_button = document.getElementById("subt-btn");

// 'Results' elements
const resultnumbers_div = document.getElementById("results-numbers");
const errCaseText_p = document.getElementById("err-case");

const togold_button = document.getElementById("goldc-btn");
const tosilver_button = document.getElementById("silverc-btn");
const tocopper_button = document.getElementById("copperc-btn");
const transfer_button = document.getElementById("transfer-btn");


// -------------------------------------------------------------------------

let result = 0 // Working result in copper value
let displayed_result = [0,0,0]; // Result that is converted and displayed to the user

// Parameter of 0 reads your_input, 1 reads add_input.
// Chosen input is returned as a copper value.
function receiveInputAsCopper(field) {
	let inp = 0;
	for(let i = 0; i < 3; i++) {
		inp += Math.floor(inputFields[field][i].value) * (10**i);
	}
	
	if(!inp && inp != 0) {
		console.log(`Value of input field ${field} (of 0-1) is non-existent!\nError sent.`);
		return("ERR_NO_VAL");
	}
	else {
		return inp;
	}
}

// Calculation result is displayed on the page, depending on preferred highestConversion ("gold", "silver", or "copper")
function updateResults(highestConversion, copperResult) {
	let gold = 0;
	let silver = 0;
	
	switch (highestConversion) {
		case "gold":
			gold = (result >= 0)? Math.floor(copperResult/100):Math.ceil(copperResult/100);
			copperResult -= gold*100;
		case "silver":
			silver = (result >= 0)? Math.floor(copperResult/10):Math.ceil(copperResult/10);
			copperResult -= silver*10;
	}
	
	displayed_result = [copperResult, silver, gold];
	resultnumbers_div.innerHTML = `${gold}<br/>${silver}<br/>${copperResult}<br/>`;
}
// Change the text of the error message element
function changeErrCaseText(txt) {
	errCaseText_p.textContent = txt;
}

// Calculates monetary sum/difference of "Your Coins" and "To Add/Subtr." fields
// Also handles displaying error text, depending on the results of input retrieval
// operation: 1 = add, -1 = subtract
function addCoins(operation) {
	let current = receiveInputAsCopper(0);
	let toAdd = receiveInputAsCopper(1);
	
	changeErrCaseText("");
	
	if(current === "ERR_NO_VAL" || toAdd === "ERR_NO_VAL") {
		changeErrCaseText("Please only type numbers.");
	}
	else {
		result = (current + (operation*toAdd));
		console.log(`Your input:\t${current}\nMod. input:\t${toAdd}\nResult: \t${result}`);
		updateResults("gold", result);
		
		if(result < 0) {
			changeErrCaseText("This will put you in debt.");
		}
	}
}

// Moves the resulting calculation to your_input and clears add_input
function transferToYourInput() {
	for(let i = 0; i < 3; i++) {
		your_input[i].value = displayed_result[i];
		add_input[i].value = "";
	}
}

// Adding relevant functions to their respective buttons
add_button.addEventListener('click', ()=>{addCoins(1)});
subt_button.addEventListener('click', ()=>{addCoins(-1)});

togold_button.addEventListener('click', ()=>{updateResults("gold", result)});
tosilver_button.addEventListener('click', ()=>{updateResults("silver", result)});
tocopper_button.addEventListener('click', ()=>{updateResults("copper", result)});

transfer_button.addEventListener('click', ()=>{transferToYourInput()});
