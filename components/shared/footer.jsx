import React, { useState, useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import useTranslation from '../../hooks/useTranslation'
import { LanguageContext } from '../../contexts/language-context'

import useBodyOverflow from '../../hooks/useBodyOverflow'

import Popup from '../layouts/popup'
import Tyc from './tyc'

const Footer = () => {

  const [isLegalVisible, setLegalVisible] = useState(false);
  const [locale, setlocale] = useContext(LanguageContext);
  const { t } = useTranslation();
  const { toggleBodyOverflow } = useBodyOverflow();

  const changeLocale = (lang) => {
    setlocale(lang);
  };

  const handleLegalVisible = () => {

    setLegalVisible(prev => {
      toggleBodyOverflow();
      return !prev;
    })
  };

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-flex">

          <div className="footer-brand">
            <img src="/images/edina-logotype.png" alt="Logo Edina" width="155" height="38" />
          </div>

          <div className="footer-box">

            <div className="footer-lang">
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

            <div className="footer-share">
              <a className="share-item" href="https://www.instagram.com/edina_waterlight/" target='_blank' rel="noopener">
                <span>
                  <img src="/images/icon-instagram.png" alt="instagram waterlight" width="40" height="40" />
                </span>
              </a>
              <a className="share-item" href="https://www.linkedin.com/company/edinawaterlight/" target='_blank' rel="noopener">
                <span>
                  <img src="/images/icon-linkedin.png" alt="linkedin waterlight" width="40" height="40" />
                </span>
              </a>
              <a className="share-item" href="https://twitter.com/EdinaWaterlight" target='_blank' rel="noopener">
                <span>
                  <img src="/images/icon-twitter.png" alt="twitter waterlight" width="40" height="40" />
                </span>
              </a>
              <a className="share-item" href="https://www.youtube.com/channel/UC98Oz8Y2ij75arS125Li-Nw/featured" target='_blank' rel="noopener">
                <span>
                  <img src="/images/icon-youtube.png" alt="youtube waterlight" width="40" height="40" />
                </span>
              </a>
            </div>

          </div>

        </div>

        <div className="footer-info">
          <div>
            <span>{+new Date().getFullYear()} Waterlight, {t('footer.copyright')}</span>
          </div>
          <div className="link">
            <span onClick={handleLegalVisible}>{t('footer.tyc')}</span>
          </div>
        </div>

      </div>

      <AnimatePresence>
        {isLegalVisible && (
          <Popup handleVisible={handleLegalVisible}>
            <motion.div
              initial={{ opacity: .4 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <Tyc handleVisible={handleLegalVisible} />
            </motion.div>
          </Popup>
        )}
      </AnimatePresence>

    </footer>
  )
}

export default Footer
