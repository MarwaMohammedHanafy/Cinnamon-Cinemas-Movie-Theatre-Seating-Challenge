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
    return {
        seats: {
            "A": [0, 0, 0, 0, 0],
            "B": [0, 0, 0, 0, 0],
            "C": [0, 0, 0, 0, 0],
        },
        firstAvailableSeat: {
            row: "A",
            col: 1,
        }
    };
};

/**
 * 
 * @param {*} cinemaSeats 
 * @returns 
 */
const getNumOfSeatsAVailable = (cinemaSeats) => {
    let count = 0;
    for (let row in cinemaSeats) {
        for (let seat = 0; seat < cinemaSeats[row].length; seat++)
            if (cinemaSeats[row][seat] == 0) {
                count++;
            }
    }
    return count;
};

module.exports = {
    isAllSeatsAVailable,
    isAllSeatsAllocated,
    createCinemaSeats,
    getNumOfSeatsAVailable,
};