 //  Використовуючи if...else напиши код, який буде запитувати у користувача "Яка офіційна назва JavaScript?".
//    Якщо користувач вводить "ECMAScript", то показати за допомогою alert("Вірно!")
//    У інших випадках показати "Не знаєте? ECMAScript!"
//  let answer = prompt("Яка офіційна назва JavaScript?").toLowerCase()
// if (answer === "ECMAScript".toLowerCase()){
//     alert("Вірно!")
// } else {
//     alert("Не знаєте? ECMAScript!")
// }


//  Напишіть програму, яка отримає від користувача число(кількість хвилин)
// і виведе у консоль рядок у форматі годин та хвилин
// 70 === 01: 10
// 
// const randomNumber = 90;
// let hours = String(Math.floor(randomNumber / 60 )).padStart(2, "0");
// let minutes = String(randomNumber % 60).padStart(2, "0");
// const time = `${hours}:${minutes}`
// console.log(time);

//  Напишіть цикл, який виводить у консоль числа від max до min у порядку зменшення.
// У консоль виведіть усі парні числа від max  до min

// const max = 50;
// const min = 23;
// for (let i = max; i >= min; i--){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// За допомогою цикла for додайте всі парні числа від min до max

// const max = 50;
// const min = 0;
// let sum = 0;
// for( let i= min; i<= max ; i++){
//     if(i%2===0){
//         sum += i;
//     }
// }
// console.log(sum)

// При завантаженні сторінки користувачу пропонується у prompt ввести число.
//     Те, що вводить користувач, додається до значення змінної total.
// Операція вводу числа триває до тих пір, поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив вводити числа і натиснув на кнопку Cancel,
//     показувати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку, що користувач ввів саме число, а не довільні символи, не потрібно.
 
// let total = 0;

// while(true){
// let answer = promt("Введіть число");
// if(answer !== null){
//     total += Number(answer);
// } else {
//     alert(`Загальна сума введиних чисел дорівнює ${total}`);
//     break;
// }

// }

//Напиши код, який буде запитувати логін за допомогою prompt та логувати результат у консоль браузера.
// Якщо користувач вводить "Адмін", то prompt запитує пароль.Якщо нічого не введено або натиснута клавіша Esc,
//     вивести рядок "Відмінено"
//     У іншому випадку вивести рядок "Я вас не знаю!"

// Пароль перевіряти так:
// якщо введено пароль "Я головний", то вивести "Вітаю!",
//     у іншому випадку виводити рядок "Невірний пароль!".

// const login = promt("Введіть логін");
// if( login === "Адмін"){
//     const password = prompt("Введіть пароль");
//     if(password == "Я головний"){
//         console.log("Вітаю!");
//     } else {
//         console.log("Невірний пароль!")
//     }
// } else if(!login){
//     console.log("Відмінено");
// } else {
//     console.log("Я вас не знаю!")
// }

//  Напиши цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
//   або не натисне кнопку "Відміна"

// let number;
// do{number = prompt("Введіть число > 100")}
// while(number < 100 && number !== null);
// console.log(Number(null));

//Дано рядок, який складається із символів.Наприклад, 'abcde'.
//     Перевірте, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ns"

// const string = 'abcde'
// const string2 = 'bcde'
// function check(str){
//     if(str.startsWith("a")){
//         return `так`
//     }  
//         return `ні`
//     }
// console.log(check(string))
// console.log(check(string2))



// const string = 'abcde'
// const string2 = 'bcde'
// function check(str){
//     if(str.indexOf("a") === 0){
//         return `так`
//     }  
//         return `ні`
//     }
// console.log(check(string))
// console.log(check(string2))

// У змінній  min лежить число від 0 до 59.
// Потрібно визначити, в яку чтверть години потрапить це число(в першу, другу, третю або четверту)

// const min = 35;
// let quarthour = 60/4;
// let message= "Немає данних"
// switch(min){
//     case 35:
//         message = "перша частина";
//         break;
//        case min >= quarthour:
//             message = "Друга частина";
//             break;  
//             case min <= quarthour + quarthour:
//                 message = "Друга частина";
//                 break; 
          
// }

    //   console.log(message) 
    //   const min = 10;
    //   switch (true) {
    //       case min >= 0 && min <= 14:
    //           console.log('перша чверть');
    //           break;
    //       case min >= 15 && min <= 29:
    //           console.log('друга чверть');
    //           break;
    //       case min >= 30 && min <= 44:
    //           console.log('третя чверть');
    //           break;
    //       case min >= 45 && min <= 59:
    //           console.log('четверта чверть');
    //           break;
    //       default:
    //           console.log('Невірне значення хвилин');
    //           break;
    //   }
    //   Перепишіть код нижче використовуючи одну конструкцію switch:

      let a = +prompt('a?', '');
      
      // if (a == 0) {
      //   alert( 0 );
      // }
      // if (a == 1) {
      //   alert( 1 );
      // }
      
      // if (a == 2 || a == 3) {
      //   alert( '2,3' );
      // }

// switch(a){
//     case 0:
//         alert(0);
//         break;
//     case 1:
//       alert(1);
//       break;
//     case 2:
//     case 3:
//       alert("2,3");
//     break;
//     default: 
//     alert("Невходить у діапазон")
// }