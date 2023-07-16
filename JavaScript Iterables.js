
//  JavaScript Iterables

const myArray = [1, 2, 3, 4];
for (let x of myArray){
    console.log(x);
}
console.dir(myArray); // we can itarate this array element because   Symbol(Symbol.iterator)   store this array prototype.

const ita = myArray[Symbol.iterator]();
console.dir(ita.next());
console.dir(ita.next());
console.dir(ita.next());
console.dir(ita.next());
console.dir(ita.next());

const myObj = {
    one : 1,
    tow : 2,
    three : 3,
    four : 4
}
console.dir(myObj);     // but object prototype can't store Symbol(Symbol.iterator) because there haven't order, object have property name and value

// for (let y of myObj){
//     console.log(y);  //Uncaught TypeError: myObj is not iterable
// }


// The Symbol.iterator is a function that returns a next() function.
// object is not iterable but we can iterate it add [Symbol.iterator]()
myObj[Symbol.iterator] = function() {
    let keys = Object.keys(myObj);
    let index = 0;
    return{
        next(){
            if (index < keys.length){
                return {value : myObj[keys[index++]], done : false};
            } else{
                return {done : true};
            }
        }
    }
}
let num = "";
for (let m of myObj){
    num += m + " ";
}
console.log(num);