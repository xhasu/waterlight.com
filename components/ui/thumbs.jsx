import React, { useContext } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import { GalleryContext } from '../../contexts/gallery-context'

const Thumbs = ({handleVisible}) => {

  const [, setPosition] = useContext(GalleryContext);

  const handleClick = (pos) => {
    handleVisible();
    setPosition(pos);
  }

  return (
    <div className="thumbs">
      <div className="thumbs-container">
        <Swiper freeMode={true} slidesPerView="auto" breakpoints={{768: {spaceBetween: 15}}} spaceBetween={5} loop={true} grabCursor={true} threshold={30}>
          <SwiperSlide className="thumb-item" onClick={() => {handleClick(8)}}>
            <img src="/images/gallery/preview/11.jpg" alt=" Sustainable energy for communities without access to energy" width="368" height="262" />
          </SwiperSlide>
          <SwiperSlide className="thumb-item" onClick={() => {handleClick(1)}}>
            <img src="/images/gallery/preview/04.jpg" alt="Sustainable energies" width="368" height="262" />
          </SwiperSlide>
          <SwiperSlide className="thumb-item" onClick={() => {handleClick(10)}}>
            <img src="/images/gallery/preview/13.jpg" alt="Luz portátil para comunidades sin energía" width="368" height="262" />
          </SwiperSlide>
          <SwiperSlide className="thumb-item" onClick={() => {handleClick(3)}}>
            <img src="/images/gallery/preview/06.jpg" alt="Dispositivo energía alternativa renovable" width="368" height="262" />
          </SwiperSlide>
          <SwiperSlide className="thumb-item" onClick={() => {handleClick(12)}}>
            <img src="/images/gallery/preview/15.jpg" alt="Niños estudiando de noche con Waterlight" width="368" height="262" />
          </SwiperSlide>
          <SwiperSlide className="thumb-item" onClick={() => {handleClick(5)}}>
            <img src="/images/gallery/preview/08.jpg" alt="Comunidades sin energía eléctrica" width="368" height="262" />
          </SwiperSlide>
          <SwiperSlide className="thumb-item" onClick={() => {handleClick(6)}}>
            <img src="/images/gallery/preview/09.jpg" alt="dispositivo que generar luz con agua salada" width="368" height="262" />
          </SwiperSlide>
          <SwiperSlide className="thumb-item" onClick={() => {handleClick(7)}}>
            <img src="/images/gallery/preview/10.jpg" alt="Communities without electricity" width="368" height="262" />
          </SwiperSlide>
        </Swiper>
        <Swiper initialSlide={0} freeMode={true} slidesPerView="auto" breakpoints={{768: {spaceBetween: 15}}} spaceBetween={5} loop={true} grabCursor={true} slidesOffsetBefore={-184}>
          
          <SwiperSlide className="thumb-item" onClick={() => {handleClick(0)}}>
            <img src="/images/gallery/preview/03.jpg" alt="Renewable energy sources" width="368" height="262" />
          </SwiperSlide>
          <SwiperSlide className="thumb-item" onClick={() => {handleClick(9)}}>
            <img src="/images/gallery/preview/12.jpg" alt="Green electricity" width="368" height="262" />
          </SwiperSlide>
          <SwiperSlide className="thumb-item" onClick={() => {handleClick(2)}}>
            <img src="/images/gallery/preview/05.jpg" alt="Electricity from water Waterlight" width="368" height="262" />
          </SwiperSlide>
          <SwiperSlide className="thumb-item" onClick={() => {handleClick(11)}}>
            <img src="/images/gallery/preview/14.jpg" alt="Energy alternatives Waterlight" width="368" height="262" />
          </SwiperSlide>
          <SwiperSlide className="thumb-item" onClick={() => {handleClick(4)}}>
            <img src="/images/gallery/preview/07.jpg" alt="Artesanías diseño Wayuu" width="368" height="262" />
          </SwiperSlide>
          <SwiperSlide className="thumb-item" onClick={() => {handleClick(13)}}>
            <img src="/images/gallery/preview/16.jpg" alt="nuevas energías renovables dispositivo" width="368" height="262" />
          </SwiperSlide>
          <SwiperSlide className="thumb-item" onClick={() => {handleClick(14)}}>
            <img src="/images/gallery/preview/17.jpg" alt="Artesanías diseño Wayuu" width="368" height="262" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Thumbs
