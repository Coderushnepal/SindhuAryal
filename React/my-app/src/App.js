import React from 'react';
import Counter from "./Counter/Counter";
import EnhancedCounter from "./components/NumberCounter";
import './App.css';
import Button from "./components/Button";
import EnhancedUser from './Assign-2/user';

const people = [ "Sindhu",  "Elisha", "Bisikha", "Kirtee"];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    let { count } = this.state;
    return (
      <div> 
        <div className="app">
          <div class="count">
            DEMO:
            <h3>Count:</h3>
            <h1>{count}</h1>
          </div>
          <div className="buttons">
            <Button title={"-"} action={this.decrementCount} />
            <Button title={"+"} action={this.incrementCount} />
          </div>
        </div>
        Day 1
        {people.map((name) => (
         <Counter key={name} name={name} />
      ))}
      DAY 2 : Computing with Enhanced Component
      <EnhancedCounter label ="My label" />
      DAY 3 
      <div>
            {people.map((name) => 
        <EnhancedUser key={name} name={name} />
      )}
      </div>  

      </div>


    );
  }
}

export default App;
