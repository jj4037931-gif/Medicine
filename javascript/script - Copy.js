// console.log("js is called javascript (es-6 ecma script 6 is the current verison of js ");

// alert("hello jssssss");
// prompt("enter your name....");
// confirm("are you sure?");
// console.error("hello err");
// console.warn("hello warn");

//variables in js
// firstName = "abc";
// lastName = "xyz";

//dynamically types language
// firstname$ = "pqr";

// console.log(firstname$, lastName);

//variables rules
//1. "a" and "A" => are diffrent
//2. letters , numbers , _ , $ => back side
//3. letters, _ , $ => front side
//4. reserve keyword are not used

//var => functional scope , global scope,

// var age = 23;
// var age = 33;
// var age = 55;

// console.log(age);

// let  block scoped,
// let ag = 33;
// let af = 66;
// ag = 123;

// console.log(ag, af);
// const => block scoped
// const ab = "ght";
// const ba = "uty";
// console.log(ab, ba);

//data types
//1. primitive data types => number , string , boolean , null, undefined , bigint , symbol
//2. non-primitive data types =>object , array, functions

//1.primitive data types
// let num = 23; //number
// let str = "abcd"; //string
// let isPrsent = true; //boolean => true / false
// let n = null; // null => null means empty value but known.
// let u = undefined; //undefined => undefined means value not assigned

// let bs = BigInt(1233); //bigint
// let s = Symbol("hello"); //symbol

// console.log(typeof num, num);
// console.log(typeof str, str);
// console.log(typeof isPrsent, isPrsent);
// console.log(typeof n , n);
// console.log(typeof u, u);
// console.log(typeof bs, bs);
// console.log(typeof s, s);

//object => key : value pair
// let user = {
//     name: "man",
//     age: 24,
//     city: "baroda"
// }

// user.name = "abhir";
// user["age"] = user["age"] + 1;

// console.log(user);

//operators
//1. arithmetic operator
// let a = 10;
// let b = 2;
// console.log(a+b); //addition
// console.log(a-b); //subtraction
// console.log(a * b); //multiplication
// console.log(a/b); //division

// console.log(a ** b); //expontiation
// console.log(a % b); // modules

//2. unary operators (pree, post)
// console.log(++a);// pre increment
// console.log(a++); 10 + 1 //post increment
// console.log(a);

// console.log(--b); //pre decrement
// console.log(b--); // post decrement
// console.log(b);

// 3. assignment opearator
// let p = 2;
// p += 3;
// console.log(p);
// p-=4;
// console.log(p);
// p*=5;
// console.log(p);
// p /= 10;
// console.log(p);
// p**=10;
// console.log(p);
// p%=20;
// console.log(p);

//4.comparrision operator
// let x = 10;
// let y = 30;

// console.log(x > y); //10 > 20
// console.log(x >= y); // 10 >= 20
// console.log(x < y); //10< 20
// console.log(x <= y); //10 <= 20

// console.log(10 == "10"); //value
// console.log(10 === "10"); // strict type and value

// console.log(x != y);
// console.log(x !== y);

//5. logical operator
// && => and
// T T => T
// T F => F
//F T => F
//F F => F

// || => or
// F F => F
//F T => T
//T F => T
//T T => T

// ! => not
//t => false
//f => true

// let d = 2;
// let c = 4;
// console.log(d < c && d === c);// t f => f
// console.log(d < c || d === c);// t f => t
// console.log(!(d === c));

//6. ternery operators
// () ? t : f;

// let ages = 18;
// console.log(ages >= 18 ? "adult" : "child");

// switch case
// let day = 3;
// switch (day) {
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tueday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("Invalid Day")
// }

//string and string methods
//string => ""
// immutable => dont change values
//0 index

// let strr = "Hello World";
// console.log(strr);
// console.log(strr.length);
// console.log(strr[6]);

// //string methods
// console.log(strr.toUpperCase());
// console.log(strr.toLowerCase());
// console.log(strr.trim()); //agad pachd extra space remove kre

