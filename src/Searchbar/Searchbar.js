import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

export default class Searchbar extends Component{
  state = {
    query: '',
  };
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };
  handleChange = e => {
    this.setState({ query: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;

    this.props.onSearch(query);
    this.setState({ query: '' });

  };
  render() {
    const { query } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
