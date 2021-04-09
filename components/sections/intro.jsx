import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import useTranslation from '../../hooks/useTranslation';

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {

  const { t } = useTranslation();

  useEffect(() => {

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

  return (
    <section className="intro" id="intro">

      <div className="blurred left"></div>
      <div className="blurred right"></div>

      <div className="panel container">

        <div className="head-box box-left head-box-intro">
          <div className="head-title">{t('intro.stage1.title')} <br/>WaterLight?</div>
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

      <div className="panel container">

        <div className="head-box box-right head-bordered">
          <div className="head-subtitle">{t('intro.stage2.title')}</div>
          <div className="head-description">
            <p className="lead">
              {t('intro.stage2.text')}
            </p>
          </div>
        </div>

      </div>

      <div className="panel container">

        <div className="head-box box-left head-bordered">
          <div className="head-subtitle mb-2">{t('intro.stage3.title')}</div>
          <div className="head-description">
            <p className="lead">
              {t('intro.stage3.text')} 
            </p>
          </div>
        </div>

      </div>

      <div className="panel container">

        <div className="head-box box-right head-bordered">
          <div className="head-subtitle">{t('intro.stage4.title')}</div>
          <div className="head-description">
            <p className="lead">
              {t('intro.stage4.text')}
            </p>
          </div>
        </div>

      </div>

      <div className="panel container">

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
