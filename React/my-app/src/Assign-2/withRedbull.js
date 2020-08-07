import React from 'react';
const withRedBull=(WrappedComponent) => {
    class UserWrapper extends React.Component {
        constructor(props){
            super(props);
            this.state={
               wings:null
            }
        }
        flyAway = () => {
            this.setState({wings: 'can fly'})
        }
        render() {  
                return <WrappedComponent  wings={this.state.wings} flyaway={this.flyAway} {...this.props}/>
        }
    }
    return UserWrapper;
};
export default withRedBull;