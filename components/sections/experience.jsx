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
      toggleClass: { targets: 'header.header, .nav-bar', className: 'dark' },
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
          end: '150% center',
          // pin: true,
          scrub: true,
          refreshPriority: -1,
          // markers: true,
        }
      })

      tlitem.from(item, {opacity: 0})

    })

    let tlprod = gsap.timeline({
      scrollTrigger: {
        trigger: '.experience-armed .armed',
        start: '40px center',
        end:  'bottom center',
        scrub: true,
        refreshPriority: -1,
        // markers: true,
      }
    })

    tlprod.from('.armed img:nth-child(1)', {opacity: 0})
      .from('.armed img:nth-child(2)', {opacity: 0})
      .from('.armed img:nth-child(3)', {opacity: 0})
      .from('.armed img:nth-child(4)', {opacity: 0})
      .from('.armed img:nth-child(5)', {opacity: 0})
      .from('.armed img:nth-child(6)', {opacity: 0, y: -200}, '<')
      .from('.armed img:nth-child(7)', {opacity: 0, x: -150}, '<')
      .from('.armed img:nth-child(8)', {opacity: 0, x: 150}, '<')
      .from('.armed img:nth-child(9)', {opacity: 0.5, duration: 2})
      .from('.armed img:nth-child(10)', {opacity: 0})

    return () => { }
  }, [])

  return (
    <section className="experience" id="experience">
      <div className="container">

        <div className="panel experience-intro">
          <div className="head-box expand">
            <div className="head-description">
              <p className="lead font-regular">{t('experience.subtitle')}</p>
            </div>
            <div className="head-title xl">{t('experience.title')}</div>
          </div>
        </div>

        <div className="panel">
          <div className="head-box box-right compact">
            <div className="experience-media">
              <br/>
              <br/>
              <img src="/images/product/01.png" alt=""/>
              <img src="/images/product/02.png" alt=""/>
            </div>
            <div className="head-subtitle">{t('experience.stage1.title')}</div>
            <p>{t('experience.stage1.text')}</p>
          </div>
        </div>

        <div className="panel">
          <div className="head-box box-right compact">
            <div className="experience-media">
              <img src="/images/product/03.png" alt=""/>
            </div>
            <div className="head-subtitle">{t('experience.stage2.title')}</div>
            <p>{t('experience.stage2.text')}</p>
          </div>
        </div>

        <div className="panel">
          <div className="head-box box-right compact">
            <div className="experience-media">
              <img src="/images/product/hook.png" alt=""/>
            </div>
            <div className="head-subtitle">{t('experience.stage3.title')}</div>
            <p>{t('experience.stage3.text')}</p>
          </div>
        </div>

        <div className="panel">
          <div className="head-box box-right compact">
            <div className="experience-media">
              <img src="/images/product/06.png" alt=""/>
            </div>
            <div className="head-subtitle">{t('experience.stage4.title')}</div>
            <p>{t('experience.stage4.text')}</p>
          </div>
        </div>

        <div className="panel">
          <div className="head-box box-right compact">
            <div className="experience-media">
              <img src="/images/product/07.png" alt=""/>
            </div>
            <div className="head-subtitle">{t('experience.stage5.title')}</div>
            <p>{t('experience.stage5.text')}</p>
          </div>
        </div>

        <div className=" experience-armed">
          <div className="armed">
            <img src="/images/product/01.png" alt="" />
            <img src="/images/product/02.png" alt="" />
            <img src="/images/product/03.png" alt="" />
            <img src="/images/product/04.png" alt="" />
            <img src="/images/product/05.png" alt="" />
            <img src="/images/product/hook.png" className="img-hook" alt="" />
            <img src="/images/product/part-left.png" className="img-part-left" alt="" />
            <img src="/images/product/part-right.png" className="img-part-right" alt="" />
            <img src="/images/product/06.png" alt="Waterlight Waterproof" />
            <img src="/images/product/07.png" alt="" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience
