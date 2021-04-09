import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import useTranslation from '../../hooks/useTranslation';

gsap.registerPlugin(ScrollTrigger);

const Solution = () => {

  const { t } = useTranslation();

  useEffect(() => {

    let tlsh = gsap.timeline({
      scrollTrigger: {
        trigger: '.solution-head',
        start: 'top center',
        end: 'bottom center',
        pin: true,
        pinSpacing: false,
        scrub: true,
        // markers: true,
      }
    })

    tlsh.set('.solution-background img', {opacity: 0})

    tlsh.from('.solution-head .head-info', {opacity: 0, y: '-10%'})
      .to('.solution-background img:first-child', {opacity: 1})
      .to('.solution-head .head-info', {opacity: 0, y: '-5%'}, '+=2')
      .to('.solution-background img:first-child', {opacity: 0, y: '-15%'})
      .from('.solution-background img:last-child', {opacity: 0, y: '+15%', x: '+2%' })

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
      .to(subtitles[0], {opacity: 0, display: 'none'}, '+=1')
      .from(subtitles[1], { opacity: 0 })
      .to(subtitles[1], {opacity: 0, display: 'none'}, '+=1')
      .from(subtitles[2], { opacity: 0 })
      .to(subtitles[2], {opacity: 0, display: 'none'}, '+=1')
      .to('.solution-body .head-description', {opacity: 0})
      // .from('.solution-background img:last-child', {opacity: 1} , '+=2')
      // .to('.solution-background img:last-child', {opacity: 0 , y: '-5%'})


    
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
      .from('.solution-box .head-description p', { opacity: 0, stagger: 0.5 })

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

      <div className="solution-background">
        <img src="/images/solution-background-01.jpg" alt="waterlight" width="1920" height="955" />
        <img src="/images/solution-background-02.jpg" alt="waterlight" width="1920" height="955" />
      </div>

      <div className="solution-product">
          <img src="/images/solution-product-01.png" alt=""/>
        </div>

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

      </div>

      <div className="solution-decorate">
        <img src="/images/side-decorate.png" alt="" width="104" height="271" />
      </div>

    </section>
  )
}

export default Solution
