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
          <img src="https://images.unsplash.com/photo-1616792204859-147174a6e2e9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920" alt=""/>
        </div>
        <div className="product-actions">
          <a href="#" className="btn btn-secondary">Preordena aquí</a>
        </div>
      </div>
    </section>
  )
}

export default Product
