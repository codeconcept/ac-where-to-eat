import React from "react";

class SuggestionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({
      place: evt.target.value
    });
  }
  render() {
    return (
      <div>
        <div>Suggérer un endroit où aller déjeuner</div>
        <form>
          <input
            type="text"
            value={this.state.place}
            onChange={this.handleChange}
            onBlur={this.handleChange}
            placeholder="nom du restaurant / lieu"
          />
        </form>
      </div>
    );
  }
}

export default SuggestionForm;
