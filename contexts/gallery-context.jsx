import { createContext, useState } from 'react'

export const GalleryContext = createContext([]);

export const GalleryProvider = ({children}) => {
  const [position, setPosition] = useState(0);

  return (
    <GalleryContext.Provider value={[position, setPosition]}>
      {children}
    </GalleryContext.Provider>
  )
}