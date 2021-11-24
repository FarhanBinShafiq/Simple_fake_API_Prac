//JavaScript Object
/*const user = { id: 11, name: 'Farhan', job: 'actor' };

const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);*/



const shop = {
    name: 'Daraz',
    Road: 'Banani-11,Dhaka,Bangladesh',
    profit: 15000,
    owner: {
        Name: 'Farhan',
        profession: "student"
    },
    products: ['Laptop', 'TV', 'Mobile'],
    isExpensive: false
}

const shopStringified = JSON.stringify(shop);
//console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.owner);