import React, { useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'

import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import useTranslation from '../../hooks/useTranslation';

gsap.registerPlugin(ScrollTrigger);
SwiperCore.use([Pagination]);

const Inspire = () => {

  const { t } = useTranslation();
  
  useEffect(() => {

    if( window.innerWidth <= 768 || screen.width <= 768 ) return true;

    // inspire background 
    let tlbg1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.inspire-head',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    })

    tlbg1.from('.inspire-background.bg-01', {opacity: 0})
      .to('.inspire-background.bg-01', {opacity: 0, duration: 0.5})
      .from('.inspire-background.bg-02', {opacity: 0, duration: 2})


    // timeline head
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.inspire-head',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse',
        // scrub: true,
        pin: true,
        // markers: true,
      }
    })
    
    tl.from('.inspire-head .head-info', {opacity: 0})

    // inspire body
    let tlsb = gsap.timeline({
      scrollTrigger: {
        trigger: '.inspire-body',
        start: 'top center',
        end: 'bottom -200%',
        pin: true,
        scrub: true,
        // markers: true,
      }
    })

    const subtitles = document.querySelectorAll('.inspire-body .head-subtitle');

    tlsb.from('.inspire-body .head-description', {opacity: 0})
      .from(subtitles[0], { opacity: 0 })
      .to(subtitles[0], {opacity: 0, display: 'none', duration: 0})
      .from(subtitles[1], { opacity: 0 })
      .to(subtitles[1], {opacity: 0, display: 'none', duration: 0})
      .from(subtitles[2], { opacity: 0 })
      .to(subtitles[2], {opacity: 0, display: 'none', duration: 0})
      .to('.inspire-body .head-description', {opacity: 0})
    
    // inspire decorate
    gsap.from('.inspire .side-decorate', {
      scrollTrigger: {
        trigger: '.inspire-body',
        start: 'top center',
        end: 'bottom -200%',
        toggleActions: 'play reverse play reverse',
        // markers: true,
      },
      opacity: 0,
      x: '-15%',
    })

    // inspire product side
    gsap.from('.inspire-product', {
      scrollTrigger: {
        trigger: '.inspire-body',
        start: 'top center',
        end: 'bottom -200%',
        toggleActions: 'play reverse play reset',
        // markers: true,
      },
      x: '+25%',
      opacity: 0
    })

    let tlprods = gsap.timeline({
      scrollTrigger: {
        trigger: '.inspire-body',
        start: 'top center',
        end: 'bottom -200%',
        scrub: true,
        // markers: true,
      }
    })

    tlprods.from('.inspire-product img:nth-child(1)', {display: 'block'})
      .to('.inspire-product img:nth-child(1)', {display: 'none', duration: 0})
      .from('.inspire-product img:nth-child(2)', {display: 'block'})
      .to('.inspire-product img:nth-child(2)', {display: 'none', duration: 0})
      .from('.inspire-product img:nth-child(3)', {display: 'block'})
      .to('.inspire-product img:nth-child(3)', {display: 'none', opacity: 0})
    
    return () => {}
  }, [])

  const handleSwiper = (swiper) => {
    let subtitles = document.querySelectorAll('.inspire-body .head-subtitle');
    let idx = swiper.realIndex;
    subtitles.forEach(sub => sub.classList.remove('active'))
    subtitles.item(idx).classList.add('active');
  }

  return (
    <section className="inspire" id="inspire">

      <div className="inspire-sticky-before"></div>

      <div className="inspire-background bg-01"></div>
      <div className="inspire-background bg-02"></div>

      <div className="inspire-product">
        <img src="/images/inspire-product-01.png" alt=""/>
        <img src="/images/inspire-product-02.png" alt=""/>
        <img src="/images/inspire-product-03.png" alt=""/>
      </div>

      <div className="side-decorate">
        <img src="/images/side-decorate.png" alt="" width="104" height="271" />
      </div>

      <div className="panel container inspire-head">

        <div className="head-info">
          <div className="head-title lead">{t('inspire.title')} <br/> Waterlight?</div>
        </div>

      </div>

      <div className="container inspire-body">
        
        <div className="head-info">
          <div className="head-description">
            <p className="lead"> {t('inspire.subtitle')} </p>
          </div>
          <div className="inspire-swiper">
            <Swiper loop="true" onSlideChange={handleSwiper} pagination={{el: '.inspire-swiper .swiper-pagination', type: 'bullets'}}>
              <SwiperSlide className="inspire-media">
                <img src="/images/inspire-media-01.png" alt="" width="640" />
              </SwiperSlide>
              <SwiperSlide className="inspire-media">
                <img src="/images/inspire-media-02.png" alt="" width="640" />
              </SwiperSlide>
              <SwiperSlide className="inspire-media">
                <img src="/images/inspire-media-03.png" alt="" width="640" />
              </SwiperSlide>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
          <div className="head-subtitle lead"> {t('inspire.text1')} </div>
          <div className="head-subtitle lead"> {t('inspire.text2')} </div>
          <div className="head-subtitle lead"> {t('inspire.text3')} </div>
        </div>

      </div>

      <div className="inspire-sticky-after"></div>

    </section>
  )
}

export default Inspire
