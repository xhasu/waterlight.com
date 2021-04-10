import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import useTranslation from '../../hooks/useTranslation';

gsap.registerPlugin(ScrollTrigger);


const Solution = () => {

  const { t } = useTranslation();
  /*
  useEffect(() => {

    // solution last stage
    let tlsbox = gsap.timeline({
      scrollTrigger: {
        trigger: '.solution-box',
        start: 'top center',
        // end: 'bottom center',
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: true,
      }
    })
    
    tlsbox.from('.solution-box .head-title', {opacity: 0, y: '-5%'})
      .from('.solution-box .head-description p', { opacity: 0, stagger: 1 })
    
    return () => { }
  }, [])*/

  return (
    <div className="solution">
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
  )
}

export default Solution
