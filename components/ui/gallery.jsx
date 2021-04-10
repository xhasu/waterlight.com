import React, { useState, useEffect, useRef, useContext } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Thumbs } from 'swiper'

import { GalleryContext } from '../../contexts/gallery-context'

SwiperCore.use([Autoplay, Navigation, Thumbs]);

const Gallery = () => {

  const [position] = useContext(GalleryContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const ref = useRef(null);

  const goPrev = () => {
    ref.current.swiper.slidePrev();
  };

  const goNext = () => {
    ref.current.swiper.slideNext();
  };

  useEffect(() => {
    ref.current.swiper.slideToLoop(position);
  }, [position])


  return (
    <div className="gallery">

      <div className="gallery-head">
        <div className="gallery-title">WATERLIGHT en la guajira</div>
        <div className="gallery-subtitle">Galería</div>
      </div>

      <div className="gallery-content">

        <Swiper className="gallery-swiper" ref={ref} loop={true} threshold={30} thumbs={{swiper: thumbsSwiper}}>
          <SwiperSlide className="gallery-slide">
            <img src="/images/gallery/03.jpg" alt="" width="1258" height="711" />
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="/images/gallery/04.jpg" alt="" width="1258" height="711" />
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="/images/gallery/05.jpg" alt="" width="1258" height="711" />
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="/images/gallery/06.jpg" alt="" width="1258" height="711" />
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="/images/gallery/07.jpg" alt="" width="1258" height="711" />
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="/images/gallery/08.jpg" alt="" width="1258" height="711" />
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="/images/gallery/09.jpg" alt="" width="1258" height="711" />
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="/images/gallery/10.jpg" alt="" width="1258" height="711" />
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="/images/gallery/11.jpg" alt="" width="1258" height="711" />
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="/images/gallery/12.jpg" alt="" width="1258" height="711" />
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="/images/gallery/13.jpg" alt="" width="1258" height="711" />
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="/images/gallery/14.jpg" alt="" width="1258" height="711" />
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="/images/gallery/15.jpg" alt="" width="1258" height="711" />
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="/images/gallery/16.jpg" alt="" width="1258" height="711" />
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="/images/gallery/17.jpg" alt="" width="1258" height="711" />
          </SwiperSlide>
        </Swiper>

        <div className="gallery-arrows">
          <div className="arrow-prev" onClick={goPrev}>
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/icon-prev-xs.png"/>
              <img src="/images/icon-prev.png" alt="" width="147" height="157" />
            </picture>
          </div>
          <div className="arrow-next" onClick={goNext}>
            <picture>
              <source media="(max-width: 768px)" srcSet="/images/icon-next-xs.png"/>
              <img src="/images/icon-next.png" alt="" width="147" height="157" /> 
            </picture>
          </div>
        </div>

      </div>

      <div className="gallery-mini">
        <Swiper loop={true} centeredSlides={true} slidesPerView="auto" slideToClickedSlide={true} spaceBetween={5} grabCursor={true} threshold={20} onSwiper={setThumbsSwiper} watchSlidesVisibility watchSlidesProgress>
          <SwiperSlide className="mini-item">
            <img src="/images/gallery/thumbs/03.jpg" alt="" width="122" height="86" />
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="/images/gallery/thumbs/04.jpg" alt="" width="122" height="86" />
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="/images/gallery/thumbs/05.jpg" alt="" width="122" height="86" />
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="/images/gallery/thumbs/06.jpg" alt="" width="122" height="86" />
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="/images/gallery/thumbs/07.jpg" alt="" width="122" height="86" />
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="/images/gallery/thumbs/08.jpg" alt="" width="122" height="86" />
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="/images/gallery/thumbs/09.jpg" alt="" width="122" height="86" />
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="/images/gallery/thumbs/10.jpg" alt="" width="122" height="86" />
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="/images/gallery/thumbs/11.jpg" alt="" width="122" height="86" />
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="/images/gallery/thumbs/12.jpg" alt="" width="122" height="86" />
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="/images/gallery/thumbs/13.jpg" alt="" width="122" height="86" />
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="/images/gallery/thumbs/14.jpg" alt="" width="122" height="86" />
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="/images/gallery/thumbs/15.jpg" alt="" width="122" height="86" />
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="/images/gallery/thumbs/16.jpg" alt="" width="122" height="86" />
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="/images/gallery/thumbs/17.jpg" alt="" width="122" height="86" />
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  )
}

export default Gallery
