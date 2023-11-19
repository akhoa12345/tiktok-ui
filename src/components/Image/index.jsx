import { useState, forwardRef } from 'react';
import images from '../../assets/images';
import styled from 'styled-components';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return <ImageStyle className={className} ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />;
});

export default Image;

const ImageStyle = styled.img`
    overflow: hidden
`