import * as xd from "./App"
import React from "react";
import PropTypes from "prop-types";
//import inputChange from "./inputChange"




export default class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            a: 0,
            b: 0,
        }
        //this.sth = this.sth.bind(this);
    }
    // state = {
    //     a: 12,
    //     b: 0,
    //     label1 () {
    //         //console.log(str);
    //         document.getElementById('label1').textContent = this.state.a;
    //     },
    //     label2 () {
    //         //console.log(str);
    //         document.getElementById('label2').textContent = this.state.b;
    //     }
    // }

    handler1 = (event) =>{
        console.log(event.target.value);
        this.setState({
            a: event.target.value,
        })
    }
    
    handler2 = (event) =>{
        console.log(event.target.value);
        this.setState({
            b: event.target.value,
        })
    }

    render() {
        return (
          <div>
            <label id="label1" htmlFor="input1">Input field 1</label>
            <input onChange={this.handler1} defaultValue="XD" type="number" id="input1"/>
            
            <label id="label2" htmlFor="input2">{this.state.a}</label>
            <input onChange={this.handler2} type="number" id="input2"/>
          </div>
        );
    }
}