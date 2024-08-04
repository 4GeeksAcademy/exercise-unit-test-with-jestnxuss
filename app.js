
const oneEuroIs = {
    "JPY": 156.5, // Japanese yen
    "USD": 1.07,  // US dollar
    "GBP": 0.87   // British pound
};


function fromEuroToDollar(euros) {
    return euros * oneEuroIs.USD;
}


module.exports = { fromEuroToDollar };
