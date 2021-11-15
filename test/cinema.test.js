const { 
  isAllSeatsAVailable,
  isAllSeatsAllocated,
  checkNumberOfRequest,
  RequestSeats
 } = require('../src/cinema.js');

describe('Check if all of the seats are avaliable for sale ', () => {
  test('check if return true if all seats available = 0 ', () => {
    //arrange 
    const dummyCinemaSeats = {
      "A": [0, 0, 0, 0, 0],
      "B": [0, 0, 0, 0, 0],
      "c": [0, 0, 0, 0, 0],
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
      "c": [0, 0, 0, 0, 0],
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
      "c": [1, 1, 1, 1, 1],
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
      "c": [1, 1, 1, 1, 1],
    };
    //act 
    const allSeatsAllocated = isAllSeatsAllocated(dummyCinemaSeats);
    //assert
    expect(allSeatsAllocated).toBe(false);
  });
});

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
    const dummyCinemaSeats = {
      "A": [0, 0, 0, 0, 0],
      "B": [0, 0, 0, 0, 0],
      "c": [0, 0, 0, 0, 0],
    };
    const dummyRequestSeats = 1;
    //act 
    const newSeatsAllocation = RequestSeats(dummyCinemaSeats, dummyRequestSeats);
    //assert
    expect(newSeatsAllocation).toStrictEqual(
      {
        "A": [1, 0, 0, 0, 0],
        "B": [0, 0, 0, 0, 0],
        "c": [0, 0, 0, 0, 0],
      }
    );
  });
  test('check if number of seats requested is = 2, I will be allocated the 2 seats A1,A2', () => {
    //arrange 
    const dummyCinemaSeats = {
      "A": [0, 0, 0, 0, 0],
      "B": [0, 0, 0, 0, 0],
      "c": [0, 0, 0, 0, 0],
    };
    const dummyRequestSeats = 2;
    //act 
    const newSeatsAllocation = RequestSeats(dummyCinemaSeats, dummyRequestSeats);
    //assert
    expect(newSeatsAllocation).toStrictEqual(
      {
        "A": [1, 1, 0, 0, 0],
        "B": [0, 0, 0, 0, 0],
        "c": [0, 0, 0, 0, 0],
      }
    );
  });

});

