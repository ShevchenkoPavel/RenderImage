import React, { useState, useEffect } from 'react';

const useImage = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [image, setImage] = useState(null);
  useEffect(() => {
    const img = new Image();
    img.src = url;
    img.onload = () => {
      setImage(img.src)
      setLoading(false)
    };
    img.onerror = () => setError('error');
    return () => {
      setLoading(true);
      setError('');
      setImage(null);
    }
  }, [url]);
  return { image, loading, error };
}

const RenderImage = ({
  imageUrl = 'https://customgrowthgroup.com/wp-content/uploads/2013/09/URL-image.jpg',
  errorContent = <>error</>,
  loaderContent = <>loading</>,
  alt = 'image',
  className,
  ...rest
}) => {

  const { image, loading, error } = useImage(imageUrl); 

  if (error) return errorContent;
  if (loading) return loaderContent;

  return (
          <img
            src={image}
            alt={alt}
            {...rest}
          />
  );
}

export default RenderImage;