
/**
 * 
 * @returns Boolean
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
const isAllSeatsAllocated = (cinemaSeats) => {
  return true;
};

module.exports = {
  isAllSeatsAVailable,
  isAllSeatsAllocated,
};
