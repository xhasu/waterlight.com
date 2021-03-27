import React, { useState } from 'react'

const Popup = ({children, handleVisible}) => {

  return (
    <div className="popup">
      <span className="popup-close" onClick={handleVisible}></span>
      <div className="popup-box">
        {children}
      </div>
    </div>
  )
}

export default Popup
