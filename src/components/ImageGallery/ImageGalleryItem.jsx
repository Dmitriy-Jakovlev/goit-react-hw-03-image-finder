import React, { Component } from "react";
import PropTypes from "prop-types";

class ImageGalleryItem extends Component {
  render() {
    const { gallerys, toggleModalImg } = this.props;
    return gallerys.map(({ id, webformatURL, tags, largeImageURL }) => (
      <li key={id} className="ImageGalleryItem">
        <img
          src={webformatURL}
          alt={tags}
          className="ImageGalleryItem-image"
          onClick={() => toggleModalImg({ tags, largeImageURL })}
        />
      </li>
    ));
  }
}
ImageGalleryItem.propTypes = {
  gallerys: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  toggleModalImg: PropTypes.func.isRequired,
};
export default ImageGalleryItem;
