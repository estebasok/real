//app

document.write("<h1>hello word</h1>")

// app 2

// tipos de datos
"Hello World" // string
'Hello World' // string

1000000 // number
-2.3

// boolean
true
false

// array
['joe', 'ryan', 'martha']
[1, 2, 3]
[true, false, true, false]

// object
'ryan'
70.4
14
true

{
    "usarname" : 'ryan',
    "score" : 70.4,
    "hours" : 14,
    "proffesional" : true,
    "friends" : true
}

//app 3

console.log({"username": "ryan","score": 70.4});

// app 4

//estoy creando variables

var nameuser = "john"
let lastname = "carter"

//reasignando el valor de la variable

nameuser = "pepe";

//cualquier cosa

const PI = 3.1415;

console.log(PI)

//camelcase
let userName = "gordon";

// variables
let name = "John";
let lastname = "carter";

let completename = name + ' ' + lastname;

console.log(complemateName);

//funciones

function add(n1, n2) {
    console.log(n1 + n2);
}

add(3, 2);
add(100, 200);
add(5, 2);
add(100, 200);
add(1321231, 13212312);

//condicionales

let typeCard = 'Credit Card';

switch(typeCard) {
    case "Debit Card":
        console.log("This is a debit card");
        break;
    case "Credit Card":
        console.log("This is a credit card");
        break;
    default:
        console.log("No Card");
}

//bucles

let names = [1, 2, 3];

for(let i = names.length -1; i >= 0; i--) {
    console.log(name[i]);
}