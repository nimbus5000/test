'use strict';

// let numberOne = 1 ;
// let numberTwo = 4 ;

// alert (numberOne + numberTwo) ; // 5
// alert ( ` Решение (1+4) = ${numberOne + numberTwo} ` ) ;
// alert ( "2" / "2") ; // 1
// alert (typeof numberOne) ; // number
// let x = 1 ;
// x = (3 * x) ;
// alert (+true) ; // преобразование унарный + в число
// alert(typeof x) ;
// numberTwo += 2+2 ;
// alert (numberTwo) ;
// let newNum = 4 ;
// newNum *= 4+11 ;
// alert (newNum) ; 
// alert ( 'f' > 'g' ) ;
// alert ('1' == '1') ;
// alert ( 'T' > "T" ) ;

// let workPlace = prompt( 'Ваше место работы?', 'QATestLab' );
//     alert(`ты работаешь в ${workPlace}!`); // Тебе 100 лет!
//         console.log ('Console message!')

// let approve = confirm ( 'Подтвердите свое место работы' )
//     if (true) {
//         console.log( 'Место работы подтверждено!' )
//     }

//   function consolePrinter() {
//       for (valer i = 0 ; i < 5 ; i++ ) {
//           console.log(i);
//      }
//   }
//   this.consolePrinter();


//  var usernane = prompt("Как тебя зовут?")
// console.log (usernane)

// let age = prompt ("введи свой возраст") ;
// if (age >=21) {
//         alert('Lets play Counter Strike')
//    } else {
//          alert ("Sorry, you're too young")
// } ;



//  let age = prompt("ваш возраст?", 18);

//  let message =(age<3) ? 'hello baby':
//       (age<18) ? 'hello 18-':
//       (age<100) ? 'hello guy':
//       'сколько же тебе лет?';
// alert(message)

// let jsName = prompt('Какое официальное название Javascript?', "Введи название") ;
// if (jsName == "ECMAScript") {
//     alert("Правильно!")
// } else {
//     alert("Не знаете? ECMAScript!")
// }
// let one = 0
// let two = 1
// alert(one || false || "petia");


// let birth = 2 
// switch(birth) {
// case 1: 
//   alert("So early!");
//   break;

//   case 2:
//     alert("Not 2");
//     break;

//     case 3:
//       alert("Not 3. Try next!");
//       break;

//       case 4:
//         alert("You're right!");
//         break;

//         default:
//           alert("May be");
//           break;
// }

// for (let age=18; age!==10; age--) {
// console.log(age+" age");
// }

//  let x = prompt("Введи число", 10);
//  let y = prompt("Введи число", 10);
//  let z = prompt("1 слаживает, 2 вычитает, 3 умножает, 4 делить");

//  let result;

// switch(z) {
//    case "1": result = +x + +y;
//    break;

//    case "2": result = x - y;
//    break;

//    case "3": result = x * y;
//    break;

//    case "4": result = x / y;
//    break;
// }
//  alert(result);

//  for (let i = 0; i < 10; i++) {
//    if (i % 2 == 0) continue;
//    console.log("Result = "+ i);
//   }

// alertInput: for (let i = 0; i < 3; i++) {

//   for (let o = 0; o < 3; o++) {

//     let input = prompt (`Значение на координатах (${i},${o})`, '');
//     if (!input) break alertInput;
//     }

//   } alert('Done!');


// for (let i = 0; i < 3; i++) {

//   for (let j = 0; j < 3; j++) {

//     let input = prompt(`Значение на координатах (${i},${j})`, '');

//     // Что если мы захотим перейти к Готово (ниже) прямо отсюда?

//   }
// }

// alert('Готово!');

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }


// //--------------------------------------
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// let i = 0;
// //--------------------------------------
// do {
//   alert (i);
//   i++
// } while (i < 3)
// //--------------------------------------
// let i = 0
// while (i < 3) {
//   alert(i);
//   i++
// } 
// //--------------------------------------

// let browser = prompt("Enter");

// if (browser == 'Edge') {

//     alert("You've got the Edge!");

// } else if (browser == 'Chrome'
// || browser == 'Firefox'
// || browser == 'Safari'
// || browser == 'Opera') {

//     alert('Okay we support these browsers too');

// } else {

//     alert('We hope that this page looks ok!')
// }


// let number = prompt('Введите число между 0 и 3', '');

// switch (number) {
//     case '0':
//        alert('Вы ввели число 0');
//         break;
//     case '1':
//         alert('Вы ввели число 1');
//         break;
//    case '2':
//     case '3':
//         alert('Вы ввели число 2, а может и 3');
//         break;
// } 





// let userName = 'Вася';

// function showMessage() {
//   userName = "Петя"; 

//   let message = 'Привет, ' + userName;
//   alert(message);
// }

// alert( userName ); 

// showMessage();

// alert( userName ); 

// function esp(from, text) {
//     alert(from + ': ' + text);
// }

// esp('Petro', 'Hello everybody');



// consolePrinter();


// function consolePrinter() {
//     console.log("My log - 1");
//     Switcher();
// }


// function Switcher() {
//     const all = prompt("Your number", "1")
//     switch (all) {
//         case "1":
//             console.log("Number 1");
//             alert('User entered "1"');
//             break;

//         case "2":
//             console.log("Number 2");
//             alert('User entered "2"');
//             break;

//         case "3":
//             console.log("Number 3");
//             alert('User entered "3"');
//             break;

//         default:
//             console.log("User didn't enter nothing");
//         alert(`You can't enter the number "${all}"`);
//             break;

//         }
//     }

let persone = {
    name: "Dmitry",
    age: 24,
    isMaried: false,
};

alert(persone.name);

let creatMassive = ['Привет мой свет!', 'Second', 'Third'];

console.log(creatMassive[0]);