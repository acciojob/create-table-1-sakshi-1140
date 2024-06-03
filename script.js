function insert_Row() {
    //Write your code here
  const table = document.getElementById("sampleTable");

    // Create a new row
    const newRow = table.insertRow(0); // Insert at the top (index 0)

    // Create two cells for the new row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);

    // Set the cell values
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
  
}
