import "./App.css";
import React from "react";
import Basicinfo from "./components/Basicinfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [{
        name: "oseal",
        number: "980-444-4444",
        birthDate: "12/2022",
      }]
    };
  }
  render() {
    return this.state.person.map(function(person, index){
      return <Basicinfo key={index} person={person}></Basicinfo>
    });
  }
}

export default App;
