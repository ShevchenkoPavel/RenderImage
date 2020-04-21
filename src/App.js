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

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const onError = <img src={errorImageUrl} alt={'loading'} {...rest} />;
  const onLoading = <img src={loaderImageUrl} alt={'error'} {...rest} />;
  const content = (
    <img
      src={'http://pnf.su/'}
      className={className}
      alt={placeholder}
      onLoad={() => setLoading(false)}
      onError={err => setError(err)}
      {...rest}
    />
    );

  return <>
    {
      error
        ? ( onError )
        : loading
          ? ( onLoading )
          : ( content )
    }
  </>
}

export default RenderImage;
