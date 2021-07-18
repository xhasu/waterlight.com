import { createContext, useState } from 'react'

export const defaultLocale = 'en'
export const locales = ['en', 'es']
export const LanguageContext = createContext([]);

export const LanguageProvider = ({children}) => {
  const [locale, setlocale] = useState('en');

  return (
    <LanguageContext.Provider value={[locale, setlocale]}>
      {children}
    </LanguageContext.Provider>
  )
}