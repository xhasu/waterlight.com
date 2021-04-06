import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import useBodyOverflow from '../../hooks/useBodyOverflow';

import Video from '../ui/video'
import Popup from '../layouts/popup'


const Welcome = () => {

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
          Ver video
        </div>
        <div className="welcome-icon"></div>
      </div>

      {isVideoVisible && (
        <Popup handleVisible={handleVideoVisible}>
          <div className="video-title">Waterlight en la guajira</div>
          <Video />
        </Popup>
      )}

    </section>
  )
}

export default Welcome
