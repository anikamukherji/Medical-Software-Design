import React from 'react';
import Hello from './Hello.js';
import Counter from './Counter.js';

class App extends React.Component {
  // One thing every component must do: 
  // define the render method
  // (this defines the view of the component)
  render() {
    return (
      <div>
		<Hello name="Suyash" color="red"/>
		<Hello name="Mark" />
		<Counter name="Suyash"/>
		<Counter name="Mark"/>
      </div>
    );
  }
}

export default App;
