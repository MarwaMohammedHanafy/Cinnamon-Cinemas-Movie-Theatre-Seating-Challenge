const { isAllSeatsAVailable } = require('../src/cinema.mjs');


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
});

