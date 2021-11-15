
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
 * @param {*} cinemaSeats 
 * @returns {Boolean}
 */
const checkNumberOfRequest = (cinemaSeats) => {
  return cinemaSeats >= 1 && cinemaSeats <= 3;
};
module.exports = {
  isAllSeatsAVailable,
  isAllSeatsAllocated,
  checkNumberOfRequest,
};
