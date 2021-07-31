'use strict';
// let hasDriverlicensse = false;
// const passTest = true;


// if (passTest) hasDriverlicensse= true
// if (hasDriverlicensse) console.log('I can drive :D');


// const interface = 'Audio';

// function logger(){
//     console.log('my name is Bolaji');
// }

// logger();
// logger();


// function fruitPrrocessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} orange.`;
//     return juice ;
// }

// const applejuice = fruitPrrocessor(5,0);
// console.log(applejuice);

//function declaration
// function calcAge1(birthYear){
//     return 2037 - birthYear;

// }

// const age1 = calcAge1(1991);

// console.log(age1);

// //function expression
// const calcAge2 = function calcAge1(birthYear){
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1991)

// console.log(age1,age2);

//Arrow function

// const calcAge3 = birtYear => 2037 - birtYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birtYear, firstName)=>{
//     const age = 2037 - birtYear;
//     const retirement = 65 - age;
//     //return retirement;
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'Bolaji'));
// console.log(yearsUntilRetirement(1980, 'Adenike'));

// function cutFruitPiecies(fruit){
//     return fruit * 4;
// }
// function fruitPrrocessor(apples, oranges){
//     const applePieces = cutFruitPiecies(apples);
//     const orangePieces= cutFruitPiecies(oranges);
//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of  orange.`;
//     return juice ;
// }
// console.log(fruitPrrocessor(2,3));

// const calcAverage = (score1,score2 ,score3 )=> (score1+score2+score3)/3;

// //console.log (score);


// const checkWinner = (koala, dolphine) => {
// const averageKoala = calcAverage (44,23,71);
// const averageDolphine = calcAverage (65,54,49);


// if (averageDolphine === averageKoala /2 ){
//     console.log(`Dolphine wins`);
// }else {
//     console.log(`Koala wins`);
// }
// }

// console.log (checkWinner());


// //Datastructure

// const friend1 ='Micheal';
// const friend2 ='Steven';
// const friend3 ='Peter';

// const friends = ['Micheal','Steven','Peter'];
// console.log (friends);

// const years= new Array (1991,1992,1993,1994);

// console.log(friends[0]);
// console.log(friends.length);

// console.log(friends.length-1);

// friends[2] ='jay';

// //Array are immutable= can be change even when declares as const

// //Exercise
//  const calcAge2 = function calcAge1(birthYear){
//         return 2037 - birthYear;
//      }

//      const yearss = [1990,2001,2003,2334];

//      const age1 = calcAge2 (yearss[0]);
//      const age2 = calcAge2 (yearss[2]);
//      const  age3 = calcAge2(yearss[yearss.length-1]);

//Basic Arrays operations
//const friends = ['Micheal','Steven','Peter'];
//add new element
// friends.push('Jay');
//  console.log (friends);

 //add to the front
 //friends.unshift('Jonas');
  //console.log(friends);
 //remove array element
  //friends.pop;
  //console.log(friends);

//   friends.shift
//   console.log(friends);
  
//   //returns index
//   friends.indexOf('Steven');

//   //Boolean
//   friends.includes;
//Exercise **
// function calcTip (billValue){

// let tipValue;

// if (50<billValue<300){
//     tipValue= 15*billValue/100;
// }else {
//     tipValue= 20*billValue/100;
// }
// return tipValue;
// }
// console.log(calcTip(100));

// const bills= [125,555,44];

// const tips= [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// console.log(tips);

// const total= [bills[0]+tips[0], bills[1]+tips[1],bills[2]+tips[2]];
// console.log(total);
///*** */

// const bolaji = {
//      firstName :'Bolaji',
//      lastName:'Adesina',
//      birthYear:29,
//      job:'Software Engineer',
//      friends:['Adenike','Bills','Bezos'],
//      haDriversLicense: false,
// //  console.log(student);
// //  console.log(student.lastName);
// //  console.log(student['lastName']);

// //  const nameKey ='Name';
// //  console.log(student['first' +nameKey]);
// //  console.log(student['last' + nameKey]);

// //  const interestedIn = prompt(`What do you want to know about Student ? 
// //  Choose between firstName, lastName, age, job, and  friends`);
// //  console.log(student[interestedIn]);

//     calcAge : function() {
//         this.age =2037 -this.birthYear;
//         return this.age;
//     },

//     getSummary: function (){
//         return `${this.firstName} is a ${this.calcAge()} -year old 
//         ${this.job}, and he has ${this.haDriversLicense ? 'a' : 'no'} 
//         driver's license.`
//     }   

// }
//         console.log(bolaji.getSummary());


// const mark = {
//     firstName :'Mark',
//     lastName :'Miller',
//     weight : 78,
//     height : 1.69,

//     calcBMI : function(){
//         this.bmi= this.weight / this.height ** 2 ;
//         return this.bmi;
//     }

// };



// const john ={
//     firstName :'John',
//     lastName :'Smith',
//     weight :92,
//     height :1.95,

//     calcBMI : function(){
//         this.bmi= this.weight / this.height ** 2 ;
//         return this.bmi;
//     }

// };
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi>john.bmi){
//     console.log(`${mark.firstName} ${mark.lastName}'s (${mark.bmi}) is higher than  John's (${john.bmi}) }`);
// }else {
//     console.log(`${john.firstName} ${john.lastName} (${john.bmi})is higher than  John's (${mark.bmi}) }`);
// };

// American@2020
// Madrid_3070

// Guinness_1759

//Caterpiller_9898
// Table@Chair_1000

// SamsungComforter@9090
// Ibadan@5050 welcome@1030



//LOOPS
//for loops keeps running while condition is TRUE
    // for (let rep = 1; rep<=10; rep++){
    //     console.log(`lifting weight repetition ${rep}`)
    // }


// const markArray = 
//        ['Mark',
//         'Miller',
//          2037- 1991,
//          'Software Engineer',
//         ['Michael','Peter','Steven']   
// ];
// console.log('-----ONLY STRING----');
// for (let i=0;i<markArray.length ;i++){
   
//    if(typeof markArray[i] !== 'string') continue;

//     console.log(markArray[i]);
   
   
// }

// console.log ('--BREAK WITH NUMBER-----');
// for (let i=0;i<markArray.length ;i++){
   
//     if(typeof markArray[i] === 'number') break;
 
//      console.log(markArray[i]);   
//  }

//  for(let i= markArray.length - 1; i>=0;i--){
//      console.log(i, markArray[i]);
//  }

