
/**
 * 
 * @param {Number} numOfRequestedSeats 
 * @returns {Boolean}
 */
const checkNumberOfRequest = (numOfRequestedSeats) => {
  return numOfRequestedSeats >= 1 && numOfRequestedSeats <= 3;
};
/**
 * 
 * @param {Object} cinema 
 * @param {Number} numOfRequestedSeats 
 * @returns  {Object} newSeatsAllocation
 */
const RequestSeats = (cinema, numOfRequestedSeats) => {
  const {seats, firstAvailableSeat} = cinema;
  for (let neededSeats = numOfRequestedSeats; neededSeats > 0; neededSeats--) {
    switch (firstAvailableSeat.row) {
      case "A":
        seats["A"][firstAvailableSeat.col - 1] = 1;
        firstAvailableSeat.col++;
        if (firstAvailableSeat.col == 6) {
          firstAvailableSeat.row = "B";
          firstAvailableSeat.col = 1;
        }
        break;
      case "B":
        seats["B"][firstAvailableSeat.col - 1] = 1;
        firstAvailableSeat.col++;
        if (firstAvailableSeat.col == 6) {
          firstAvailableSeat.row = "C";
          firstAvailableSeat.col = 1;
        }
        break;
      case "C":
        seats["C"][firstAvailableSeat.col - 1] = 1;
        firstAvailableSeat.col++;
        break;
    }
  }
  return cinema;
};
module.exports = {
  checkNumberOfRequest,
  RequestSeats
};
