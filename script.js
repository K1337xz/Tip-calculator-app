let billValue = document.querySelector(".bill");
let numberofPeople = document.querySelector(".numberppl");
let customTip = document.querySelector(".customtip");
const tipValue = document.querySelector(".tip");
const totalValue = document.querySelector(".total");
const tipButtons = document.querySelectorAll(".btn > input");
const error = document.querySelector(".errormsg");
const resetButton = document.querySelector(".resetbtn");

for (let i = 0; i < tipButtons.length; i++) {
	tipButtons[i].addEventListener("click", updateTip);
}

function calculateTip() {
	let prcents = localStorage.getItem("precent");
	let peopleNumber = parseFloat(numberofPeople.value);
	let billss = parseFloat(billValue.value);
	let tipperpesonn = (billss * (parseFloat(prcents) / 100)) / peopleNumber;
	let precents = (billss * parseFloat(prcents)) / 100;
	let calculateTotals = (precents + billss) / peopleNumber;
	totalValue.innerHTML = `$${calculateTotals.toFixed(2)}`;
	tipValue.innerHTML = `$${tipperpesonn.toFixed(2)}`;
	//active button
	if (billValue.value.length > 0 && numberofPeople.value.length > 0) {
		resetButton.classList.add("activebtn");
	}
	//
	if (billss.length > 0 || peopleNumber > 0) {
		let adding = billss / peopleNumber;
		tipValue.innerHTML = `$0.00`;
		totalValue.innerHTML = `$${adding.toFixed(2)}`;
	} else {
		tipValue.innerHTML = `$0.00`;
		totalValue.innerHTML = `$0.00`;
	}
	//showerror
	if (numberofPeople.value === "") {
		error.style.display = "block";
		numberofPeople.classList.add("errorInput");
	} else {
		error.style.display = "none";
		numberofPeople.classList.remove("errorInput");
	}
}

function updateTip() {
	let num = this.id;
	let peopleNumber = parseFloat(numberofPeople.value);
	let bills = parseFloat(billValue.value);
	let tipperpeson = (bills * (parseFloat(num) / 100)) / peopleNumber;
	let precent = (bills * parseFloat(num)) / 100;
	let calculateTotal = (precent + bills) / peopleNumber;
	totalValue.innerHTML = `$${calculateTotal.toFixed(2)}`;
	tipValue.innerHTML = `$${tipperpeson.toFixed(2)}`;
	localStorage.setItem("precent", num);
	console.log(num);
	if (bills <= 0 && peopleNumber <= 0) {
		tipValue.innerHTML = `$0.00`;
		totalValue.innerHTML = `$0.00`;
	}
}
function calculateCastom() {
	let customValue = parseFloat(customTip.value);
	let customPrecent = (parseFloat(billValue.value) * customValue) / 100;
	let totalCustom =
		(customPrecent + parseFloat(billValue.value)) /
		parseFloat(numberofPeople.value);
	let tipCustom =
		(parseFloat(billValue.value) * (customValue / 100)) /
		parseFloat(numberofPeople.value);

	if (customValue > 0) {
		totalValue.innerHTML = `$${totalCustom.toFixed(2)}`;
		tipValue.innerHTML = `$${tipCustom.toFixed(2)}`;
	} else {
		tipValue.innerHTML = `$0.00`;
		totalValue.innerHTML = `$0.00`;
	}
	console.log(totalCustom);
}
function reset() {
	billValue.value = ``;
	numberofPeople.value = ``;
	customTip.value = ``;
	tipValue.innerHTML = `$0.00`;
	totalValue.innerHTML = `$0.00`;
	localStorage.removeItem("precent");
	resetButton.classList.remove("activebtn");
}
customTip.addEventListener("change", calculateCastom);
billValue.addEventListener("change", calculateTip);
numberofPeople.addEventListener("change", calculateTip);
resetButton.addEventListener("click", reset);
