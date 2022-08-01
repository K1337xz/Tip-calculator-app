const tip = document.querySelectorAll(".btn input");
const bill = document.querySelector(".bill");
const numberPl = document.querySelector(".numberppl");
const tipTxt = document.querySelector(".tip");
const error = document.querySelector(".errormsg");
for (let i = 0; i < tip.length; i++) {
	calculateTip(e);
}

function calculateTip(e) {
	let num = this.id;
	let precent = num / 100;
	let billValue = bill.value;
	let peopleValue = numberPl.value;
	//tip
	let tips = (precent * billValue) / peopleValue;
	tipTxt.innerHTML = `$${tips}`;
	//total
}
calculateTip();
