import React, { useState } from 'react'

import Close from '../ui/close'

const Popup = ({children, handleVisible}) => {

  return (
    <div className="popup">
      <span className="popup-close" onClick={handleVisible}>
        <Close />
      </span>
      <div className="popup-box">
        {children}
      </div>
    </div>
  )
}

export default Popup
