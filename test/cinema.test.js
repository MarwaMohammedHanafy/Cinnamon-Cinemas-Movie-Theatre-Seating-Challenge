const { isAllSeatsAVailable, isAllSeatsAllocated, checkNumberOfRequest } = require('../src/cinema.js');

describe('Check if all of the seats are avaliable for sale ', () => {
  test('check if return true if all seats available = 0 ', () => {
  //arrange 
  const dummyCinemaSeats = {
    "A" : [0,0,0,0,0],
    "B" : [0,0,0,0,0],
    "c" : [0,0,0,0,0],
  };
  //act 
  const allSeatsAvailable = isAllSeatsAVailable(dummyCinemaSeats);
  //assert
  expect(allSeatsAvailable).toBe(true);
  });
  test('check if return false if one seat is not available = 1 ', () => {
    //arrange 
    const dummyCinemaSeats = {
      "A" : [0,0,0,0,0],
      "B" : [0,0,1,0,0],
      "c" : [0,0,0,0,0],
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
    "A" : [1,1,1,1,1],
    "B" : [1,1,1,1,1],
    "c" : [1,1,1,1,1],
  };
  //act 
  const allSeatsAllocated = isAllSeatsAllocated(dummyCinemaSeats);
  //assert
  expect(allSeatsAllocated).toBe(true);
  });
  test('check if return false if there is  seat Available = 0 ', () => {
    //arrange 
    const dummyCinemaSeats = {
      "A" : [1,1,1,1,1],
      "B" : [1,1,1,0,1],
      "c" : [1,1,1,1,1],
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
});

