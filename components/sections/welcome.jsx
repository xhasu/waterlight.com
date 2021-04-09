import React, { useState } from 'react'

import useBodyOverflow from '../../hooks/useBodyOverflow';
import useTranslation from '../../hooks/useTranslation';

import Video from '../ui/video'
import Popup from '../layouts/popup'


const Welcome = () => {

  const { t } = useTranslation();
  const { toggleBodyOverflow } = useBodyOverflow();

  const [isVideoVisible, setVideoVisible] = useState(false);

  const handleVideoVisible = () => {

    setVideoVisible(prev => {
      toggleBodyOverflow();
      return !prev;
    })
  };

  return (
    <section className="welcome" id="welcome">
      
      <div className="container">
        <div className="welcome-media"></div>
        <div className="welcome-logo">
          <img src="/images/welcome-logo.png" alt="Waterlight" width="493" height="300" />
        </div>
        <div className="welcome-caption" onClick={handleVideoVisible}>
          {t('welcome.video')}
        </div>
        <div className="welcome-icon">
          <img src="/images/icon-arrow-scroll.png" alt="Waterlight" width="30" height="20" />
        </div>
      </div>

      {isVideoVisible && (
        <Popup handleVisible={handleVideoVisible}>
          <div className="video-title">{t('showcase.title')}</div>
          <Video />
        </Popup>
      )}

    </section>
  )
}

export default Welcome
