import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Sequence = () => {

  const ref = useRef(null);

  useEffect(() => {

    if( window.innerWidth <= 768 || screen.width <= 768 ) return true;

    const canvas = document.querySelector('.product-scrolling');
    const ctx = canvas.getContext('2d');
    // ctx.globalCompositeOperation = "copy";

    let currentFrameIndex = 0;
    const currentFrame = (index) => (`/images/sequence/${index.toString().padStart(3, '0')}.png`)
    // const currentFrame = (index) => (`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`)

    const frameCount = 208;
    // const frameCount = 150;

    canvas.width = 1600;
    canvas.height = 900;
    // canvas.width = 1158;
    // canvas.height = 770;

    const images = [];

    const sequence = {
      frame: 0,
    };

    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
      }
    }

    preloadImages();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(images[sequence.frame], 0, 0, canvas.width, canvas.height);
    }

    images[0].onload = render;

    gsap.to(sequence, {
      frame: frameCount - 1,
      snap: "frame",
      scrollTrigger: {
        trigger: '.award',
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        // scrub: 0.5,
        // markers: true,
        refreshPriority: -2,
      },
      onUpdate: render
    })

    gsap.to('.sequence canvas', {
      scrollTrigger: {
        trigger: '.award',
        start: 'bottom center',
        toggleActions: 'play reverse play reverse',
        // markers: true,
      },
      opacity: 0,
      duration: 1.5
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
