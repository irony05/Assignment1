// Function to draw the multiplication table
function drawTable() {
    // Get user input for rows and columns
    let rowsInput = document.getElementById('rows');
    let columnsInput = document.getElementById('columns');
    let rows = parseInt(rowsInput.value);
    let columns = parseInt(columnsInput.value);

    // Validate input values
    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert('Please enter valid numbers for rows and columns.');
        return;
    }

    // Create the table element
    let table = document.createElement('table');

    // Generate table rows and columns
    for (let i = 0; i < rows; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < columns; j++) {
            let cell = document.createElement('td');
            let value = (i + 1) * (j + 1);
            cell.textContent = value;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    // Clear previous table
    let tableContainer = document.getElementById('tableContainer');
    tableContainer.innerHTML = '';

    // Append the new table
    tableContainer.appendChild(table);
}
