import React, { useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Thumbs } from 'swiper'

SwiperCore.use([Autoplay, Navigation, Thumbs]);

const Gallery = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="gallery">

      <div className="gallery-head">
        <div className="gallery-title">WATERLIGHT en la guajira</div>
        <div className="gallery-subtitle">Galería</div>
      </div>

      <div className="gallery-content">

        <Swiper className="gallery-swiper" loop={true} threshold={30} thumbs={{swiper: thumbsSwiper}}>
          <SwiperSlide className="gallery-slide">
            <img src="https://images.unsplash.com/photo-1614443042306-f01db45309a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="https://images.unsplash.com/photo-1614443042306-f01db45309a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="https://images.unsplash.com/photo-1614443042306-f01db45309a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="https://images.unsplash.com/photo-1614443042306-f01db45309a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="https://images.unsplash.com/photo-1614443042306-f01db45309a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="https://images.unsplash.com/photo-1614443042306-f01db45309a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="https://images.unsplash.com/photo-1614443042306-f01db45309a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="https://images.unsplash.com/photo-1614443042306-f01db45309a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="https://images.unsplash.com/photo-1614443042306-f01db45309a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="https://images.unsplash.com/photo-1614443042306-f01db45309a9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920" alt=""/>
          </SwiperSlide>
        </Swiper>

        <div className="gallery-arrows">
          <div className="arrow-prev">
            <img src="/images/icon-arrow-prev.png" alt="" width="147" height="157" />
          </div>
          <div className="arrow-next">
            <img src="/images/icon-arrow-next.png" alt="" width="147" height="157" /> 
          </div>
        </div>

      </div>

      <div className="gallery-mini">
        <Swiper slidesPerView="auto" slideToClickedSlide={true} spaceBetween={5} loop={true} grabCursor={true} centeredSlides={true} onSwiper={setThumbsSwiper} watchSlidesVisibility watchSlidesProgress>
          <SwiperSlide className="mini-item">
            <img src="https://images.unsplash.com/photo-1615212886093-b3ad2e57f916?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=86&ixlib=rb-1.2.1&q=80&w=120" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="https://images.unsplash.com/photo-1615955507523-4ff7d2f73409?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=86&ixlib=rb-1.2.1&q=80&w=120" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="https://images.unsplash.com/photo-1614827141334-732badfbf72c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=86&ixlib=rb-1.2.1&q=80&w=120" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="https://images.unsplash.com/photo-1615835624350-48c2a516aa98?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=86&ixlib=rb-1.2.1&q=80&w=120" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="https://images.unsplash.com/photo-1614461517447-88e1344bc6ff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=86&ixlib=rb-1.2.1&q=80&w=120" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="https://images.unsplash.com/photo-1614543917159-fa54ac2511fe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=86&ixlib=rb-1.2.1&q=80&w=120" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="https://images.unsplash.com/photo-1616276509233-c10cd06ac2f5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=86&ixlib=rb-1.2.1&q=80&w=120" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="https://images.unsplash.com/photo-1614431262189-4739dd82ed24?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=86&ixlib=rb-1.2.1&q=80&w=120" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="https://images.unsplash.com/photo-1616072396315-ee2cdebf3098?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=86&ixlib=rb-1.2.1&q=80&w=120" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="mini-item">
            <img src="https://images.unsplash.com/photo-1614935361809-db7fbca257d3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=86&ixlib=rb-1.2.1&q=80&w=120" alt=""/>
          </SwiperSlide>
        </Swiper>
      </div>

    </div>
  )
}

export default Gallery