// console.log(strr.charAt(9));
// console.log(strr.replace("World", "Js"));
// console.log(strr.slice(1, 4)); // start ,end
// console.log(strr.concat(123)); // merge
// console.log(strr.split("  "));

//template lireals in js => `${}`
// let fn = "ram";
// let agess = 25;
// console.log(`hello my name is ${fn} and my age is ${agess}`);

//conditional statemenets
//=> if
// let mode = "rain";

// if(mode === "sun"){
//     color = "yellow"
// }
// if(mode === "rain"){
//     color = "gray"
// }
// if(mode === "moon"){
//     color ="white"
// }

// console.log(color);

//if-else
// let numb = 21;
// if(numb % 2 === 0) {
//     console.log("even");
// }else{
//     console.log("odd");
// }

//else - if
// let mode1 = "rainsscsc";

// if (mode1 === "sun") {
//   color = "yellow";
// } else if (mode1 === "rain") {
//   color = "gray";
// } else if (mode1 === "moon") {
//   color = "white";
// } else {
//   color = "blue";
// }

// console.log(color);

// //nested if else
// let nn = 22;
// if (nn > 0) {
//   console.log("Positive");

//   if (nn % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// } else {
//   console.log("negative");
// }

// array and arry methods
//array => []  => 0 index => mutuable => changes value
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[3]); //value

//array methods
// console.log(arr.indexOf(4)); //index
// console.log(arr.includes(2)); // check kRE value ander che ke nahi true/false

// arr.push(100); //  back side value add
// arr.pop(); // back side remove value
// console.log(arr);

// arr.unshift(123); //front side add
// arr.shift(); //front side remove value
// console.log(arr);

// let ar = [1, 3, 7, 4, 2];
// // console.log(ar.sort()); // line by line
// // console.log(ar.concat(45)); //merge
// // console.log(ar.reverse());
// console.log(ar.slice(1, 3)); // start end
// console.log(ar.toString());

// let aa = [1, 6, 9, 7];
// aa.splice(1, 0, 5, 78); //start delte add
// console.log(aa); ////////

//loops
//1. for loop => entry control loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// //2.while loop =>entry control loop
// let j = 5;
// while (j <= 10) {
//   console.log(j);
//   j++;
// }

// //3. do while loop => exit control loop
// let k = 1;
// do {
//   if (k % 2 == 0) {
//     console.log(k);
//   }
//   k++;
// } while (k <= 20);

// //4. for of loop=> ARRAY
// let aas = [1,2,3,4];
// for(let num of aas){
//   console.log(num);
// }

// //for in loop => object
// let ob ={
//   name: "xyz",  //////
//   age:23
// }
// for(let key in ob){
//   console.log(ob[key]);
// }

// //for each lopp
// let e = [1,2,3];
// e.forEach((num) => {
//   console.log(num * 2);
// })

//type corecion => implicit type and explicit type

// console.log("5" + 5); // 55

// console.log("10" - 5);//5
// console.log("5" * 5 );//25

// //explicit
// console.log(Number("5") + 15);

// //parseint => and  * 1   string => number  ////////
// // let n1 = prompt("enter n1");
// // let n2 = prompt("enter n2");

// // let ans = n1 *1 + n2 *1;
// // console.log(ans);

// //parseint
// let y1 = parseInt("23");
// let y2 = parseInt("53");
// console.log(y1 + y2);

// //isnan => not a number => true/false
// // console.log(isNaN("abc")); //true
// // console.log(isNaN("1239"));//false
// // console.log(isNaN(767)); //false
// // console.log(isNaN(NaN));//true

// //isfinite => number => true
// console.log(isFinite("abc")); //f
// console.log(isFinite("1239"));//t
// console.log(isFinite(767)); //t
// console.log(isFinite(Infinity));//f

// //math objects in js
// console.log(Math.max(1,5,8,9)); // max
// console.log(Math.min(2,4,7,9));//min

// console.log(Math.ceil(4.4)); //5
// console.log(Math.floor(4.4)); //4

// console.log(Math.round(4.5)); //5
// console.log(Math.round(4.4)); //4

// console.log(Math.random()); //0 to 1
console.log(Math.floor(Math.random() * 6 + 1)); // 1 to 6 ////////////////

