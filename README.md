# Cinnamon-Cinemas-Movie-Theatre-Seating-Challenge

Instructions on how to use the app 
"Getting Started: 
git https://github.com/MarwaMohammedHanafy/Cinnamon-Cinemas-Movie-Theatre-Seating-Challenge.git
cd cinnamon-cinemas-movie-theatre-seating-challenge 
To install dependencies: npm install 
To Run the tests: npm test

I use TDD approach. 
1.  Check if all of the seats are avaliable for sale.
    * check if return true if all seats available
    * check if return false if one seat is not available
    * Check if create cinema correctly
2. Check if all of the seats are Allocates
    * check if return true if all seats Allocated
    * check if return false if there is  seat Available
3. Check if number of seats requestes from 1 to 3
    * check if return true if number of seats requestes = 3
    * check if return false if number of seats requestes = 0
    * check if return false if number of seats requestes = 4
4. Assume theatre is empty scenario
    * check if number of seats requested is = 1, I will be allocated the first seat A1.
    * check if number of seats requested is = 2, I will be allocated the 2 seats A1,A2.
5. Assume seats A1,A2,A3,A4 have already been filled scenario
    * check if the number of seats requested is = 2, I will be allocated seats  A5,B1
6. Assume seats from A1 to B3 have already been filled scenario
    * check if the number of seats requested is = 3, I will be allocated seats B4,B5,C1

I divide the system into 3 component cinemaSeats , cinemaBookingSystem , cinnamonCinemaBookingSystem which is consider the start point (main of the system). Also, I divide the test scenario. I use unit test for each component.

Components: -
cinemaSeats Component’s public function: 
* isSeatsAVailable
* isAllSeatsAllocated
cinemaBookingSystem Component’s public function: 
* checkNumberOfRequest
* RequestSeats