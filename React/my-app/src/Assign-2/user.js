import React from 'react';
import withRedBull from './withRedbull';

class User extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render() {
        return (
            <div>
                <h2>{ this.props.name } {this.props.wings}</h2>
                <button class='btn' onClick={this.props.flyaway}>Click</button>
            </div>
        );
    }
}
export default withRedBull(User);