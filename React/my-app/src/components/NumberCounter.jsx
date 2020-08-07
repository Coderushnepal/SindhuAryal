import React, {Component} from "react";
import withRedbull from "../hoc/withRedbull";

class NumberCounter extends Component {
    // constructor(props){
    //     super(props);
    // }

    render() {
        return (
            <div>
                <button onClick={this.props.add}> + </button>
                <button onClick={this.props.sub}> - </button>
                <h2>{this.props.label} {this.props.count}</h2>
            </div>
        )
    }
}

export default withRedbull(NumberCounter);