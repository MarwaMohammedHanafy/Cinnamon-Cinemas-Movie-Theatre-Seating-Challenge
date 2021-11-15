
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
 * @param {*} numOfRequestedSeats 
 * @returns {Boolean}
 */
const checkNumberOfRequest = (numOfRequestedSeats) => {
  return numOfRequestedSeats >= 1 && numOfRequestedSeats <= 3;
};
/**
 * 
 * @param {*} cinemaSeats 
 * @param {*} numOfRequestedSeats 
 * @returns 
 */
const RequestSeats = (cinemaSeats,numOfRequestedSeats) => {

};
module.exports = {
  isAllSeatsAVailable,
  isAllSeatsAllocated,
  checkNumberOfRequest,
  RequestSeats
};
