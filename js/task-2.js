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

      // let a = +prompt('a?', '');
      
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

// todo Напиши скрипт, який для об'єкта user послідовно:
//   - додасть поле mood зі значенням 'happy'
//   - замінить hobby на 'skydiving'
//   - замінить значення premium на false
//   - виводить вміст об'єкта user у форматі ключ:значення,
// використовуючи Object.keys() і for...of

// const user = {
//   name: 'John',
//   age: 20,
//   hobby: 'tennis',
//   premium: true,
// }

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// for(const keys of Object.keys(user)){
//   console.log(`${keys}:${user[keys]}`)
//   або
//   console.log(keys+":"+user[keys])
// }

// todo У нас є об'єкт, у якому зберігаються заробітні плати команди.
// Напишіть код для отримання суми усіх зарплат і збережіть його результат у змінній sum
// Якщо об'єкт salaries порожній, то результат повинен бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// }

// // let sum = 0;
// // for( const key of Object.keys(salaries)){
// //   sum += salaries[key];
// // }
// або
// for(const value of Object.values(salaries)){
//   sum += value;
// }

// todo Напишіть функцію calcTotalPrice(stones, stonesName), яка приймає масив об'єктів та рядок із назвою каменя.
// Функція рахує і повертає загальну вартість каменів з таким іменем, ціною та кількістю з об'єкта

// const stonesArray = [
//   { name: 'Ізумруд', price: 1300, quantity: 4 },
//   { name: 'Брилліант', price: 2700, quantity: 6 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 150, quantity: 100 },
// ]


// todo Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи і зберігає їх як властивості об'єкта
// sum() повертає суму збережених значень
// mult() помножує збережені значення і повертає результат

// const calculator ={
//   read(a, b){
//     calculator.a=a;
//     calculator.b=b;
//   },
//   sum(){
//     return calculator.a + calculator.b;
//   },
//   mult(){
//     return calculator.a * calculator.b;
//   },
// }
// calculator.read(5, 8)
// console.log(calculator.sum())
// console.log(calculator.mult())

// const calculator2 ={

// }

// calculator2.read2 = calculator.read;
// calculator2.sum2 = calculator.sum;
// calculator2.mult2 = calculator.mult;

// // calculator2.read2(9, 4)
// console.log(calculator2.sum2())
// console.log(calculator2.mult2())


// todo Напишіть функцію updateObject, яка приймає об'єкт і повертає новий об'єкт без вказаних параметрів
// Результат, що очікується ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// function updateObject(obj, ...args){
//   const newObject={};
//   const keys = Object.keys(obj);
 
//     for(const key of keys){
//       if(!args.includes(key)){
//         newObject[key] = obj[key];
//       }
//     }
//     return newObject
// }


// function updateObject(obj, ...args){
//   const newObject={...obj};
 
 
//     for(const key of args){
//       delete newObject[key];
//     }
//     return newObject
// }

// const arrNumber = [5, 4, 3, 2, 1]
// // Напишіть функцію, яка розвертає масив у зворотньому напрямку.Метод reverse() не використовувати
// function reverseArr(array){
//   const newArr=[];
//   for(let i = array.length - 1; i >= 0; i--){
//     newArr.push(array[i]);
//   }
//   return newArr
// }

// Напишіть функцію, яка очистить масив від небажаних значень, таких як false, undefined, порожні рядки, нуль, null
// Результат, що очікується[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
// function cleanArray(arr){
//   const result = [];
//   for(const item of arr){
//     if(item){
//       result.push(item);
//     }
//   }
//   return result
// }

// console.log(cleanArray(0, 1, false, 2, undefined, '', 3, null));

// Напишіть функцію, що прибирає значення, які повторюються
// Очікується[1, 2, 3, 1, 2] => [1, 2, 3]

// function dell(arr){
//   const newArr=[];
//   for( let i of arr){
//     if(!newArr.includes(i)){
//       newArr.push(i);
//     }
//   }
//   return newArr
// }

// console.log(dell([1, 2, 3, 1, 2]));

// Напишіть функцію, яка повертає об"єкт, який складається зі значень вкладених масивів. Перше значення - ключ, друге - значення
// Результат, що очікується  [['a', 1], ['b', 2]] => { a: 1, b: 2 }
// const array = [["a",1],["b",2]]
// function arrToObj(arr){
//   const resultObj={};
//   for(const[key,velue] of arr){
//     resultObj[key]=value;
//   }
//   return resultObj
// }

// console.log(arrToObj(array))


// Напишіть фукнцію, яка порівнює два масиви і повертає true, якщо вони ідентичні
// Очікується([1, 2, 3], [1, 2, 3]) => true
// Очікується([4, 5, 5], [1, 2, 3]) => false
// Очікується([4, 5, 5,6,7], [1, 2, 3]) => false

// function arraysEdentical(arr1, arr2){
//   if(arr1.length !=== arr2.length){
//     return false
//   }
//   for(let i=0; i<arr1.length; i++){
//     if(arr1[i] !== arr2[i]){
//       return false
//     }
//     return true
//   }
// }

