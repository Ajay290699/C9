const products = [
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 400
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 450
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 300
    },
    {
        productName: 'Gucci Round Bucklet Belt',
        price: 420
    },
    {
        productName: 'Smiley T-Shirt',
        price: 350
    },
    {
        productName: 'Smiley T-Shirt',
        price: 150
    },
    {
        productName: 'Shinie Nail Paint',
        price: 100
    },
    {
        productName: 'Shinie Nail Paint',
        price: 250
    },
    {
        productName: 'Esbeda Wallet',
        price: 250
    }
];

//Find the stock of each non-premium products using function chaining
//Write code here
let count = 0;
let non_premium = products.filter(item => item.price < 300)
console.log(non_premium)

let stockGucci = non_premium.filter(item => item.productName == 'Gucci Round Bucklet Belt').reduce((acc, item) =>{
    return ++count},count)
    console.log("Gucci Round Bucklet Belt "+count)
    
count = 0;
let stockSmiley = non_premium.filter(item => item.productName == 'Smiley T-Shirt').reduce((acc, item) =>{
    return ++count},count)
    console.log("Smiley T-Shirt "+count)

    count =0;
let stockShinie = non_premium.filter(item => item.productName == 'Shinie Nail Paint').reduce((acc, item) =>{
    return ++count},count)
    console.log("Shinie Nail Paint "+count)

count = 0;
let stockEsbeda = non_premium.filter(item => item.productName == 'Esbeda Wallet').reduce((acc, item) =>{
    return ++count},count)
    console.log("Esbeda Wallet "+count)