//recap on object from yesterday
//
//i object creation
// const books = {
//     author: 'Peter',
//     pageSize: 200,
//     genre: 'fiction',
//     price: '15€'
// }
//console.log(books);//{ author: 'Peter', pageSize: 200, genre: 'fiction', price: '15€' }
//
//ES6,    class-based object ...
    //i object creation
class books {
    constructor(author, pageSize, genre, price, year){//parameter
        this.author = author;
        this.pageSize = pageSize;
        this.genre = genre;
        this.price = price;
        this.year = year
    }
    //iii method creation, to be showen only on bookTwo object ...
    calculateYear(){
        let booksAge = new Date().getFullYear() - this.year;
        console.log(this.author + "'s" + ' book is ' + booksAge + ' years old');
    }
}
//
console.log(books);//no output
    //ii instantiation 
    let bookOne = new books('Dauda', 500, 'criminal', '20€', 2015);
    console.log(bookOne);//books { author: 'Dauda', pageSize: 500, genre: 'criminal', price: '20€' year: 2018}
//
    let bookTwo = new books('Ahmed', 300, 'fiction', '15€', 2020);
    //iv call/get a methode
    console.log(bookTwo.calculateYear());//Dauda's book is 8 years old


console.log(books.price);//15€
let newPrice = books.price = '18€';
console.log(books);//{ author: 'Peter', pageSize: 200, genre: 'fiction', price: '18€' }
//with numbers
//copying-referencing (strings, numbers, booleans = primitive)
let number = 10;
let newNumber = number;
newNumber = 20;

console.log(number);//10
console.log(newNumber);//20
//with strings 
let greeting = 'Bonjour';
let newGreeting = greeting;
newGreeting = 'Guten Tag';
 
console.log(greeting);//Bonjour
console.log(newGreeting);//Guten Tag
//
//copying-referencying (object)
//key - value pairing (property) ...
let person = {
    name: 'Nicole',
    age: 30,
    profession: 'Artist'
}
let newPerson = person;
newPerson.name = 'Malik';

console.log(newPerson);//{ name: 'Malik', age: 30, profession: 'Artist' }
console.log(person);//{ name: 'Malik', age: 30, profession: 'Artist' }
//
//
//clone,  

let personalInfo = {
    name: 'Daniel',
    age: 30,
    prfession: 'Athlet',
    address: {
        street: 'street123',
        city: 'New_York',
        postalCode: 12543,
        country: 'USA'
    }
};
let newPersonInformation = Object.assign({}, personalInfo);//shallow cloning ... Daniel is still Daniel on personalInfo object
//let newPersonInformation = JSON.parse(JSON.stringify(personalInfo));//deep-cloning... Daniel is Harlold on personalInfo object ...


newPersonInformation.name = 'Harold';
newPersonInformation.address.city = 'California';
newPersonInformation.address.country = 'California';

console.log(personalInfo);//keep the original object, nothing changes
console.log(newPersonInformation);
//
//
//Today's class: merge in object
    //a, simple merge
    let obj1 = { name: 'Hussein', age: 40 }
    let obj2 = { name: 'Barbara', age: 45 }
    // let obj3 = { name: 'Hussein', age: 45}
    //  const mergedObjects = {obj1, obj2, obj3}
    //  console.log(mergedObjects);
     //b, spread-operator merge ...
     const obje1 = { name: 'Hussein', age: 40 }
     const obje2 = { name: 'Barbara', age: 45 }
     const obje3 = { profession: 'Lawyer', residence: 'Berlin' }
     const mergedObj1 = { ...obje1, ...obje2}
    const mergedObj2 = { ...obje1, ...obje2, ...obje3 }
    //console.log(mergedObj1)//{ name: 'Barbara', age: 45 }
    //console.log(mergedObj2)//{ name: 'Hussein', age: 40, name3: 'Max', age3: 45 }
    //
    //c, object-assign method ...
    const objec1 = { name: 'Hussein', age: 40 }
    const objec2 = { name: 'Barbara', age: 45 }
    const objec3 = { profession: 'Lawyer', residence: 'Berlin'}
    const mergedObje = Object.assign({}, objec1, objec2, objec3);
    //console.log(mergedObje);//{ name: 'Barbara', age: 45, profession: 'Lawyer', residence: 'Berlin' }

//destructuring and nested-destructuring (object, array)...
//I
//a simple distructuring on objects
const car1 = {
    name: 'Fiat',
    year: 2010,
    price: '12,000€'
}
//console.log(car1);//{ name: 'Fiat', year: 2010, price: '12,000€' }
    //berfore destructuring
// let myName = car1.name;
// let myYear = car1.year;
// let myPrice = car1.price;
// console.log(myName);//Fiat
// console.log(myYear);//2010
// console.log(myPrice);//12,000€
    //with destructuring
    //let = {name, year, price} = car1;
    //changing variable names
    let = {name, year: myYear, price} = car1;
    //console.log(name, myYear, price);//Fiat 2010 12,000€

//b nested-object distructuring
const car2 = {
    name: 'Fiat',
    year: 2010,
    price: '12,000€',
    models: {
        first: 'Fiat 124',
        second: 'Fiat 127'
    }// nested object
}
    //before destructuring
    //console.log(car2.models.first);//Fiat 124
    //destructuring
    let = {name, year, price, models, models:{first, second}} = car2;
    //console.log(car2);//
    //console.log(name);//Fiat
 //   console.log(models.first);//Fiat 124
 //
 //II
 //destructuring on arrays
 //a simple array-destructuring
 const movies = ['The reader', 'Mad man', 'Aviator', 'Italian job', 'Training day'];
    //before destructuring 
// let firstMovie = movies[0];
// let secondMovie = movies[1];
// let thirdMovie = movies[2];
// let fourthMovie = movies[3];
// let fivthMovie = movies[4];
// console.log(firstMovie);
// console.log(secondMovie);
// console.log(thirdMovie);
// console.log(fourthMovie);
// console.log(fivthMovie);
    //destructuring
    let = [one, two, three, four, five] = movies;
    console.log(three);//Aviator
    //
//b nested array-destructuring
const nestedArray = [
    ['nested1', 'nested2', 'nested3'], 
    [4, 5, 'nested6'], 
    [true, 8, 'nested9']
];
    //console.log(nestedArray);
//before destructuring
    //console.log(nestedArray[1]);//[ 4, 5, 'nested6' ]
    //console.log(nestedArray[2][0]);//true ...
//destructuring
    let = [
        [one, two, three], 
        [four, five, six], 
        [seven, eight, nine]
    ] = nestedArray;
    console.log(two);//Aviator
    console.log(seven);//true

    //convert to string ...
    let array = ['one', 'two', 'three']
    console.log(array.toString())//one,two,three