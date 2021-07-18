import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import useTranslation from '../../hooks/useTranslation';

gsap.registerPlugin(ScrollTrigger);

const Product = () => {

  const { t } = useTranslation();

  useEffect(() => {
    
    gsap.from('.product .product-slogan', {
      scrollTrigger: {
        trigger: '.product',
        start: 'top center',
        toggleActions: 'play reverse play reverse',
      },
      duration: 1.2,
      opacity: 0,
      y: '-25%',
    })

    gsap.from('.product .product-media', {
      scrollTrigger: {
        trigger: '.product',
        start: 'top center',
        toggleActions: 'play reverse play reverse',
      },
      delay: 1,
      opacity: 0,
      y: '-5%',
      scale: 0.5
    })

    return () => { }
  }, [])

  return (
    <section className="product">
      <div className="container">
        <div className="product-slogan">
          {t('product.title')} <br />
          <h3><span>{t('product.subtitle')}</span></h3>
        </div>
        <div className="product-media">
          <picture>
            <source media="(min-width: 640px)" srcSet="/images/product-composition.jpg"/>
            <img src="/images/product-composition-xs.jpg" alt="Clean energy device Waterlight" width="1274" height="797" />
          </picture>
        </div>
        <div className="product-actions">
          <button className="btn btn-secondary">{t('cta')}</button>
        </div>
      </div>
    </section>
  )
}

export default Product
