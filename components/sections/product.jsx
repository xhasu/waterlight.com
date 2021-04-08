import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Product = () => {

  useEffect(() => {
    
    gsap.from('.product .product-slogan', {
      scrollTrigger: {
        trigger: '.product',
        start: 'top center',
      },
      duration: 1.2,
      opacity: 0,
      y: "-25%",
    })

    gsap.from('.product .product-media', {
      scrollTrigger: {
        trigger: '.product',
        start: 'top center',
      },
      delay: 1,
      opacity: 0,
      y: "-5%",
    })

    return () => { }
  }, [])

  return (
    <section className="product">
      <div className="container">
        <div className="product-slogan">
          Tú haces parte de esta <br />
          <span>Revolución Energética</span>
        </div>
        <div className="product-media">
          <picture>
            <source media="(min-width: 640px)" srcSet="/images/product-composition.jpg"/>
            <img src="/images/product-composition-xs.jpg" alt="" width="1274" height="797" />
          </picture>
        </div>
        <div className="product-actions">
          <a href="#" className="btn btn-secondary">Preordena aquí</a>
        </div>
      </div>
    </section>
  )
}

export default Product
