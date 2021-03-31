import React, { useState, useEffect, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import useBodyOverflow from '../../hooks/useBodyOverflow';
import useTranslation from '../../hooks/useTranslation';
import { LanguageContext } from '../../contexts/language-context';

import Close from '../ui/close';

gsap.registerPlugin(ScrollTrigger);

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  const [locale, setlocale] = useContext(LanguageContext);
  const { t } = useTranslation();
  const { toggleBodyOverflow } = useBodyOverflow();

  useEffect(() => {

    /*let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.experience',
        start: 'top top',
        end: 'bottom top',
        // pin: true,
        toggleClass: { targets: 'header.header', className: 'dark' },
        scrub: true,
        markers: true,
      }
    })*/

    // tl.from('.experience .head-title.xl', {opacity: 0})
    
    return () => { }
  }, [])

  const changeLocale = (lang) => {
    setlocale(lang);
  };

  const changeShowMenu = () => {
    setShowMenu(prev => {
      let value = !prev
      toggleBodyOverflow();
      return value;
    });
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-brand">
            <img src="/images/brand.png" alt="Waterlight" width="81" height="37" />
          </div>
          <ul className="header-links">
            <li>{t('header.what')}</li>
            <li>{t('header.why')}</li>
            <li>{t('header.how')}</li>
            <li>
              <span
                className={`es-ES ${locale}`}
                onClick={() => { changeLocale('es') }}>
                ES
                </span>
              &nbsp; | &nbsp;
              <span
                className={`en-EN ${locale}`}
                onClick={() => { changeLocale('en') }}>
                EN
                </span>
            </li>
          </ul>
        </div>
      </header>

      <div className="nav-bar" onClick={changeShowMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <AnimatePresence>
        {showMenu && (
          <div className="header-nav">
            <span className="nav-close" onClick={changeShowMenu}>
              <Close />
            </span>
            <div className="nav-brand">
              <motion.div
                initial={{opacity: 0,y: -50}}
                animate={{opacity: 1,y: 0}}
                exit={{opacity: .4}}>
                <img src="/images/logotype.png" alt="waterlight" width="76" height="33" />
              </motion.div>
            </div>
            <div className="nav-content">
              <motion.div
                initial={{opacity: 0,x: -400}}
                animate={{opacity: 1,x: 0}}
                exit={{opacity: .4}}>
                <ul className="header-links">
                  <li>{t('header.what')}</li>
                  <li>{t('header.why')}</li>
                  <li>{t('header.how')}</li>
                </ul>
              </motion.div>
              <div className="nav-actions">
                <a href="#" className="btn btn-secondary">Preordena aquí</a>
              </div>
            </div>
            <motion.div
              initial={{opacity: 0,y: 50}}
              animate={{opacity: 1,y: 0}}
              exit={{opacity: .4}}> 
              <div className="nav-lang">
                <span
                  className={`es-ES ${locale}`}
                  onClick={() => { changeLocale('es') }}>
                  ES
                  </span>
                &nbsp; | &nbsp;
                <span
                  className={`en-EN ${locale}`}
                  onClick={() => { changeLocale('en') }}>
                  EN
                  </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </>
  )
}

export default Header
