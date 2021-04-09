import React, { useContext } from 'react'

import useTranslation from '../../hooks/useTranslation';
import { LanguageContext } from '../../contexts/language-context';

const Footer = () => {

  const [locale, setlocale] = useContext(LanguageContext);
  const { t } = useTranslation();

  const changeLocale = (lang) => {
    setlocale(lang);
  };

  const copyClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(text => { console.log(text) })
      .catch(err => console.log(err));
  }

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
              <a className="share-item" href="https://www.instagram.com/" target='_blank' rel="noopener">
                <span>
                  <img src="/images/icon-instagram.png" alt="instagram waterlight" width="40" height="40" />
                </span>
              </a>
              <a className="share-item" href="https://www.linkedin.com/" target='_blank' rel="noopener">
                <span>
                  <img src="/images/icon-linkedin.png" alt="linkedin waterlight" width="40" height="40" />
                </span>
              </a>
              <a className="share-item" href="https://www.youtube.com/" target='_blank' rel="noopener">
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
          <div>
            <a href="#"><span>{t('footer.tyc')}</span></a>
            &nbsp; | &nbsp;
            <a href="#"><span>Cookies</span></a>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer
