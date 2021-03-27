import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

const Thumbs = () => {
  return (
    <div className="thumbs">
      <div className="thumbs-container">
        <Swiper freeMode={true} slidesPerView="auto" spaceBetween={15} loop={true} centeredSlides={true} grabCursor={true}>
          <SwiperSlide>
            <div className="thumb-item">
              <img src="https://images.unsplash.com/photo-1615570640471-c3be64198dcb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=262&ixlib=rb-1.2.1&q=80&w=368" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb-item">
              <img src="https://images.unsplash.com/photo-1615224573119-b9ca15f05930?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=262&ixlib=rb-1.2.1&q=80&w=368" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb-item">
              <img src="https://images.unsplash.com/photo-1609150996011-63c238b520fa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=262&ixlib=rb-1.2.1&q=80&w=368" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb-item">
              <img src="https://images.unsplash.com/photo-1615065592122-00001e367020?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=262&ixlib=rb-1.2.1&q=80&w=368" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb-item">
              <img src="https://images.unsplash.com/photo-1614958708511-3fa50b0bdd8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=262&ixlib=rb-1.2.1&q=80&w=368" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper initialSlide={0} freeMode={true} slidesPerView="auto" spaceBetween={15} loop={true} grabCursor={true} slidesOffsetBefore={-184}>
          <SwiperSlide>
            <div className="thumb-item">
              <img src="https://images.unsplash.com/photo-1615570640471-c3be64198dcb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=262&ixlib=rb-1.2.1&q=80&w=368" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb-item">
              <img src="https://images.unsplash.com/photo-1615224573119-b9ca15f05930?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=262&ixlib=rb-1.2.1&q=80&w=368" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb-item">
              <img src="https://images.unsplash.com/photo-1609150996011-63c238b520fa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=262&ixlib=rb-1.2.1&q=80&w=368" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb-item">
              <img src="https://images.unsplash.com/photo-1615065592122-00001e367020?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=262&ixlib=rb-1.2.1&q=80&w=368" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="thumb-item">
              <img src="https://images.unsplash.com/photo-1614958708511-3fa50b0bdd8f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=262&ixlib=rb-1.2.1&q=80&w=368" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Thumbs
