import React, { Component } from "react";
// import UserComponent from "../components/User";

const withRedbull = (WrappedComponent) => {
    class UserWrapper extends Component {
        constructor(props) {
            super(props);
            
            this.state = {
                    count : 0,
            };
        }

        add = ()  => {
            console.log(this.state.count);
            this.setState({ count: this.state.count + 1 })
        }

        sub = ()  => this.setState({ count: this.state.count - 1 })
        
        render() {
            return <WrappedComponent count={this.state.count} add={this.add} sub={this.sub}/>
        }
    }
    return UserWrapper;
};

export default withRedbull;