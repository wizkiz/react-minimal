import * as xd from "./App"
import React from "react";
import PropTypes from "prop-types";


export default class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            a: 0,
            b: 0,
            arr: new Array,
        }
    }

    //I removed console.log(changed value) to decrease console clutter
    handlerA = (event) => {
        event.persist();
        this.setState({
            a: Number(event.target.value),
            arr: xd.generateArray(Number(event.target.value), this.state.b),
        });
    };
    
    
    handlerB = (event) => {
        event.persist();
        this.setState({
            b: Number(event.target.value),
            arr: xd.generateArray(this.state.a, Number(event.target.value )), 
        });
    };


    counter = 0;
    render() {
        const style = {
            display: (this.state.a<this.state.b && this.state.a>0) ? "block" : "none",
            wordWrap: "break-word"
        }

        console.time(`Lab2 ex3: render - ${this.counter}`);
        const content = (
            <div>
                <p>Lab2</p>
                <label id="label2" htmlFor="input2">Input A</label>
                <br></br>
                <input onChange={this.handlerA} type="number" id="input1"/>
                <br></br>
                <label id="label2" htmlFor="input2">Input B</label>
                <br></br>
                <input onChange={this.handlerB} type="number" id="input2"/>
                <div style={style} id="arrField">Lab2 ex2 array:<p>{this.state.arr.toString()}</p></div>
           </div>
        );
        console.timeEnd(`Lab2 ex3: render - ${this.counter++}`);

        return content;
    }
}