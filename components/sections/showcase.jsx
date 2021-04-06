import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import useBodyOverflow from '../../hooks/useBodyOverflow';

import Video from '../ui/video'
import Thumbs from '../ui/thumbs'
import Popup from '../layouts/popup'
import Gallery from '../ui/gallery'

const Showcase = () => {

  const { toggleBodyOverflow } = useBodyOverflow();

  const [isGalleryVisible, setGalleryVisible] = useState(false);
  const enableFullScreenMode = false;

  const handleGalleryVisible = () => {

    setGalleryVisible(prev => {
      let value = !prev;
      toggleBodyOverflow();
      if (enableFullScreenMode && document.fullscreenEnabled) {
        if (value) document.documentElement.requestFullscreen()
        else document.fullscreenElement && document.exitFullscreen().catch(err => console.log(err))
      }
      return value;
    })
  };

  return (
    <section className="showcase">
      <h2 className="showcase-title">WATERLIGHT en la Guajira</h2>
      <Video />
      
      <Thumbs />
      <h3 className="showcase-show-gallery"
        onClick={handleGalleryVisible}>
        <span>Ver galería</span>
      </h3>
      <AnimatePresence>
        {isGalleryVisible && (
          <Popup handleVisible={handleGalleryVisible}>
            <motion.div
              initial={{ opacity: .4 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              <Gallery />
            </motion.div>
          </Popup>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Showcase
