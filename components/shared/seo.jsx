import React from 'react'
import Head from 'next/head'

import useTranslation from '../../hooks/useTranslation'

const Seo = () => {

  const { t } = useTranslation();

  const schema = `{ "@context": "https://schema.org", "@type": "Organization", "url": "https://www.waterlight.com.co/", "logo": "https://www.waterlight.com.co/images/welcome-logo.png", "image" : "https://www.waterlight.com.co/images/solution-product-alter.png", "description": "Conoce el dispositivo que crea energía eléctrica renovable, limpia y sostenible utilizando solo el agua salada. Waterlight mejora la calidad de vida de las comunidades sin acceso a energía eléctrica", "addressLocality": "Bogotá, Colombia", "email": "mailto:info@e-dina.com" }`;

  return (
    <Head>
      <title>{t('title')}</title>
      <meta name="description" content={t('description')} />
      <meta name="keywords" content={t('keywords')} />
      <meta property="og:title" content={t('og.title')} />
      <meta property="og:description" content={t('og.description')} />
      <meta property="og:image" content="https://www.waterlight.com.co/images/product-composition.jpg" />
      <meta property="og:url" content="https://www.waterlight.com.co" />
      <script type="application/ld+json" dangerouslySetInnerHTML={
        { __html: schema }
      }></script>
    </Head>
  )
}

export default Seo
