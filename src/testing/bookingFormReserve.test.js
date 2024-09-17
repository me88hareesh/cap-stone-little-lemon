
// import { BookingFormReserve } from '../components/little-lemon-pages/BookingFormReserve'

const bookingformReserve = require('../components/little-lemon-pages/BookingFormReserve');

test('adds 1 + 2 to equal 3', () => {
    let timesArray=["17:00","18.00"];
    let today=new Date();
    expect(fetchAPI(today)).toBe(timesArray);
  });