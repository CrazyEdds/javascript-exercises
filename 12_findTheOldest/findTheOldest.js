const findTheOldest = function(people) {
    return people.reduce((total, currentVal) => {
        if (total.yearOfDeath - total.yearOfBirth > currentVal.yearOfDeath - currentVal.yearOfBirth
        || (!total.yearOfDeath && !currentVal.yearOfDeath && total.yearOfBirth < currentVal.yearOfBirth)
        || (!total.yearOfDeath && total.yearOfBirth < currentVal.yearOfBirth)) {
            return total;
        }
        else if (!total.yearOfDeath && !currentVal.yearOfDeath && total.yearOfBirth < currentVal.yearOfBirth) {

        }
        else {
            return total = currentVal;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
