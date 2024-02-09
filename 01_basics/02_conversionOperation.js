let isLoggedIn = ""
let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let score = "33"

let valueInNumber = Number(score)
console.log(typeof score)
console.log(typeof (valueInNumber))

//"33" => 33
//"33abc"=> Nan
//true => 1,false => 0

//1=> true, string => true. 
// "" => false, 0 => false.

//--------------------------------------------------------------------
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(a, b);
// Expected output: "a:4, b:4"
