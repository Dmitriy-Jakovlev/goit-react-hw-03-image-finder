import React, { Component } from "react";
import PropTypes from "prop-types";

class Buton extends Component {
  render() {
    const { onFetchGallery } = this.props;
    return (
      <button type="submit" className="Button" onClick={onFetchGallery}>
        Load more
      </button>
    );
  }
}

Buton.propTypes = {
  onFetchGallery: PropTypes.func.isRequired,
};
export default Buton;
