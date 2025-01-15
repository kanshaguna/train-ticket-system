const socket = io();

// Display seating plan
const seatingPlan = document.getElementById('seating-plan');
socket.on('seats', (seats) => {
    seatingPlan.innerHTML = '';
    for (const seat in seats) {
      const seatDiv = document.createElement('div');
      seatDiv.classList.add('seat', seats[seat]);
      seatDiv.innerText = seat;
      seatDiv.onclick = () => lockSeat(seat);
      seatingPlan.appendChild(seatDiv);
    }
  });
  

// Lock a seat
function lockSeat(seat) {
  socket.emit('lockSeat', seat);
}
