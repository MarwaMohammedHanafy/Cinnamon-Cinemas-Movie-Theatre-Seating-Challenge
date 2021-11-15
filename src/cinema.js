
/**
 * 
 * @param {*} cinemaSeats 
 * @returns {Boolean}
 */
const isAllSeatsAVailable = (cinemaSeats) => {
  for (let row in cinemaSeats) {
    for (let seat = 0; seat < cinemaSeats[row].length; seat++)
      if (cinemaSeats[row][seat] == 1) {
        return false;
      }
  }
  return true;
};
/**
 * 
 * @param {*} cinemaSeats 
 * @returns {Boolean}
 */
const isAllSeatsAllocated = (cinemaSeats) => {
  for (let row in cinemaSeats) {
    for (let seat = 0; seat < cinemaSeats[row].length; seat++)
      if (cinemaSeats[row][seat] == 0) {
        return false;
      }
  }
  return true;
};
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
 * @param {Object} cinemaSeats 
 * @param {Number} numOfRequestedSeats 
 * @returns  {Object} newSeatsAllocation
 */
const RequestSeats = (cinemaSeats,numOfRequestedSeats) => {

  for ( let seat = 0 ; seat < numOfRequestedSeats ; seat++){
    cinemaSeats["A"][seat] = 1;
  }

  return cinemaSeats;
};
module.exports = {
  isAllSeatsAVailable,
  isAllSeatsAllocated,
  checkNumberOfRequest,
  RequestSeats
};
