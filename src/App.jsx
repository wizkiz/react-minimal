import React, {Component} from 'react'
import AppTitle from './AppTitle'
import ButtonPanel from './ButtonPanel'
import Input from './Input'

export let data = [
  {
    "teacherName": "Jan Nowak",
    "teacherAge": 36,
    "active": true,
    "students": [
      {
        "name": "Maciej Janosz",
        "age": 12
      },
      {
        "name": "Wojciech Kowalski",
        "age": 15
      },
      {
        "name": "Wioletta PoznaĹska",
        "age": 1000000
      }
    ]
  },
  {
    "teacherName": "Mariusz Flasinski",
    "teacherAge": 56,
    "active": true,
    "students": [
      {
        "name": "Jan Kot",
        "age": 12
      },
      {
        "name": "Jan Ziobro",
        "age": 15
      },
      {
        "name": "Adam Malysz",
        "age": 41
      }
    ]
  },
  {
    "teacherName": "Wojciech Kuzak",
    "teacherAge": 44,
    "active": false,
    "students": [
      {
        "name": "Janina Wronska",
        "age": 22
      },
      {
        "name": "John Dover",
        "age": 7
      },
      {
        "name": "Emil Petterson",
        "age": 46
      }
    ]
  }
];

export let MyApp = () => (
  <div className="component-App">
    <AppTitle/>
    <ButtonPanel/>
    <div id="textfield"/>
    <br></br>
    <Input id="inputfield"/>
  </div>
) 


//lab1 ex2 
// const generateArray = (n) => (
//   Array.from({length: n}, (v,k)=>k+1)
// );

//I assumed that between a, b includes both a and b
export const generateArray = (a,b) => (
  Array.from({length: b-a+1}, (v,k) => k+a)
);


//lab1 ex3
export const generateRandomArray = (n) => (
  Array.from({length: n}, () => Math.floor(Math.random()*25))
);

//lab1ex4
// const ex4 = [2, 56, 23, 88, 17, 4];
// console.log("lab1ex4: ");
// ex4.forEach(function (element){
//   if(element>15){
//     console.log(element);
//   }
// })

//lab1ex5
// const ex5 = {
//   arr: [2, 5, 8, 10],
//   squareArr: function () { 
//     var tmp = this.arr;
//     tmp.forEach(function (element, index, arr){
//       arr[index] = Math.pow(element, 2);
//     });
//     return tmp;
//   }
// }

export const squareArray = (arr) => (
  arr.map(x=>Math.pow(x,2))
  //Array.from({length: arr.length}, (v,k) => Math.pow(arr[k],2))
);

//testing
//console.log("lab1ex5")
//console.log(ex5.squareArr().toString());

// export default {MyApp, data};