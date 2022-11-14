import React from 'react';
import PropTypes from 'prop-types';
import './RoundedImage.styles.css';

export const RoundedImage = ({ src, alt, width, height, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      title={alt}
      className="rounded-image"
    />
  );
};

RoundedImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  alt: PropTypes.string,
};

RoundedImage.defaultProps = {
  alt: '',
  height: '',
  width: '',
};
