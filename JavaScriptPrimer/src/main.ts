let products = [
  { name: "Hat", price: 24.5, stock: 10 },
  { name: "Kayak", price: 289.99, stock: 1 },
  { name: "Soccer Ball", price: 10, stock: 0 },
  { name: "Running Shoes", price: 116.50, stock: 20 }
];

let totalValue = products
  .filter(item => item.stock > 0)
  .reduce((prev, item) => prev + (item.price * item.stock), 0);

console.log("Ttl vl: ");    
console.log("Total value: $" + totalValue.toFixed(2));    





let myFunc = function(name) {
    let myLocalVar = "sunny";
    let innerFunction = function () {
        return ("Hello " + name + ". Today is " + myLocalVar + ".");
    }
    return innerFunction();
};
console.log(myFunc("Adam"));





let messageFunction = function (name, weather) {
    var message = "Hello, Adam";
    if (weather == "sunny") {
        var message = "It is a nice day";
        console.log(message);
    } else {
        var message = "It is " + weather + " today";
        console.log(message);
    }
    console.log(message);
}
messageFunction("Adam", "raining");



let messageFunction = function (name, weather) {
    let message = "Hello, Adam";
    if (weather == "sunny") {
        let message = "It is a nice day";
        console.log(message);
    } else {
        let message = "It is " + weather + " today";
        console.log(message);
    }
    console.log(message);
}
messageFunction("Adam", "raining");






let myFunc = (nameFunction) => ("Hello " + nameFunction() + ".");
let printName = (nameFunction, printFunction) => printFunction(myFunc(nameFunction));
printName(function () { return "Adam" }, console.log);



let myFunc = function (nameFunction) {
    return ("Hello " + nameFunction() + ".");
};
let printName = function (nameFunction, printFunction) {
    printFunction(myFunc(nameFunction));
}
printName(function () { return "Adam" }, console.log);



let myFunc = function (nameFunction) {
    return ("Hello " + nameFunction() + ".");
};
console.log(myFunc(function () {
    return "Adam";
}));


let myFunc = function (name, weather, ...extraArgs) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
    for (let i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
};
myFunc("Adam", "sunny", "one", "two", "three");



let myFunc = function(name, weather) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today");
};
myFunc("Adam", "sunny");



let myFunc = function () {
    console.log("This is a statement");
};
myFunc();