// console.log(arraysEdentical([1, 2, 3], [1, 2, 3]))
// console.log(arraysEdentical([4, 5, 5], [1, 2, 3]))
// console.log(arraysEdentical([4, 5, 5,6,7], [1, 2, 3]))

// Напишіть функцію, яка перетворює глибокий масив в одномірний. Не використовувати array.flat()
// Очікується[1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
// function flatArr(arr){
//  let newArr=[];
//   for(const val of arr){
//     if(Array.isArray(val)){
//       newArr.push(newArr.concat(flatArr(val)))
     
//     }else{
//       newArr.push(val);
//     }
//   }
// }

//  const newArr=[];
// function flatArr(arr){
 
//    for(const val of arr){
//      if(Array.isArray(val)){
//       flatArr(val);
      
//      }else{
//        newArr.push(val);
//      }
//    }
//  }

// Напишіть функцію, яка розділяє масив на частини вказано розміру
// Очікується  ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
// function spliteArray(arr,val){
//   const result=[];
//   for(let value=0; value<arr.length; value+=val){
//     result.push(arr.slice(value, value+val));
//   }
//   return result;
// }
// console.log(spliteArray([1, 2, 3, 4, 5], 2));




// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній
// function letMeSeeYourName(callback){
//   const prm = prompt("введіть імя");
//   callback(prm);
// }
// function greet(name){
//   console.log(привіт ${name});
// }
// letMeSeeYourName(greet)



// Напишіть дві функції
// makeProduct(name, price, callback) - приймає ім"я та ціну товару, а також callback
// Функція створює об"єкт товару, додає йому унікальний ідентифікатор у властивість id та викликає callback,
// передаючи йому створений об"єкт
// showProduct(product)  - колбек, що приймає об"єкт продукта та виводить його у консоль
// function makeProduct(name, price, callback){
//   const product= {
//     name,
//     price,
//     id:Date.now()
//   }
//   callback(product)
// }
// function showProduct(product){
//   console.log(product);
// }
// makeProduct("cup", 200, showProduct)

// Потрібно виконати рефакторинг коду так, щоб не потрібно було кожного разу передавати ім"я шефа
// Напишіть функцію makeShef(shefName), яка повертає функцію makeDish(dish),
//     яка пам"ятає ім"я шефа під час свого виклику
// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`)
// }

// // makeDish('Mango', 'apple pie')
// // makeDish('Poly', 'muffins')

// const makeShef= function(shefName){
//   return function(dish){
//     console.log(`${shefName} is cooking ${dish}`);
//   }
// }

// const name1Shef = makeShef("name1")

// name1Shef("some muffins")


// Потрібно виправити помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price)
//   },
// }
// product.showPrice()


// const arrNumber = [ 11, 9, 2, 1 ]
// Напишіть функцію, яка розверає масив у зворотньому напрямку.Метод reverse() не використовувати
// const arrNumber = [ 11, 9, 2, 1 ];
// function reverse(arr){
//   return arr.map((item, index, array)=>array[array.length-1-index])
// }
// console.log(reverse(arrNumber ));

// Напиши клас Client, який створює об"єкт із властивостями login та email
// оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
// class Client{
//   #login
//   #email

//   constructor(log,mail){
//     this.#login=log;
//     rhis.#email=mail;
//   }
//   get login(){
//     return this.#login
//   } 
//   set login(newLogin){
//     this.#login=newLogin
//   }

//   get mail(){
//     return this.#email
//   } 
//   set mail(newmail){
//     this.#email=newmail
//   }
// }
// const boby=new Client("Boby", "bobymail@gmail.com")
// console.log(boby);
// console.log(boby.login);
// console.log(boby.email);
// console.log(boby.login="val");
// console.log(boby.email="val@gmail.com");

//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.
class Animal{
  constructor(name,type){ 
  this.name =name;
  this.type=type;}
 
}
getInfo(){
  return`name:${this.name}, type;${this.type}`;
}
feed(){
  return `${this.name} is being fed`
}
 class Bird extends Animal{
  constructor(name,type,food){ 
    super(name, type);
    this.food=food;
  }
  getInfo(){
    return`${super.getInfo()}, food:${this.food}`;
  }
 }
 class Reptile extends Animal{
  constructor(name,type,color){ 
    super(name, type);
    this.color=color;
  }
  getInfo(){
    return`${super.getInfo()}, color:${this.color}`;
  }
 }

class Zoo{
constructor(){
  this.animals=[];
}
addAnimal(animal){
  this.animals.push(animal);
}
getAllAnimals(){
   this.animals.forEach(animal=>console.log(animal.getInfo()))
}
}

const zoo = new Zoo();
const eagle = new Bird("eagle","bird","meat");
const snake= new Reptile("snake","reptile","yellow");
zoo.addAnimal(eagle)
zoo.addAnimal(snake)