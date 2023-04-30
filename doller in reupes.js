let productItems = {
    "Refrigerator": 14.4,
    "WashigMachine": 34.6,
    "Ovan" : 21.56,
    "coller": 25.23,
    "laptop": 67.4
};

let DollerExchangeRate = 80;
let ProductItemsInDollar = {};

for(const [item,price] of Object.entries(productItems)){
    const convertedPrice = Math.floor(price * DollerExchangeRate * 100)/100;
    ProductItemsInDollar[item] = convertedPrice;
}

console.log( ProductItemsInDollar)
