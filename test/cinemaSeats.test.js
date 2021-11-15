const {
    isAllSeatsAVailable,
    isAllSeatsAllocated,
    createCinemaSeats,
} = require('../src/cinemaSeats.js');

describe('Check if create cinema correctly ', () => {
    test('check if return a cinema object with empty seats ', () => {
        //arrange 
        //act 
        const newCinema = createCinemaSeats();
        //assert
        expect(newCinema).toStrictEqual(
            {
                seats: {
                    "A": [0, 0, 0, 0, 0],
                    "B": [0, 0, 0, 0, 0],
                    "C": [0, 0, 0, 0, 0],
                },
                firstAvailableSeat: {
                    row: "A",
                    col: 1,
                }
            }
        );
    });
    test('check if return false if one seat is not available = 1 ', () => {
        //arrange 
        const dummyCinemaSeats = {
            "A": [0, 0, 0, 0, 0],
            "B": [0, 0, 1, 0, 0],
            "C": [0, 0, 0, 0, 0],
        };
        //act 
        const allSeatsAvailable = isAllSeatsAVailable(dummyCinemaSeats);
        //assert
        expect(allSeatsAvailable).toBe(false);
    });
});

describe('Check if all of the seats are avaliable for sale ', () => {
    test('check if return true if all seats available = 0 ', () => {
        //arrange 
        const dummyCinemaSeats = {
            "A": [0, 0, 0, 0, 0],
            "B": [0, 0, 0, 0, 0],
            "C": [0, 0, 0, 0, 0],
        };
        //act 
        const allSeatsAvailable = isAllSeatsAVailable(dummyCinemaSeats);
        //assert
        expect(allSeatsAvailable).toBe(true);
    });
    test('check if return false if one seat is not available = 1 ', () => {
        //arrange 
        const dummyCinemaSeats = {
            "A": [0, 0, 0, 0, 0],
            "B": [0, 0, 1, 0, 0],
            "C": [0, 0, 0, 0, 0],
        };
        //act 
        const allSeatsAvailable = isAllSeatsAVailable(dummyCinemaSeats);
        //assert
        expect(allSeatsAvailable).toBe(false);
    });
});
describe('Check if all of the seats are Allocates', () => {
    test('check if return true if all seats Allocated = 1 ', () => {
        //arrange 
        const dummyCinemaSeats = {
            "A": [1, 1, 1, 1, 1],
            "B": [1, 1, 1, 1, 1],
            "C": [1, 1, 1, 1, 1],
        };
        //act 
        const allSeatsAllocated = isAllSeatsAllocated(dummyCinemaSeats);
        //assert
        expect(allSeatsAllocated).toBe(true);
    });
    test('check if return false if there is  seat Available = 0 ', () => {
        //arrange 
        const dummyCinemaSeats = {
            "A": [1, 1, 1, 1, 1],
            "B": [1, 1, 1, 0, 1],
            "C": [1, 1, 1, 1, 1],
        };
        //act 
        const allSeatsAllocated = isAllSeatsAllocated(dummyCinemaSeats);
        //assert
        expect(allSeatsAllocated).toBe(false);
    });
});