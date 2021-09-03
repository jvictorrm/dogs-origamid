import React, { useState } from 'react'
import { Container, Skeleton } from './styles'

const ImageLoad = ({alt, ...props}) => {
  const [showSkeleton, setShowSkeleton] = useState(true);

  const handleLoad = ({target}) => {
    setShowSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <Container>
      {showSkeleton && <Skeleton></Skeleton>}
      <img onLoad={handleLoad} src="" alt={alt} {...props}/>
    </Container>
  )
}

export default ImageLoad
