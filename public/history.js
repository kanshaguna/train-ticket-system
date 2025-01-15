document.getElementById("ticket-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Generate ticket ID (simple demonstration)
    var ticketId = "T" + Math.floor(Math.random() * 10000);

    // Display alert for successful booking and generated ticket ID
    alert("Ticket with ID " + ticketId + " has been booked successfully.");
    document.getElementById("ticket-form").reset();

    // //Gather user input
    // var date = document.getElementById("date").value;
    // var from = document.getElementById("from").value;
    // var to = document.getElementById("to").value;

    // // Add ticket details to history table
    // var tableBody = document.getElementById("history-table-body");
    // var newRow = tableBody.insertRow();
    // newRow.innerHTML = "<td>" + ticketId + "</td><td>" + date + "</td><td>" + from + "</td><td>" + to + "</td><td>Booked</td><td><button class='delete-btn' data-ticket-id='" + ticketId + "'>Delete</button></td>";
});

document.getElementById("view-history-btn").addEventListener("click", function() {
    document.getElementById("ticket-history").style.display = "block";
});

// document.getElementById("ticket-history").addEventListener("click", function(event) {
//     if (event.target.classList.contains('delete-btn')) {
//         var ticketIdToDelete = event.target.getAttribute('data-ticket-id');
//         // Delete ticket logic (for demonstration, we'll remove the row from table)
//         event.target.closest('tr').remove();
//         alert("Ticket with ID " + ticketIdToDelete + " has been deleted.");
//     }
// });
