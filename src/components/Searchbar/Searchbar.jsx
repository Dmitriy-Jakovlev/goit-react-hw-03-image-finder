import React, { Component } from "react";
import PropTypes from "prop-types";

class Searchbar extends Component {
  state = {
    name: "",
  };

  handleChange = ({ currentTarget }) => {
    const { value } = currentTarget;
    this.setState({
      name: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
