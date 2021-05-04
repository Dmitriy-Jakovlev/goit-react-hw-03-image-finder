import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => {
    return (
        <ul className={styles.ImageGallery}>
            {images.map(image => (
                <ImageGalleryItem
                    key={image.id}
                    webImgURL={image.webformatURL}
                    largeImgURL={image.largeImageURL}
                    openModal={openModal}
                />
            ))}
        </ul>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
