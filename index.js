window.addEventListener("load", inicio, false);

let elements = 1;


function inicio () {
	document.getElementById("addRow").addEventListener("click", ()=>{ addRow(); });
	document.getElementById("removeRow").addEventListener("click", ()=>{ removeRow(); });
	document.getElementById("calculate").addEventListener("click", ()=>{ calculate(); });


}

function addRow () {
	elements++;
	let row = document.createElement("div");

	row.id = "row_" + elements;
	row.classList.add("bar");

	row.innerHTML = `<div class="littleText">
						<input id="win_${elements}" type="text">
					</div>
					<div class="littleText">
						<input id="lose_${elements}" type="text">
					</div>
					<div class="littleText">
						<input id="tie_${elements}" type="text">
					</div>
					<div class="littleText">
						<label id="total_${elements}">-</label>
					</div>`;

	document.getElementById("rows").appendChild(row);
}

function removeRow() {
	if(elements > 1) {
		let row = document.getElementById("row_"+elements);
		row.parentNode.removeChild(row);

		elements--;
	}
}

function calculate() {
	let players = Number(document.getElementById("players").value);
	let rounds = Number(document.getElementById("rounds").value);
	let totalFinal = 0;

	for (var i = 1; i <= elements; i++) {
		let win = Number(document.getElementById("win_"+i).value);
		let lose = Number(document.getElementById("lose_"+i).value);
		let tie = Number(document.getElementById("tie_"+i).value);

		if(win + lose + tie == rounds) {
			let total = factorial(rounds)/(factorial(win)*factorial(lose)*factorial(tie)) * players / Math.pow(3, rounds);
			document.getElementById("total_"+i).innerHTML = total.toFixed(3);
			totalFinal += total;
		}else {
			document.getElementById("total_"+i).innerHTML = "-";
		}
	}

	document.getElementById("totalFinal").innerHTML = totalFinal.toFixed(3);
}


function factorial(n) {
  return (n >= 1) ? n * factorial(n - 1) : 1;
}
