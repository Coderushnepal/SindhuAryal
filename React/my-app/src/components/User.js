import React, { Component } from "react";
import withRedbull from "../hoc"

const  people = [ "Sindhu",  "Elisha", "Bisikha", "Kirtee", "Kritika"];

class UserComponent extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
              <h2>{this.props.wings}</h2>
            </div>
          );
    }
   
}
  
export default withRedbull(UserComponent);