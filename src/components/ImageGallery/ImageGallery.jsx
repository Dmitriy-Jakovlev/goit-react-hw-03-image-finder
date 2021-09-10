import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";
import Modal from "./Modal";
import Loader from "./Loader";
import Buton from "./Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class ImageGallery extends Component {
  state = {
    largeImg: "",
    alt: "",
    showModals: false,
  };
  toggleModal = () => {
    this.setState(({ showModals }) => ({
      showModals: !showModals,
    }));
  };

  toggleModalImg = (gallery) => {
    this.setState({
      largeImg: gallery.largeImageURL,
      alt: gallery.tags,
    });
    this.toggleModal();
  };
  render() {
    const { gallery, onFetchGallery, isLoader } = this.props;
    const { showModals, largeImg, alt } = this.state;
    return (
      <div className="ImageBlock">
        <ul className="ImageGallery">
          <ImageGalleryItem
            gallerys={gallery}
            toggleModalImg={this.toggleModalImg}
          />
        </ul>
        {isLoader && <Loader />}
        {gallery.length > 0 && !isLoader && (
          <Buton onFetchGallery={onFetchGallery} />
        )}
        {showModals && (
          <Modal srcImgs={largeImg} tags={alt} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
  onFetchGallery: PropTypes.func.isRequired,
  isLoader: PropTypes.bool.isRequired,
};
export default ImageGallery;
