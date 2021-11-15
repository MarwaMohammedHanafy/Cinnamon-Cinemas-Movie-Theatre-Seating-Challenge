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
 * @returns 
 */
const createCinemaSeats = () => {

};

/**
 * 
 * @param {*} cinemaSeats 
 * @returns 
 */
const getNumOfSeatsAVailable = (cinemaSeats) => {

};

module.exports = {
    isAllSeatsAVailable,
    isAllSeatsAllocated,
    createCinemaSeats,
    getNumOfSeatsAVailable,
};