import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Video from '../ui/video'
import Thumbs from '../ui/thumbs'
import Popup from '../layouts/popup'
import Gallery from '../ui/gallery'

const Showcase = () => {

  const [isVisible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(prev => !prev)
  };

  return (
    <section className="showcase">
      <h2 className="showcase-title">WATERLIGHT en la Guajira</h2>
      <Video />
      <Thumbs />
      <h3 className="showcase-show-gallery"
        onClick={handleVisible}>
        <span>Ver galeria</span>
      </h3>
      <AnimatePresence>
        {isVisible && (
          <Popup handleVisible={handleVisible}>
            <motion.div
              initial={{opacity: .4}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}>
                <Gallery />
            </motion.div>
          </Popup>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Showcase
