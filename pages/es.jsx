import React, { useEffect, useContext } from 'react'
import { LanguageContext } from '../contexts/language-context'

import Landing from '../components/landing'

const SpanishPage = () => {

  const [locale, setlocale] = useContext(LanguageContext);

  useEffect(() => {
    setlocale('es');
    return () => {}
  }, [])

  return (
    <Landing />
  )
}

export default SpanishPage
