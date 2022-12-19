import './App.css';
import React from 'react'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: []
      
    };
  }
  render() {
    return  (
    <div>
    <ul>
      <li>Aaron</li>
      <li>444-444-4444</li>
      <li>07/25/2003</li>
    </ul>
  </div>
    )
  }
}


export default App;