// console.log(Math.PI); //3.14
// console.log(Math.abs(-45)); // positve

// console.log(Math.pow(2, 3)); //power
// console.log(Math.sqrt(16)); //sqaure

// Functions
function my() {
  console.log("hello jss");
}
my();
my();

//function parameter and arguments
function mya(name) {
  //parameter
  console.log(name);
}
mya("priyank"); //argment
mya("devarth");

//function with return value
function kk() {
  return "helloooo  0000";
}
console.log(kk());

//arrow function => es 6 => latest
const sum = (f, d) => {
  return f + d;
};
console.log(sum(5, 5));

//short syntax
let mul = (h, j) => h * j;
console.log(mul(10, 5));

//anonnymous function
const divide = function (r, t) {
  return r / t;
};
console.log(divide(25, 5));    ////////////

//array adv methods
//map, filter , reduce
//map => all elements per work kari navi value ape
let m = [1, 2, 3, 4, 5];
let ans1 = m.map((num) => num * 2);
console.log(ans1);

//filter => all eleemnts per work kari condition check kari selcted value ape
let f = [2, 7, 3, 9, 6, 4];
let ans2 = f.filter((item) => item % 2 !== 0);
console.log(ans2);

//reduce => all elements per work kari single value ape
let r = [1, 2, 3, 4, 5];
let ans3 = r.reduce((total, n) => total + n, 0);
console.log(ans3);

//some => all eelements per work lre => condiotion checked => t/f
let s1 = [1, 3, 5, 7, 2];
let ans4 = s1.some((n) => n % 2 === 0);
console.log(ans4);

//every => all eleeements per work kare => condiotion checked => badhi condition t/f
let s2 = [2, 4, 6, 8, 9];
let ans5 = s2.every((n) => n % 2 === 0);
console.log(ans5);

//fill method => static value pass thay
let s3 = [1, 2, 3, 4, 7];
s3.fill(0);
console.log(s3);

//find => all elements check => condiotion check => first value
let s4 = [1, 52, 3, 4, 7, 8, 12, 78, 43];
let ans6 = s4.find((n) => n >= 10);
console.log(ans6);

//finindex => index find kare ne ape
let s5 = [1, 52, 3, 4, 7, 8, 12, 78, 43];
let ans7 = s5.findIndex((n) => n >= 10);
console.log(ans7);

//spread operators => ... => function call ma => expand /collect
let x = [1, 2];
let y = [3, 4];
console.log([...x, ...y]);

//rest operator => ... => function parameter ma => //collect
function sm(...numbers) {
  return numbers.reduce((t, n) => t + n, 0);
}

console.log(sm(1, 2, 3, 4, 5));

//de structuring in js => array
//[]
let arrr = [1, 2, 3];
let [j, n, b] = arrr;
console.log(j, n, b);

//object => {}
let oj = { s: 77, k: 88, p: 99 };
let { s, k, p } = oj;
console.log(s, k, p);

//default vLUE IN JS
function nam(name = " admin patel") {
  return `hello ${name}`;
}
console.log(nam());

//optional chaining => ?. => nested object mathi value access karva
let obje = {
  name: "guest",
  address: {
    city: "ahmdavad",
  },
};

console.log(obje.address.city);
console.log(obje.contact?.email);

//nullish cohelsing => ?? null ke undfined value ne default value ape

let us = null;
let pe = us ?? "guest";
console.log(pe);

us = "aryan";
pe = us ?? "guest";
console.log(pe);

//timing methods
//setTimeout => 1 time run kare
//setinterval => conitnue run karse
//cleartimeout , clearinterval => stop kare

// setTimeout(() => {
//   console.log("heloo 1 sec")
// }, 2000);

// let t = setTimeout(() => {
//   console.log("heloo 1 sec")
// }, 2000);
// clearTimeout(t);

// setInterval(() => {
//   console.log("hello 3 sec...")
// }, 3000);

// let tt =setInterval(() => {
//   console.log("hello 3 secccc...")
// }, 3000);
// clearInterval(tt);

