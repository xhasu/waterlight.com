import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

const Gallery = () => {
  return (
    <div className="gallery">

      <div className="gallery-head">
        <div className="gallery-title">WATERLIGHT en la guajira</div>
        <div className="gallery-subtitle">Galería</div>
      </div>

      <div className="gallery-content">

        <Swiper className="gallery-swiper" loop={true}>
          <SwiperSlide className="gallery-slide">
            <img src="https://images.unsplash.com/photo-1614942827452-79da2c219944?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="https://images.unsplash.com/photo-1614942827452-79da2c219944?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt=""/>
          </SwiperSlide>
          <SwiperSlide className="gallery-slide">
            <img src="https://images.unsplash.com/photo-1614942827452-79da2c219944?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt=""/>
          </SwiperSlide>
        </Swiper>

      </div>

      <div className="gallery-thumbs">
        <div className="thumb-item">
          <img src="https://images.unsplash.com/photo-1614942827452-79da2c219944?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt=""/>
        </div>
        <div className="thumb-item">
          <img src="https://images.unsplash.com/photo-1614942827452-79da2c219944?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt=""/>
        </div>
        <div className="thumb-item">
          <img src="https://images.unsplash.com/photo-1614942827452-79da2c219944?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" alt=""/>
        </div>
      </div>

    </div>
  )
}

export default Gallery
