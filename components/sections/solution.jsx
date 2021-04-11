import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import useTranslation from '../../hooks/useTranslation';

gsap.registerPlugin(ScrollTrigger);

const Solution = () => {

  const { t } = useTranslation();
  
  useEffect(() => {

    // solution last stage
    let tlsbox = gsap.timeline({
      scrollTrigger: {
        trigger: '.solution-box',
        start: 'top 30%',
        end: 'bottom center',
        pin: true,
        scrub: true,
        // markers: true,
      }
    })
    
    tlsbox.from('.solution-box .head-title', {opacity: 0, y: '-5%'})
      .from('.solution-box .head-description p', { opacity: 0, stagger: 1 })

    // solution background
    gsap.from('.solution-background', {
      scrollTrigger: {
        trigger: '.solution-box',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse',
        // markers: true,
      },
      opacity: 0,
    }) 

    // solution product 
    gsap.to('.solution-product', {
      scrollTrigger: {
        trigger: '.solution-product',
        start: 'top 30%',
        toggleActions: 'play reverse play reverse',
        // markers: true,
      },
      opacity: 0,
    }) 

    // solution decorate
    gsap.from('.side-decorate', {
      scrollTrigger: {
        trigger: '.solution-box',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse',
        // markers: true,
      },
      opacity: 0,
      x: '-15%',
    })

    // solution decorate
    gsap.from('.solution-decorate', {
      scrollTrigger: {
        trigger: '.solution-box',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse',
        // markers: true,
      },
      opacity: 0,
      y: '-50%',
    })
    
    return () => { }
  }, [])

  return (
    <div className="solution">

      <div className="solution-background"></div>

      <div className="panel container solution-box">

        <div className="head-box">
          <div className="head-title">{t('solution.headline')}</div>
          <div className="head-description">
            <p className="lead font-town font-medium">
              {t('solution.description1')}
            </p>
            <p className="opacity-9 font-raleway font-regular">
              {t('solution.description2')}
            </p>
          </div>
        </div>

      </div>

      <div className="solution-product">
        <img src="/images/solution-product.png" alt=""/>
      </div>

      <div className="side-decorate">
        <img src="/images/side-decorate.png" alt="" width="104" height="271" />
      </div>

      <div className="solution-decorate">
        <img src="/images/solution-decorate.png" alt="" width="284" height="1023" />
      </div>
    </div>
  )
}

export default Solution
