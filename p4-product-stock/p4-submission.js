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

//Find the stock of each product type

//Write code here
let count = 0;
let Gucci = products.filter(item => item.productName == 'Gucci Round Bucklet Belt').reduce((count, item) =>{
    return ++count},count)
    console.log('Gucci Round Bucklet Belt '+Gucci)

let Smiley = products.filter(item => item.productName == 'Smiley T-Shirt').reduce((count, item) =>{
    return ++ count},count)
    console.log("Smiley T-Shirt "+Smiley)

let Shinie = products.filter(item => item.productName == 'Shinie Nail Paint').reduce((count, item) =>{
    return ++  count},count)
    console.log("Shinie Nail Paint "+Shinie)

let Esbeda = products.filter(item => item.productName == 'Esbeda Wallet').reduce((count, item) =>{
    return ++ count}, count)
    console.log("Esbeda Wallet "+Esbeda)