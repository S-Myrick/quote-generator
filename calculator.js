var totalPrice = 0;

window.addEventListener('load', function() {
  document.getElementById("calculator-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from being submitted

    // Get the values of the input fields
    var service = document.getElementById("service").value;
    var numberOfHours = document.getElementById("number-of-hours").value;
    var numberOfMinutes = document.getElementById("number-of-minutes").value;

    // Calculate the price per minute based on the selected service
    var pricePerMinute = 0;
    if (service == "service1") {
      pricePerMinute = 1.69;
    } else if (service == "service2") {
      pricePerMinute = 1.26;
    } else if (service == "service3") {
      pricePerMinute = 1.20;
       } else if (service == "service4") {
      pricePerMinute = 1.18;
       } else if (service == "service5") {
      pricePerMinute = 8.93;
       } else if (service == "service6") {
      pricePerMinute = 7.56;
       } else if (service == "service7") {
      pricePerMinute = 1.98;
       } else if (service == "service8") {
      pricePerMinute = 1.40;
    } else if (service == "custom") {
      pricePerMinute = document.getElementById("price-per-minute").value;
      if (isNaN(pricePerMinute)) {
        // Display an error message if the value is not a number
        alert("Please enter a valid price per minute.");
        return;
      }
    }
    // Update the price per minute input field with the calculated value
    document.getElementById("price-per-minute").value = pricePerMinute;

    // Define the calculator function
    function calculateTotalPrice(pricePerMinute, numberOfHours, numberOfMinutes) {
      if (!numberOfHours) numberOfHours = 0;
      if (!numberOfMinutes) numberOfMinutes = 0;
      // Convert the number of hours to minutes
      var numberOfHoursInMinutes = numberOfHours * 60 + parseInt(numberOfMinutes);
      // Calculate the total price
      var totalPrice = numberOfHoursInMinutes * pricePerMinute;
      // Format the total price as a currency string
      var formattedTotalPrice = "$" + totalPrice.toFixed(2);
      return formattedTotalPrice;
    }

    // Call the calculator function and get the result
    var result = calculateTotalPrice(pricePerMinute, numberOfHours, numberOfMinutes);

    // Display the result in the result element
    document.getElementById("result").textContent = "";

    // Create a new row element
    var row = document.createElement("tr");

    // Create new cell elements for the service, number of hours + minutes, and price
    var serviceCell = document.createElement("td");
    serviceCell.className = "left-align";
    var numberOfHoursMinutesCell = document.createElement("td");
    numberOfHoursMinutesCell.className = "center-align";
    var priceCell = document.createElement("td");
    priceCell.className = "center-align";
    priceCell.id = "price";

    // Set the text content of the cell elements to the inputted values
  if(!numberOfMinutes){
      numberOfMinutes = 0;
  }
  if(!numberOfHours){
      numberOfHours = 0;
  }
  var totalMinutes = (numberOfHours * 60) + parseInt(numberOfMinutes);

    numberOfHoursMinutesCell.textContent = totalMinutes + "";
    priceCell.textContent = result;
    if (service == "service1") {
    serviceCell.textContent = "Transcription & Captioning 12 Hour Turnaround";
  } else if (service == "service2") {
  serviceCell.textContent = "Transcription & Captioning 24 Hour Turnaround";
  } else if (service == "service3") {
  serviceCell.textContent = "Transcription & Captioning 48 Hour Turnaround";
  } else if (service == "service4") {
  serviceCell.textContent = "Transcription & Captioning 72 Hour Turnaround";
  } else if (service == "service5") {
  serviceCell.textContent = "Extended Audio Description";
  } else if (service == "service6") {
  serviceCell.textContent = "Standard Audio Description";
  } else if (service == "service7") {
  serviceCell.textContent = "Live Captioning";
  } else if (service == "service8") {
    serviceCell.textContent = "Open Captions";
  } else {
    serviceCell.textContent = "Custom";
  }
    
      // Append the row to the table
    document.getElementById("table").appendChild(row);
    
    // Append the cell elements to the row element
    row.appendChild(serviceCell);
    row.appendChild(numberOfHoursMinutesCell);
    row.appendChild(priceCell);
    
    // Create a new cell element for the delete button
    var deleteCell = document.createElement("td");
    
    // Create a new delete button element
    var deleteButton = document.createElement("button");
    
    // Set the class of the delete button element to "delete-button"
    deleteButton.setAttribute("class", "delete-button");
    
    // Set the text content of the delete button element to "Delete"
    deleteButton.textContent = "X";
    
    // Append the delete button to the delete cell
    deleteCell.appendChild(deleteButton);
    
    // Append the delete cell to the row
    row.appendChild(deleteCell);

    // Append the cell elements to the row element
    row.appendChild(serviceCell);
    row.appendChild(numberOfHoursMinutesCell);
    row.appendChild(priceCell);
    row.appendChild(deleteCell);

    // Create a function to update the total row
    function updateTotalRow() {
        var totalPrice = 0;
        var table = document.getElementById("table");
        var rows = table.rows;
        if (rows.length > 1) {
          for (var i = 1; i < rows.length - 1; i++) {
              var price = parseFloat(rows[i].cells[2].textContent.replace("$", ""));
              totalPrice += price;
          }
        }
        var totalRow = document.getElementById("total-row");
        
        // Create a new formatter
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      useGrouping: true
  });

  // Format the total price
  const formattedTotalPrice = formatter.format(totalPrice);

  // Update the total row with the formatted total price
  totalRow.cells[2].textContent = formattedTotalPrice;
    }
    
    // Add the price of this row to the total price
    var price = parseFloat(priceCell.textContent.replace("$",""));
    totalPrice += price;

    // Remove the previous total row if it exists
    var previousTotalRow = document.getElementById("total-row");
    if (previousTotalRow) {
        previousTotalRow.parentNode.removeChild(previousTotalRow);
    }

    // Create a new row element for the total price
    var totalRow = document.createElement("tr");
    totalRow.id = "total-row";
    totalRow.className = "total-row";  // Add a class to the total row element

     // Create new cell elements for the service, total minutes, and price
    var totalServiceCell = document.createElement("td");
    totalServiceCell.className = "total-cell";
    var totalTotalMinutesCell = document.createElement("td");
    var totalPriceCell = document.createElement("td");
    totalPriceCell.className = "total-price-cell";  // Add a class to the total price cell element
    
    totalServiceCell.classList.add("total-cell");
    totalTotalMinutesCell.classList.add("total-cell");
    totalPriceCell.classList.add("total-cell");
    
    // Set the text content of the cell elements to the appropriate values
    totalServiceCell.textContent = "Total";
    totalTotalMinutesCell.textContent = "";
    totalPriceCell.textContent = "$" + totalPrice.toFixed(2);

    // Append the cells to the total row
    totalRow.appendChild(totalServiceCell);
    totalRow.appendChild(totalTotalMinutesCell);
    totalRow.appendChild(totalPriceCell);
    totalPriceCell.textContent = "$" + totalPrice.toFixed(2);

    // Append the total row to the table
    document.getElementById("table").appendChild(totalRow);
    
    // Call the updateTotalRow function
  updateTotalRow();


    // Add an event listener to the delete button to handle deleting the row
    deleteButton.addEventListener("click", function() {
        // Get the value of the third cell in the row
        var value = parseFloat(this.parentNode.parentNode.cells[2].textContent.substring(1));
        // Subtract the value from the total
        totalPrice -= value;

        // Remove the parent of the delete button (the row) from the table
        var removedRow = this.parentNode.parentNode;
        removedRow.remove();

        // Call the update total row function
        updateTotalRow();
    });
  });
});

