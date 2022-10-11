exports.jumpingYears = (year, n) => {
    // create an array to store all the leap years between 0 and 9999
    let leapYears = [];
    // loop through all the years between 0 and 9999
    for (let i = 0; i <= 9999; i++) {
        if (i % 4 === 0 && i % 100 !== 0 || i % 400 === 0) {
            leapYears.push(i);
        }
    } 

    // if n is 0 or null, return the closest leap year
    if (n === 0 || n === null) {
        return leapYears.find((leapYear) => leapYear > year);
    }

    // if n is greater than 0, return the next n leap years
    if (n > 0) {
        return leapYears.filter((leapYear) => leapYear > year).slice(0, n);
    }
}

