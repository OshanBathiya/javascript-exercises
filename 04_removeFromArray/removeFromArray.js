const removeFromArray = function(array, ...args) {
    args.forEach(arg => {
        for(let i = array.length -1; i >= 0; i--) {
            if (array[i] === arg) {
                array.splice(i, 1);
            }
        }
    });
    
    return array; 
};

// Do not edit below this line
module.exports = removeFromArray;
