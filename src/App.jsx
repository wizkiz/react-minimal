import React, {Component} from 'react'
import AppTitle from './AppTitle'

const MyApp = () => (
  <h1>
    <AppTitle/>
    <p>Bundle size: 57 bytes, Load time of the bundle: 45 ms, Last commit SHA1: 71550f0b84df81290fc2cd93a63bd71233064347</p>
  </h1>
)

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
console.log(ex5.squareArr().toString());

export default MyApp


