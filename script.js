const tip = document.querySelectorAll(".btn input");

for (let i = 0; i < tip.length; i++) {
	tip[i].addEventListener("click", calculateTip);
}

function calculateTip(e) {
	let num = this.id;
	console.log(num / 100);
}
