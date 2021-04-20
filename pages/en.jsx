import React, { useEffect, useContext } from 'react'
import { LanguageContext } from '../contexts/language-context'

import Landing from '../components/landing'

const EnglishPage = () => {

  const [locale, setlocale] = useContext(LanguageContext);

  useEffect(() => {
    setlocale('en');
    return () => {}
  }, [])

  return (
    <Landing />
  )
}

export default EnglishPage
