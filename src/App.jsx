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

console.log(generateArray(25));

export default MyApp


