
import './App.css';
import React from 'react';
import Basicinfo from './components/Basicinfo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "oseal",
        number: "980-444-4444",
        birthDate: "12/2022",
      },
      people: [
        {
          name: "osiel",
          number: "980-444-4444",
          birthDate: "12/2022",
        },
        {
          name: "lil ozil",
          number: "980-444-4444",
          birthDate: "12/2022",
        },
        {
          name: "ohseal",
          number: "980-444-4444",
          birthDate: "12/2022",
        },
      ]
    };
  }
  render() {
      return this.state.people.map(function (person, index) {
        return <Basicinfo key={index} person={person} />;
      })
  }
}

export default App;