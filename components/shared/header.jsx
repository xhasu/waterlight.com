import React, { useContext } from 'react'

import useTranslation from '../../hooks/useTranslation';
import { LanguageContext } from '../../contexts/language-context';

import Close from '../ui/close';

const Header = () => {

  const [locale, setlocale] = useContext(LanguageContext);
  const { t } = useTranslation();

  const changeLocale = (lang) => {
    setlocale(lang);
  };

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

      <div className="header-nav">
        <span className="nav-close">
          <Close />
        </span>
        <div className="nav-brand">
          <img src="/images/logotype.png" alt="waterlight" width="76" height="33" />
        </div>
        <div className="nav-content">
          <ul className="header-links">
            <li>{t('header.what')}</li>
            <li>{t('header.why')}</li>
            <li>{t('header.how')}</li>
          </ul>
          <div className="nav-actions">
            <a href="#" className="btn btn-secondary">Únete aquí a WATERLIGHT</a>
          </div>
        </div>
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
      </div>
    </>
  )
}

export default Header
