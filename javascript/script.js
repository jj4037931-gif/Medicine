// // console.log("js is called javascript (es-6 ecma script 6 is the current verison of js ");

// // alert("hello jssssss");
// // prompt("enter your name....");
// // confirm("are you sure?");
// // console.error("hello err");
// // console.warn("hello warn");

// //variables in js
// // firstName = "abc";
// // lastName = "xyz";

// //dynamically types language
// // firstname$ = "pqr";

// // console.log(firstname$, lastName);

// //variables rules
// //1. "a" and "A" => are diffrent
// //2. letters , numbers , _ , $ => back side
// //3. letters, _ , $ => front side
// //4. reserve keyword are not used

// //var => functional scope , global scope,

// // var age = 23;
// // var age = 33;
// // var age = 55;

// // console.log(age);

// // let  block scoped,
// // let ag = 33;
// // let af = 66;
// // ag = 123;

// // console.log(ag, af);
// // const => block scoped
// // const ab = "ght";
// // const ba = "uty";
// // console.log(ab, ba);

// //data types
// //1. primitive data types => number , string , boolean , null, undefined , bigint , symbol
// //2. non-primitive data types =>object , array, functions

// //1.primitive data types
// // let num = 23; //number
// // let str = "abcd"; //string
// // let isPrsent = true; //boolean => true / false
// // let n = null; // null => null means empty value but known.
// // let u = undefined; //undefined => undefined means value not assigned

// // let bs = BigInt(1233); //bigint
// // let s = Symbol("hello"); //symbol

// // console.log(typeof num, num);
// // console.log(typeof str, str);
// // console.log(typeof isPrsent, isPrsent);
// // console.log(typeof n , n);
// // console.log(typeof u, u);
// // console.log(typeof bs, bs);
// // console.log(typeof s, s);

// //object => key : value pair
// // let user = {
// //     name: "man",
// //     age: 24,
// //     city: "baroda"
// // }

// // user.name = "abhir";
// // user["age"] = user["age"] + 1;

// // console.log(user);

// //operators
// //1. arithmetic operator
// // let a = 10;
// // let b = 2;
// // console.log(a+b); //addition
// // console.log(a-b); //subtraction
// // console.log(a * b); //multiplication
// // console.log(a/b); //division

// // console.log(a ** b); //expontiation
// // console.log(a % b); // modules

// //2. unary operators (pree, post)
// // console.log(++a);// pre increment
// // console.log(a++); 10 + 1 //post increment
// // console.log(a);

// // console.log(--b); //pre decrement
// // console.log(b--); // post decrement
// // console.log(b);

// // 3. assignment opearator
// // let p = 2;
// // p += 3;
// // console.log(p);
// // p-=4;
// // console.log(p);
// // p*=5;
// // console.log(p);
// // p /= 10;
// // console.log(p);
// // p**=10;
// // console.log(p);
// // p%=20;
// // console.log(p);

// //4.comparrision operator
// // let x = 10;
// // let y = 30;

// // console.log(x > y); //10 > 20
// // console.log(x >= y); // 10 >= 20
// // console.log(x < y); //10< 20
// // console.log(x <= y); //10 <= 20

// // console.log(10 == "10"); //value
// // console.log(10 === "10"); // strict type and value

// // console.log(x != y);
// // console.log(x !== y);

// //5. logical operator
// // && => and
// // T T => T
// // T F => F
// //F T => F
// //F F => F

// // || => or
// // F F => F
// //F T => T
// //T F => T
// //T T => T

// // ! => not
// //t => false
// //f => true

// // let d = 2;
// // let c = 4;
// // console.log(d < c && d === c);// t f => f
// // console.log(d < c || d === c);// t f => t
// // console.log(!(d === c));

// //6. ternery operators
// // () ? t : f;

// // let ages = 18;
// // console.log(ages >= 18 ? "adult" : "child");

// // switch case
// // let day = 3;
// // switch (day) {
// //     case 1:
// //         console.log("monday");
// //         break;
// //     case 2:
// //         console.log("tueday");
// //         break;
// //     case 3:
// //         console.log("wednesday");
// //         break;
// //     case 4:
// //         console.log("thursday");
// //         break;
// //     case 5:
// //         console.log("friday");
// //         break;
// //     case 6:
// //         console.log("saturday");
// //         break;
// //     case 7:
// //         console.log("sunday");
// //         break;
// //     default:
// //         console.log("Invalid Day")
// // }

// //string and string methods
// //string => ""
// // immutable => dont change values
// //0 index

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

// //template lireals in js => `${}`
// let fn = "ram";
// let agess = 25;
// console.log(`hello my name is ${fn} and my age is ${agess}`);

// //conditional statemenets
// //=> if
// // let mode = "rain";

// // if(mode === "sun"){
// //     color = "yellow"
// // }
// // if(mode === "rain"){
// //     color = "gray"
// // }
// // if(mode === "moon"){
// //     color ="white"
// // }

// // console.log(color);

// //if-else
// // let numb = 21;
// // if(numb % 2 === 0) {
// //     console.log("even");
// // }else{
// //     console.log("odd");
// // }

// //else - if
// // let mode1 = "rainsscsc";

// // if (mode1 === "sun") {
// //   color = "yellow";
// // } else if (mode1 === "rain") {
// //   color = "gray";
// // } else if (mode1 === "moon") {
// //   color = "white";
// // } else {
// //   color = "blue";
// // }

// // console.log(color);

// // //nested if else
// // let nn = 22;
// // if (nn > 0) {
// //   console.log("Positive");

// //   if (nn % 2 === 0) {
// //     console.log("even");
// //   } else {
// //     console.log("odd");
// //   }
// // } else {
// //   console.log("negative");
// // }

// // array and arry methods
// //array => []  => 0 index => mutuable => changes value
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[3]); //value

// //array methods
// // console.log(arr.indexOf(4)); //index
// // console.log(arr.includes(2)); // check kRE value ander che ke nahi true/false

// // arr.push(100); //  back side value add
// // arr.pop(); // back side remove value
// // console.log(arr);

// // arr.unshift(123); //front side add
// // arr.shift(); //front side remove value
// // console.log(arr);

// let ar = [1, 3, 7, 4, 2];
// // console.log(ar.sort()); // line by line
// // console.log(ar.concat(45)); //merge
// // console.log(ar.reverse());
// console.log(ar.slice(1, 3)); // start end
// console.log(ar.toString());

// let aa = [1, 6, 9, 7];
// aa.splice(1, 0, 5, 78); //start delte add
// console.log(aa);

// //loops
// //1. for loop => entry control loop
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
//   name: "xyz",
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

