import React, { useContext } from 'react'

import useTranslation from '../../hooks/useTranslation';
import { LanguageContext } from '../../contexts/language-context';



const Footer = () => {

  const [locale, setlocale] = useContext(LanguageContext);
  const { t } = useTranslation();

  const changeLocale = (lang) => {
    setlocale(lang);
  };

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-flex">

          <div className="footer-brand">
            <img src="/images/edina-logotype.png" alt="Edina" width="155" height="38" />
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
              <div className="share-item">
                <span><img src="/images/icon-instagram.png" alt="" width="42" height="42" /></span>
              </div>
              <div className="share-item">
                <span><img src="/images/icon-linkedin.png" alt="" width="42" height="42" /></span>
              </div>
              <div className="share-item">
                <span><img src="/images/icon-youtube.png" alt="" width="42" height="42" /></span>
              </div>
              <div className="share-item">
                <span><img src="/images/icon-share.png" alt="" width="42" height="42" /></span>
              </div>
            </div>
            
          </div>
          
        </div>

        <div className="footer-info">
          <div>
            <span>{+new Date().getFullYear()} Waterlight, todos los derechos reservados</span>
          </div>
          <div>
            <a href="#"><span>Aviso Legal</span></a>
            &nbsp; | &nbsp; 
            <a href="#"><span>Cookies</span></a>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer
