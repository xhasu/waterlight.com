import { useContext } from 'react'
import _ from 'lodash';

import { LanguageContext, defaultLocale } from '../contexts/language-context'
import { Lang } from '../lang/lang'


const useTranslation = () => {
  const [locale] = useContext(LanguageContext);

  const t = (key) => {

    let search = _.get(Lang[locale], key);

    if( !search ) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }

    return search || _.get(Lang[defaultLocale], key) || '';
  }

  return {
    t, locale
  }
}

export default useTranslation
