const {
  checkNumberOfRequest,
  RequestSeats
} = require('../src/cinemaBookingSystem.js');

describe('Check if number of seats requestes from 1 to 3 ', () => {
  test('check if return true if number of seats requestes = 3', () => {
    //arrange 
    const dummyRequestSeats = 3;
    //act 
    const validrequest = checkNumberOfRequest(dummyRequestSeats);
    //assert
    expect(validrequest).toBe(true);
  });
  test('check if return false if number of seats requestes = 0', () => {
    //arrange 
    const dummyRequestSeats = 0;
    //act 
    const validrequest = checkNumberOfRequest(dummyRequestSeats);
    //assert
    expect(validrequest).toBe(false);
  });
  test('check if return false if number of seats requestes = 4', () => {
    //arrange 
    const dummyRequestSeats = 4;
    //act 
    const validrequest = checkNumberOfRequest(dummyRequestSeats);
    //assert
    expect(validrequest).toBe(false);
  });
});
describe('Assume theatre is empty scenario', () => {
  test('check if number of seats requested is = 1, I will be allocated the first seat A1', () => {
    //arrange 
    const dummyCinema = {
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
    const dummyRequestSeats = 1;
    //act 
    const newSeatsAllocation = RequestSeats(dummyCinema, dummyRequestSeats);
    //assert
    expect(newSeatsAllocation).toStrictEqual(
      {
        seats: {
          "A": [1, 0, 0, 0, 0],
          "B": [0, 0, 0, 0, 0],
          "C": [0, 0, 0, 0, 0],
        },
        firstAvailableSeat: {
          row: "A",
          col: 2,
        }
      }
    );
  });
  test('check if number of seats requested is = 2, I will be allocated the 2 seats A1,A2', () => {
    //arrange 
    const dummyCinema = {
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
    const dummyRequestSeats = 2;
    //act 
    const newSeatsAllocation = RequestSeats(dummyCinema, dummyRequestSeats);
    //assert
    expect(newSeatsAllocation).toStrictEqual(
      {
        seats: {
          "A": [1, 1, 0, 0, 0],
          "B": [0, 0, 0, 0, 0],
          "C": [0, 0, 0, 0, 0],
        },
        firstAvailableSeat: {
          row: "A",
          col: 3,
        }
      }
    );
  });

});
describe('Assume seats A1,A2,A3,A4 have already been filled scenario', () => {
  test('check if the number of seats requested is = 2, I will be allocated the first seat A5,B1', () => {
    //arrange 
    const dummyCinema = {
      seats: {
        "A": [1, 1, 1, 1, 0],
        "B": [0, 0, 0, 0, 0],
        "C": [0, 0, 0, 0, 0],
      },
      firstAvailableSeat: {
        row: "A",
        col: 5,
      }
    };

    const dummyRequestSeats = 2;
    //act 
    const newSeatsAllocation = RequestSeats(dummyCinema, dummyRequestSeats);
    //assert
    expect(newSeatsAllocation).toStrictEqual(
      {
        seats: {
          "A": [1, 1, 1, 1, 1],
          "B": [1, 0, 0, 0, 0],
          "C": [0, 0, 0, 0, 0],
        },
        firstAvailableSeat: {
          row: "B",
          col: 2,
        }
      }
    );
  });
});
describe('Assume seats from A1 to B3 have already been filled scenario', () => {
  test('check if the number of seats requested is = 3, I will be allocated seats B4,B5,C1', () => {
    //arrange 
    const dummyCinema = {
      seats: {
        "A": [1, 1, 1, 1, 1],
        "B": [1, 1, 1, 0 , 0],
        "C": [0, 0, 0, 0, 0],
      },
      firstAvailableSeat: {
        row: "B",
        col: 4,
      }
    };

    const dummyRequestSeats = 3;
    //act 
    const newSeatsAllocation = RequestSeats(dummyCinema, dummyRequestSeats);
    //assert
    expect(newSeatsAllocation).toStrictEqual(
      {
        seats: {
          "A": [1, 1, 1, 1, 1],
          "B": [1, 1, 1, 1, 1],
          "C": [1, 0, 0, 0, 0],
        },
        firstAvailableSeat: {
          row: "C",
          col: 2,
        }
      }
    );
  });
});

