import React, { useEffect, useRef } from 'react'

const Sequence = () => {

  const ref = useRef(null);

  useEffect(() => {

    const html = document.documentElement;
    const canvas = document.querySelector('.product-scrolling');
    const ctx = canvas.getContext('2d');
    // ctx.globalCompositeOperation = "copy";

    let currentFrameIndex = 0;
    // const currentFrame = (index) => (`/images/sequence/${index.toString().padStart(3, '0')}.png`)
    const currentFrame = (index) => (`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`)

    const frameCount = 150;

    // canvas.width = 1920;
    // canvas.height = 1309;
    canvas.width = 1158;
    canvas.height = 770;

    const img = new Image();
    img.src = currentFrame(currentFrameIndex);
    img.onload = function() {
      ctx.drawImage(img, 0, 0);
    }

    const updateImage = index => {
      img.src = currentFrame(index);
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    }

    const preloadImages = () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
      }
    }

    preloadImages();

    window.addEventListener('scroll', () => {
      const scrollTop = html.scrollTop;
      const maxScroll = html.scrollHeight - window.innerHeight;
      // const maxScroll = 5000;

      const scrollFraction = scrollTop /  maxScroll;

      const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
      if( currentFrameIndex != frameIndex ) {
        // console.log(frameIndex);
        currentFrameIndex = frameIndex;
        requestAnimationFrame(() => updateImage(frameIndex + 1));
      }
    })
    
    return () => { }
  }, [])

  return (
    <div className="sequence">
      <canvas className="product-scrolling" ref={ref} />
    </div>
  )
}

export default Sequence
