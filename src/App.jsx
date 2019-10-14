import React, {Component} from 'react'
import AppTitle from './AppTitle'

const MyApp = () => (
  <h1>
    <AppTitle/>
    <p>Bundle size: 57 bytes, Load time of the bundle: 45 ms, Last commit SHA1: 71550f0b84df81290fc2cd93a63bd71233064347</p>
  </h1>
)

//lab1 ex2 
export const generateArray = (n) => (
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

//testing
//console.log(generateRandomArray(5));

export default MyApp


