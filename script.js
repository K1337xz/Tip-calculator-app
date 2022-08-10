let billValue = document.querySelector(".bill");
let numberofPeople = document.querySelector(".numberppl");
let customTip = document.querySelector(".customtip");
const tipValue = document.querySelector(".tip");
const totalValue = document.querySelector(".total");
const tipButtons = document.querySelectorAll(".btn > input");
const error = document.querySelector(".errormsg");

for (let i = 0; i < tipButtons.length; i++) {
	tipButtons[i].addEventListener("click", updateTip);
}

function calculateTip() {
	if (numberofPeople.value === "") {
		error.style.display = "block";
		numberofPeople.classList.add("errorInput");
	} else {
		error.style.display = "none";
		numberofPeople.classList.remove("errorInput");
	}
	let prcents = localStorage.getItem("myElement");
	let peopleNumber = parseFloat(numberofPeople.value);
	let billss = parseFloat(billValue.value);
	let tipperpesonn = (billss * (parseFloat(prcents) / 100)) / peopleNumber;
	let precents = (billss * parseFloat(prcents)) / 100;
	let calculateTotals = (precents + billss) / peopleNumber;
	totalValue.innerHTML = `$${calculateTotals.toFixed(2)}`;
	tipValue.innerHTML = `$${tipperpesonn.toFixed(2)}`;
	console.log(prcents);
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
	localStorage.setItem("myElement", num);
	console.log(num);
}

billValue.addEventListener("change", calculateTip);
numberofPeople.addEventListener("change", calculateTip);
