import React, {Component } from "react";
import { isVowel } from "../utils/strings";
import './Counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0,
        }
    }

    handleInc = () => {
        this.setState({
            count : this.state.count + 1,
        });
    };

    handleDec = () => {
        this.setState({
            count : this.state.count - 1,
        });
    };

    render(){
        return(
            <div className="CounterBox">
             <h1> Counter:   {this.state.count}</h1>
                <p className = {isVowel(this.props.name[0]) ? "red" : "green"} >
                     {this.props.name}
                </p>
                <button className = "plus" onClick = {this.handleInc}> + </button>
                <button className = "minus" onClick = {this.handleDec}> - </button>
            </div>
        );
    }
}

export default Counter;