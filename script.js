const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const priceelem=document.querySelectorAll(".price")	;
	let totprice=0;

	priceelem.forEach(element => {
		const price=parseFloat(element.textContent);
		if(!isNaN(price))
		{
			totprice += price;
		}
	});

	const table=document.querySelector("table");

	const newrow=document.createElement("tr");
	const totcell=document.createElement("td");
	totcell.id="ans";

	totcell.textContent=`Total Price:${totprice.toFixed(2)}`;
	totcell.colSpan=table.rows[0].cells.length;
	newrow.appendChild(totcell);
  table.appendChild(newrow);
};

getSumBtn.addEventListener("click", getSum);
