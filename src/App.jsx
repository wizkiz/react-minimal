import React from 'react'
import AppTitle from './AppTitle'

const MyApp = () => (
  <h1>
    <AppTitle/>
    <p>Bundle size: 57 bytes, Load time of the bundle: 45 ms, Last commit SHA1: 71550f0b84df81290fc2cd93a63bd71233064347</p>
  </h1>
)


// class MyApp extends React.Component {
//   render() {
//     return (
//       <h1>
//         <p>Bundle size: 57 bytes, Load time of the bundle: 45 ms, Last commit SHA1: 71550f0b84df81290fc2cd93a63bd71233064347</p>
//         <AppTitle/>
//       </h1>
//     );
//   }
// }

export default MyApp
