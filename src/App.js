import React, { useState } from 'react';
import './App.css';

const RenderImage = ({
  imageUrl = 'https://customgrowthgroup.com/wp-content/uploads/2013/09/URL-image.jpg',
  errorImageUrl = '',
  loaderImageUrl = 'https://pngimg.com/uploads/spinner/spinner_PNG44.png',
  placeholder = 'image',
  className = "App-logo",
  ...rest
}) => {

  const HUGE_IMG = 'https://i.imgur.com/1RpGWXY.png';

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const renderError = <img src={errorImageUrl} alt={'err'} {...rest} />;
  const renderLoading = <img src={loaderImageUrl} alt={'loading'} {...rest} />;
  const content = (
    <img
      src={imageUrl}
      className={className}
      alt={placeholder}
      onLoad={() => setLoading(false)}
      onError={err => setError(err)}
      {...rest}
    />
    );

  if (error) return renderError;
  if (loading) return renderLoading;

  return content;
}

export default RenderImage;
