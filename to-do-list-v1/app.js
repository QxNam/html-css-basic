function get_task() {
	// Get the input value
	const taskName = document.getElementById("input").value;

	// Create a new row element
	const newRow = document.createElement("tr");

	// Set the content of the new row
	newRow.innerHTML = `
		<td>${document.querySelectorAll("#task tr").length + 1}</td>
		<td>${taskName}</td>
		<td><input type="checkbox" class="cb"></td>
		<td><button onclick="delete_task(this)" class="del">X</button></td>
	`;

	// Append the new row to the table body
	document.getElementById("task").appendChild(newRow);
	
	// Clear the input field
	document.getElementById("input").value = "";
}

function delete_task(button) {
	const row = button.parentNode.parentNode;
	row.parentNode.removeChild(row);
	const tbody = document.getElementById("task");
	const rows = tbody.getElementsByTagName("tr");
	for (let i = 0; i < rows.length; i++) {
		rows[i].getElementsByTagName("td")[0].textContent = i+1;
	}
}
// Add event listener to the input element to listen for "keydown" event
document.getElementById("input").addEventListener("keydown", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		get_task();
	}
});