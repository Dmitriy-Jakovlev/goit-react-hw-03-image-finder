import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ loadMore }) => {
    return (
        <div className={styles.BtnWrapper}>
            <button onClick={loadMore} type="button" className={styles.Button}>
                Load More
            </button>
        </div>
    );
};

Button.propTypes = {
    loadMore: PropTypes.func.isRequired
};

export default Button;