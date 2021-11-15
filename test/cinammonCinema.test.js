const {
    cinnamonCinemaBookingSystem,
} = require('../src/cinammonCinema.js');

describe('Test The System Flows', () => {
    test('Check if program return stop message when they finish allocate all the seats', () => {
        
        //act 
        const returnMsg = cinnamonCinemaBookingSystem();
        //assert
        expect(returnMsg).toBe("All seats are Allocated, The program Finished");
    });

});

