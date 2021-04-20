import React, { useState, useEffect } from 'react'

import useBodyOverflow from '../../hooks/useBodyOverflow';
import useTranslation from '../../hooks/useTranslation';

import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import Video from '../ui/video'
import Popup from '../layouts/popup'

gsap.registerPlugin(ScrollTrigger);

const Welcome = () => {

  const { t } = useTranslation();
  const { toggleBodyOverflow } = useBodyOverflow();

  const [isVideoVisible, setVideoVisible] = useState(false);

  const handleVideoVisible = () => {

    setVideoVisible(prev => {
      toggleBodyOverflow();
      return !prev;
    })
  };

  useEffect(() => {

    gsap.to('.welcome .container', {
      scrollTrigger: {
        trigger: '.award',
        start: 'top 60px',
        toggleActions: 'play reverse play reverse',
        // markers: true,
      },
      opacity: 0,
    })
    
    return () => { }
  }, [])

  return (
    <section className="welcome" id="welcome">
      
      <div className="container">
        <div className="welcome-logo">
          <img src="/images/welcome-logo.png" alt="Logo Waterlight Device" width="493" height="300" />
        </div>
        <div className="welcome-caption" onClick={handleVideoVisible}>
          {t('welcome.video')}
        </div>
        <div className="welcome-icon">
          <img src="/images/icon-arrow-scroll.png" alt="Scroll icon" width="30" height="20" />
        </div>
      </div>

      {isVideoVisible && (
        <Popup handleVisible={handleVideoVisible}>
          <div className="video-title">{t('showcase.title')}</div>
          <Video />
        </Popup>
      )}

    </section>
  )
}

export default Welcome
