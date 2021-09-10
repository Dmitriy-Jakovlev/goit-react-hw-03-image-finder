import React, { Component } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

class ModalWin extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    const { srcImgs, tags } = this.props;
    return createPortal(
      <div className="Overlay">
        <div>
          <img src={srcImgs} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}

ModalWin.propTypes = {
  onClose: PropTypes.func.isRequired,
  srcImgs: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
export default ModalWin;
