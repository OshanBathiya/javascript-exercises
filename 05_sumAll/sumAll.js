const sumAll = function(integer1, integer2) {
    let sum = 0;
    let start = 0;
    let end = 0;

    if (!Number.isInteger(integer1) || !Number.isInteger(integer2)) {
        return "ERROR";
    }

    // if (Number.isNaN(integer1) || Number.isNaN(integer2)) {
    //     return "ERROR";
    // }

    if (integer1 < 0 || integer2 < 0) {
        return "ERROR";
    }


    if (integer1 < integer2) {
        start = integer1;
        end = integer2;
    } else {
        start = integer2;
        end = integer1;
    }

    for(let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
