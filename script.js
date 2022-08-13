let billValue = document.querySelector(".bill");
let numberofPeople = document.querySelector(".numberppl");
let customTip = document.querySelector(".customtip");
const tipValue = document.querySelector(".tip");
const totalValue = document.querySelector(".total");
const tipButtons = document.querySelectorAll(".btn > input");
const error = document.querySelector(".errormsg");
const resetButton = document.querySelector(".resetbtn");

for (let i = 0; i < tipButtons.length; i++) {
	tipButtons[i].addEventListener("click", updateTip),
		tipButtons[i].addEventListener("change", updateTip);
}

function calculateTip() {
	let customValue = parseFloat(customTip.value);
	let prcents = localStorage.getItem("precent");
	let peopleNumber = parseFloat(numberofPeople.value);
	let billss = parseFloat(billValue.value);
	let customPrecent = (billss * customValue) / 100;
	let precents = (billss * parseFloat(prcents)) / 100;
	let calculateCstm = (customPrecent + billss) / peopleNumber;
	let tipCstm = (billss * (customValue / 100)) / peopleNumber;
	localStorage.setItem("precentCustom", customPrecent);
	//calculate tipperperson and total value per person
	let tipperpesonn = (billss * (parseFloat(prcents) / 100)) / peopleNumber;
	let calculateTotals = (precents + billss) / peopleNumber;
	//change values in display
	totalValue.innerHTML = `$${calculateTotals.toFixed(2)}`;
	tipValue.innerHTML = `$${tipperpesonn.toFixed(2)}`;
	//activate reset button
	if (billValue.value.length > 0 && numberofPeople.value.length > 0) {
		resetButton.classList.add("activebtn");
	}
	//calculate custom tip
	if (customValue > 0 && !prcents) {
		totalValue.innerHTML = `$${calculateCstm.toFixed(2)}`;
		tipValue.innerHTML = `$${tipCstm.toFixed(2)}`;
		console.log(customPrecent);
	}
	//errormsg
	if (numberofPeople.value === "") {
		error.style.display = "block";
		numberofPeople.classList.add("errorInput");
	} else {
		error.style.display = "none";
		numberofPeople.classList.remove("errorInput");
	}
	if (!prcents) {
		let withoutPrecents = billss / peopleNumber;
		totalValue.innerHTML = `$${withoutPrecents.toFixed(2)}`;
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
	if (bills <= 0 && peopleNumber <= 0) {
		tipValue.innerHTML = `$0.00`;
		totalValue.innerHTML = `$0.00`;
	}
	if (this.classList.contains("activetip")) return;
	for (let j = 0; j < tipButtons.length; j++) {
		tipButtons[j].classList.remove("activetip");
	}
	this.classList.add("activetip");
	localStorage.setItem("precent", num);
}
//function calculateCastom() {
//	let customValue = parseFloat(customTip.value);
//	let customPrecent = (parseFloat(billValue.value) * customValue) / 100;
//	let totalCustom =
//		(customPrecent + parseFloat(billValue.value)) /
//		parseFloat(numberofPeople.value);
//	let tipCustom =
//		(parseFloat(billValue.value) * (customValue / 100)) /
//		parseFloat(numberofPeople.value);
//
//	if (customValue > 0) {
//		totalValue.innerHTML = `$${totalCustom.toFixed(2)}`;
//		tipValue.innerHTML = `$${tipCustom.toFixed(2)}`;
//	} else {
//		tipValue.innerHTML = `$0.00`;
//		totalValue.innerHTML = `$0.00`;
//	}
//	console.log(tipCustom);
//	localStorage.setItem("precentCustom", customPrecent);
//}
function reset() {
	billValue.value = ``;
	numberofPeople.value = ``;
	customTip.value = ``;
	tipValue.innerHTML = `$0.00`;
	totalValue.innerHTML = `$0.00`;
	localStorage.removeItem("precent");
	localStorage.removeItem("precentCustom");
	resetButton.classList.remove("activebtn");
	if (this.classList.contains("activetip")) return;
	for (let x = 0; x < tipButtons.length; x++) {
		tipButtons[x].classList.remove("activetip");
	}
}
customTip.addEventListener("change", calculateTip);
billValue.addEventListener("change", calculateTip);
numberofPeople.addEventListener("change", calculateTip);
resetButton.addEventListener("click", reset);
