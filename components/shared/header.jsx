import React, { useState, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import useBodyOverflow from '../../hooks/useBodyOverflow';
import useTranslation from '../../hooks/useTranslation';
import { LanguageContext } from '../../contexts/language-context';

import Close from '../ui/close';

const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  const [locale, setlocale] = useContext(LanguageContext);
  const { t } = useTranslation();
  const { toggleBodyOverflow } = useBodyOverflow();

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
            <a href="#welcome">
              <img src="/images/brand.png" alt="Waterlight" width="81" height="37" />
            </a>
          </div>
          <ul className="header-links">
            <li><a href="#intro">{t('header.what')}</a></li>
            <li><a href="#inspire">{t('header.why')}</a></li>
            <li><a href="#experience">{t('header.how')}</a></li>
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
                  <li onClick={changeShowMenu}><a href="#intro">{t('header.what')}</a></li>
                  <li onClick={changeShowMenu}><a href="#inspire">{t('header.why')}</a></li>
                  <li onClick={changeShowMenu}><a href="#experience">{t('header.how')}</a></li>
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
