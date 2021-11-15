import cinemaBookingSystem from './cinemaBookingSystem.js';
import cinemaSeats from './cinemaSeats';

/**
 * 
 */
const cinnamonCinemaBookingSystem = () => {
    const cinema = cinemaSeats.createCinemaSeats();
    if (!isAllSeatsAVailable(cinema.seats)) {
        console.log("Not All of the seats are available for sale when the program starts");
    } else {
        console.log("All of the seats are available for sale when the program starts");
        while (!cinemaSeats.isAllSeatsAllocated(cinema.seats)) {
            const numOfSeatsRequested = Math.floor(Math.random() * 3) + 1;
            const availableSeats = cinemaSeats.getNumOfSeatsAVailable(cinema.seats);
            if (!cinemaBookingSystem.checkNumberOfRequest(numOfSeatsRequested)) {
                console.log("Number Of Requested seats must be from 1 to 3 ");
                continue;
            } else if (numOfSeatsRequested > availableSeats) {
                console.log(`Number Of seats available is  ${availableSeats} is less than  Number Of seats requested ${numOfSeatsRequested}`);
                continue;
            }
            else {
                cinema = cinemaBookingSystem.RequestSeats(cinema, numOfSeatsRequested);
                console.log(cinema);
            }
        }
    }

};
export default {
    cinnamonCinemaBookingSystem,
};

