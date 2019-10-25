import React from "react";
import "./App.css";
import SuggestionForm from "./components/SuggestionForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(place) {
    console.log("App.js / handleSubmit", place);
    this.setState({
      places: [
        ...this.state.places,
        {
          id: Date.now(),
          name: place
        }
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <h3>Dijon Déjeune</h3>
        <SuggestionForm onPlaceSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
