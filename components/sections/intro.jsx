import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper'

import useTranslation from '../../hooks/useTranslation';

SwiperCore.use([Pagination]);

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {

  const { t } = useTranslation();

  useEffect(() => {

    if( window.innerWidth <= 768 || screen.width <= 768 ) return true;

    const boxes = document.querySelectorAll('.intro .panel.container');

    const createTimeline = (element, index) => {

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          end: "bottom center",
          toggleClass: { targets: element, className: 'animate' },
          pin: true,
          pinSpacing: true,
          scrub: true,
          // markers: true,
        }
      })

      let headBox = element.querySelector('.head-box');

      tl.from(headBox, { opacity: 0, y: '-5%', })
        .to(element.querySelectorAll('.head-description'),
          { opacity: 0, y: '-15%' }, '+=1')
        .to(element.querySelectorAll('.head-title, .head-subtitle'),
          { opacity: 0, y: '-10%' })

    };

    boxes.forEach(createTimeline);

    return () => { };
  }, []);

  const handleSwiper = (swiper) => {
    let boxes = document.querySelectorAll('.intro .intro-box');
    let idx = swiper.realIndex;
    boxes.forEach(sub => sub.classList.remove('active'))
    boxes.item(idx).classList.add('active');
  }

  return (
    <section className="intro" id="intro">

      <div className="panel container">

        <div className="head-box box-left head-box-intro">
          <h2 className="head-title">{t('intro.stage1.title')} <br/>WaterLight?</h2>
          <div className="head-description">
            <p className="lead font-town font-medium">
              {t('intro.stage1.text1')}
            </p>
            <p className="opacity-9 font-raleway font-regular">
              {t('intro.stage1.text2')}
            </p>
          </div>
        </div>

      </div>

      <div className="intro-swiper">
        <Swiper loop="true" onSlideChange={handleSwiper} pagination={{el: '.intro-swiper .swiper-pagination', type: 'bullets'}}>
          <SwiperSlide className="intro-media">
            <img src="/images/intro-01.png" alt="Dispositivo energía renovable" width="960" height="1080" />
          </SwiperSlide>
          <SwiperSlide className="intro-media">
            <img src="/images/intro-02.png" alt="Electricity from water device" width="960" height="1080" />
          </SwiperSlide>
          <SwiperSlide className="intro-media">
            <img src="/images/intro-03.png" alt="Dispositivo Waterlight" width="960" height="1080" />
          </SwiperSlide>
          <SwiperSlide className="intro-media">
            <img src="/images/intro-04.png" alt="Waterlight Device" width="960" height="1080" />
          </SwiperSlide>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>

      <div className="panel container intro-box">

        <div className="head-box box-right head-bordered">
          <h1 className="head-subtitle">{t('intro.stage2.title')}</h1>
          <div className="head-description">
            <p className="lead">
              {t('intro.stage2.text')}
            </p>
          </div>
        </div>

      </div>

      <div className="panel container intro-box">

        <div className="head-box box-left head-bordered">
          <div className="head-subtitle mb-2">{t('intro.stage3.title')}</div>
          <div className="head-description">
            <p className="lead">
              {t('intro.stage3.text')} 
            </p>
          </div>
        </div>

      </div>

      <div className="panel container intro-box">

        <div className="head-box box-right head-bordered">
          <div className="head-subtitle">{t('intro.stage4.title')}</div>
          <div className="head-description">
            <p className="lead">
              {t('intro.stage4.text')}
            </p>
          </div>
        </div>

      </div>

      <div className="panel container intro-box">

        <div className="head-box box-left head-bordered">
          <div className="head-subtitle mb-2">{t('intro.stage5.title')}</div>
          <div className="head-description">
            <p className="lead">
              {t('intro.stage5.text')}
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Intro
