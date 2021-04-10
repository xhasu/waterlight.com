import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import useTranslation from '../../hooks/useTranslation';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {

  const { t } = useTranslation();

  useEffect(() => {

    ScrollTrigger.create({
      trigger: '.experience',
      start: 'top top',
      end: 'bottom top',
      toggleClass: { targets: 'header.header', className: 'dark' },
      scrub: true,
      // markers: true,
      refreshPriority: -1
    })

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.experience .experience-intro',
        start: 'top center',
        end: 'bottom center',
        pin: true,
        // pinSpacing: false,
        scrub: true,
        refreshPriority: -1,
        // markers: true,
      }
    })

    tl.from('.experience-intro .head-description', {opacity: 0})
      .from('.experience-intro .head-title.xl', {opacity: 0, y: '15%'})

    let boxes = document.querySelectorAll('.experience .head-box.compact');

    boxes.forEach(item => {

      let tlitem = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top center',
          end: 'bottom bottom',
          // pin: true,
          scrub: true,
          refreshPriority: -1,
          // markers: true,
        }
      })

      tlitem.from(item, {opacity: 0, y: '-15%'})

    })
    
    return () => { }
  }, [])

  return (
    <section className="experience" id="experience">
      <div className="container">

        <div className="panel compact experience-intro">
          <div className="head-box expand">
            <div className="head-description">
              <p className="lead font-regular">{t('experience.subtitle')}</p>
            </div>
            <div className="head-title xl">{t('experience.title')}</div>
          </div>
        </div>

        <div className="panel compact">
          <div className="head-box box-right compact">
            <div className="head-subtitle">{t('experience.stage1.title')}</div>
            <p>{t('experience.stage1.text')}</p>
          </div>
        </div>

        <div className="panel compact">
          <div className="head-box box-right compact">
            <div className="head-subtitle">{t('experience.stage2.title')}</div>
            <p>{t('experience.stage2.text')}</p>
          </div>
        </div>

        <div className="panel compact">
          <div className="head-box box-right compact">
            <div className="head-subtitle">{t('experience.stage3.title')}</div>
            <p>{t('experience.stage3.text')}</p>
          </div>
        </div>

        <div className="panel compact">
          <div className="head-box box-right compact">
            <div className="head-subtitle">{t('experience.stage4.title')}</div>
            <p>{t('experience.stage4.text')}</p>
          </div>
        </div>

        <div className="panel compact">
          <div className="head-box box-right compact">
            <div className="head-subtitle">{t('experience.stage5.title')}</div>
            <p>{t('experience.stage5.text')}</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