//Difference between sync and async in JS
//sync => line by line
console.log("hello jss");
console.log("task 1");
console.log("byy");

//async => pareellel
// console.log("hiii");

// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// console.log("Byy");

// Error handling (try, catch, throw, finally) in JS,
// try{
//   //code
// }catch(err){
//   //code
// }

try {
  console.log("hello");
  console.log(a);
  console.log("byy"); // run not
} catch (error) {
  console.log(error.message);
}

//example => email => @
function submitform(email) {
  try {
    if (!email.includes("@")) {
      throw new Error("invalid email");
    }
    console.log("form submiited sucessfully");
  } catch (err) {
    console.log(err);
  }
}
submitform("abcd");
submitform("abc@gmail.com");

//  callback function
const f1 = (callback) => {
  console.log("f1");
  callback();
};
const f2 = () => {
  console.log("f2");
};

f1(f2);

//  promises(resolve, reject)
let pp = new Promise((resolve, reject) => {
  isInrenet = true;

  if (isInrenet) {
    resolve("yes connected");
  } else {
    reject("not connection");
  }
})
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("all done");
  });

//  async/await, fetch,
//async await -- react ma api call karva mate use thay
// async function getData() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let data = await response.json();
//   console.log(data);
// }

// getData();

//json => javascript object notation => js ko object me convert krta hai

//Fetch – API Fetch → Promise / Async Await → Data

//  DOM/BOM methods, events in JS
//dom => document object model
//1. document.getelementbyid => selcted by id

// let h = document.getElementById("heading");
// h.innerText = "hello jss"; //text
// h.innerHTML = "<i>hello js</i>"; //tag and text

// heading.style.color  ="blue";
// heading.remove();

//2.document.getelementbyclassname => selcted by class
//3. documnet.getelementbytagname => h1 to h6 , p , img

//4. query selector => first element value change
// let p11 = document.querySelector(".text");
// p11.innerText = "changed ";

// //5. queryselctorall => loop => all value element change
// let p22 = document.querySelectorAll(".text");
// p22.forEach((item) => {
//   item.innerText = "updated";
// });

// //6. create elemnet => create kare element
// //7. appendchild => run kre=> add kre

// let p33 = document.createElement("p");
// p33.innerText = "new paragraph";
// document.body.appendChild(p33);

//events
// btn.addEventListener("click", () => {
//   console.log("yes clicked");
// });

// btn.addEventListener("mouseover", () => {
//   console.log("yes clicked");
// });

//bom => browser object model
// window.alert("hello js ");
// window.confirm("are you sure?");
// window.prompt("enter num");

// window.location.href="https://www.google.com"

// //  local storage, session storage, cookie.
// const person = {
//   name: "abhay",
//   age: 25,
//   isLogin: false,
// };

// //localstorage => object => string => localstorage ma value string ma store thay
// //strigify
// localStorage.setItem("person", JSON.stringify(person));
// //object => string => parse => string to object maconvert kare.
// const data = JSON.parse(localStorage.getItem("person"));

// if (data.isLogin) {
//   console.log("yes login");
// } else {
//   console.log("not login");
// }

// //SESSION STORAGE EXAMPLE
// const user = {
//   email: "test@gmail.com",
//   isLogin: true,
// };

// // Save
// sessionStorage.setItem("user", JSON.stringify(user));

// // Get
// const data = JSON.parse(sessionStorage.getItem("user"));

// if (data.isLogin) {
//   console.log("User Login che");
// } else {
//   console.log("User Login nathi");
// }

// Cookies example
// const user = {
//   email: "test@gmail.com",
//   isLogin: true,
// };

// // Object → String
// document.cookie =
//   "user=" + encodeURIComponent(JSON.stringify(user)) + "; path=/";

// // Read Cookie
// const cookie = document.cookie;

// // Get user cookie
// const userCookie = cookie.split("; ").find((item) => item.startsWith("user="));

// // String → Object
// const data = JSON.parse(decodeURIComponent(userCookie.split("=")[1]));

// // Check Login
// if (data.isLogin) {
//   console.log("User Login che");
// } else {
//   console.log("User Login nathi");
// }