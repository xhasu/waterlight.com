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
      <div className="footer-container">
        <div className="footer-brand">
          <img src="/images/logotype.png" alt="Waterlight" width="76" height="33" />
        </div>
        <div className="footer-share">
          <div className="share-item"> <span>FB</span> </div>
          <div className="share-item"> <span>IG</span> </div>
          <div className="share-item"> <span>TW</span> </div>
          <div className="share-item"> <span>SH</span> </div>
        </div>
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
        <div className="footer-info">
          <span>{+new Date().getFullYear()} Waterlight, todos los derechos reservados</span> &nbsp;
          | &nbsp;
          <a href="#" target="_blank"><span>Aviso Legal</span></a> <br />
          <a href="#" target="_blank"><span>Contacto Politicas de Privacidad</span></a>
          &nbsp; | &nbsp;
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
