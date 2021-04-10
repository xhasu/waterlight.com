import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import useTranslation from '../../hooks/useTranslation';

gsap.registerPlugin(ScrollTrigger);

const Solution = () => {

  const { t } = useTranslation();

  useEffect(() => {

    gsap.from('.solution-head .head-title', {
      scrollTrigger: {
        trigger: '.solution-head',
        start: 'top center',
        end: 'bottom center',
        // toggleActions: 'play none none none',
        scrub: true,
        pin: true,
        // markers: true,
      },
      opacity: 0,
      // y: '-10%'
    })

    let tlbgs = gsap.timeline({
      scrollTrigger: {
        trigger: '.solution-head',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        // markers: true,
      }
    })

    tlbgs.from('.solution-background.bg-01', {opacity: 0})
      .from('.solution-background.bg-02', {opacity: 0})

    
    gsap.from('.solution-product', {
      scrollTrigger: {
        trigger: '.solution-main',
        start: 'top center',
        end: 'bottom bottom',
        toggleActions: 'play reverse play reverse',
        // markers: true,
      },
      x: '+25%',
      opacity: 0
    })

    let tlprods = gsap.timeline({
      scrollTrigger: {
        trigger: '.solution-body',
        start: 'top center',
        end: 'bottom top',
        pin: true,
        scrub: true,
        // markers: true,
      }
    })

    tlprods.from('.solution-product img:nth-child(1)', {opacity: 0})
      .to('.solution-product img:nth-child(1)', {display: 'none'})
      .from('.solution-product img:nth-child(2)', {opacity: 0})
      .to('.solution-product img:nth-child(2)', {display: 'none'})
      .from('.solution-product img:nth-child(3)', {opacity: 0})
      .to('.solution-product img:nth-child(3)', {display: 'none'})
    
    let tlsb = gsap.timeline({
      scrollTrigger: {
        trigger: '.solution-body',
        start: 'top center',
        end: 'bottom top',
        pin: true,
        scrub: true,
        // markers: true,
      }
    })

    const subtitles = document.querySelectorAll('.solution-body .head-subtitle');

    tlsb.from('.solution-body .head-description', {opacity: 0})
      .from(subtitles[0], { opacity: 0 })
      .to(subtitles[0], {opacity: 0, display: 'none'}, '+=2')
      .from(subtitles[1], { opacity: 0 })
      .to(subtitles[1], {opacity: 0, display: 'none'}, '+=2')
      .from(subtitles[2], { opacity: 0 })
      .to(subtitles[2], {opacity: 0, display: 'none'})
      .to('.solution-body .head-description', {opacity: 0})

    
    let tlsbox = gsap.timeline({
      scrollTrigger: {
        trigger: '.solution-box',
        start: 'top center',
        end: 'bottom center',
        pin: true,
        scrub: true,
        // markers: true,
      }
    })
    
    tlsbox.from('.solution-box .head-title', {opacity: 0, y: '-5%'})
      .from('.solution-box .head-description p', { opacity: 0, stagger: 1 })

    gsap.from('.solution-decorate', {
      scrollTrigger: {
        trigger: '.solution-main',
        start: 'top center',
        end: '90% bottom',
        toggleActions: 'play reverse play reverse',
        // markers: true,
      },
      opacity: 0,
      x: '-15%',
    })
    
    return () => {}
  }, [])

  return (
    <section className="solution" id="solution">

      <div className="solution-before"></div>

      <div className="solution-background bg-01"></div>
      <div className="solution-background bg-02"></div>

      <div className="panel container solution-head">

        <div className="head-info">
          <div className="head-title lead">{t('solution.title')} <br/> Waterlight?</div>
        </div>

      </div>

      <div className="solution-main">

        <div className="panel container solution-body">
          
          <div className="head-info">
            <div className="head-description">
              <p className="lead">
                {t('solution.subtitle')}
              </p>
            </div>
            <div className="head-subtitle lead"> {t('solution.text1')} </div>
            <div className="head-subtitle lead"> {t('solution.text2')} </div>
            <div className="head-subtitle lead"> {t('solution.text3')} </div>
          </div>

        </div>

        <div className="panel container solution-box">

          <div className="head-box">
            <div className="head-title">{t('solution.info.headline')}</div>
            <div className="head-description">
              <p className="lead font-town font-medium">
                {t('solution.info.description1')}
              </p>
              <p className="opacity-9 font-raleway font-regular">
                {t('solution.info.description2')}
              </p>
            </div>
          </div>

        </div>

        <div className="solution-product">
          <img src="/images/solution-product-01.png" alt=""/>
          <img src="/images/solution-product-02.png" alt=""/>
          <img src="/images/solution-product-03.png" alt=""/>
        </div>

      </div>

      <div className="solution-decorate">
        <img src="/images/side-decorate.png" alt="" width="104" height="271" />
      </div>

      <div className="solution-after"></div>

    </section>
  )
}

export default Solution
