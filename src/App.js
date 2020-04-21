import React, { useState } from 'react';
import './App.css';

const RenderImage = ({
  imageUrl = 'https://customgrowthgroup.com/wp-content/uploads/2013/09/URL-image.jpg',
  errorContent = <>error</>,
  loaderContent = <>loading</>,
  placeholder = 'image',
  className,
  ...rest
}) => {

  const REGULAR_IMG = 'https://customgrowthgroup.com/wp-content/uploads/2013/09/URL-image.jpg';
  const HUGE_IMG = 'https://i.imgur.com/1RpGWXY.png';

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const img = new Image();
  img.src = imageUrl;
  img.onload = () => setLoading(false);
  img.onerror = () => setError('error');

  const content = (
    <img
      src={img.src}
      className={className}
      alt={placeholder}
      {...rest}
    />
    );

  if (error) return errorContent;
  if (loading) return loaderContent;

  return content;

//   return error 
//         ? errorContent
//         : loading
//           ? loaderContent
//           : content;
}

export default RenderImage;
