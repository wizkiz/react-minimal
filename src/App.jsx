import React, {Component} from 'react'
import AppTitle from './AppTitle'
import ButtonPanel from './ButtonPanel'
//import Display from './Display'
// import clickButton from './clickButton'

// const MyApp = () => (
//   <div>
//     <AppTitle/>
//     <p>Bundle size: 57 bytes, Load time of the bundle: 45 ms, Last commit SHA1: 71550f0b84df81290fc2cd93a63bd71233064347</p>
    
//   </div>
// )

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


export class MyApp extends React.Component {

  render(){
    return(
      <div className="component-App">
        <AppTitle/>
        <ButtonPanel clickHandler={this.handleClick} />
        <div id="textfield"/>
      </div>
    )
  }
}

//lab1 ex2 
const generateArray = (n) => (
  Array.from({length: n}, (v,k)=>k+1)
);

//lab1 ex3
const generateRandomArray = (n) => (
  Array.from({length: n}, () => Math.floor(Math.random()*25))
);

//lab1ex4
const ex4 = [2, 56, 23, 88, 17, 4];
console.log("lab1ex4: ");
ex4.forEach(function (element){
  if(element>15){
    console.log(element);
  }
})

//lab1ex5
const ex5 = {
  arr: [2, 5, 8, 10],
  squareArr: function () { 
    var tmp = this.arr;
    tmp.forEach(function (element, index, arr){
      arr[index] = Math.pow(element, 2);
    });
    return tmp;
  }
}

//testing
console.log("lab1ex5")
console.log(ex5.squareArr().toString());

// export default {MyApp, data};