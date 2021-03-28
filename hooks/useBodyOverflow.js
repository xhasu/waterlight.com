import React, { useState } from 'react'

const useBodyOverflow = () => {

  const [bodyoverflow, setBodyoverflow] = useState(false);

  const toggleBodyOverflow = () => {
    setBodyoverflow(prev => {
      let value = !prev;
      if( value ) document.body.classList.add('overflow-hidden')
      else document.body.classList.remove('overflow-hidden')
      return value;
    })
  }

  return {
    toggleBodyOverflow,
    bodyoverflow
  }
}

export default useBodyOverflow
