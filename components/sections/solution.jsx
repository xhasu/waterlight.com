import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Solution = () => {

  useEffect(() => {

    let tlsh = gsap.timeline({
      scrollTrigger: {
        trigger: '.solution-head',
        start: 'top center',
        end: 'bottom center',
        pin: true,
        pinSpacing: false,
        scrub: true,
        // markers: true,
      }
    })

    tlsh.from('.solution-head .head-info', {opacity: 0, y: '-10%'})
      .from('.solution-background', {opacity: 0})
      .to('.solution-head .head-info', {opacity: 0, y: '-5%'}, '+=2')
      .to('.solution-background img', {opacity: 0, y: '-15%'})

    let tlsb = gsap.timeline({
      scrollTrigger: {
        trigger: '.solution-body',
        start: 'top center',
        end: 'bottom top',
        pin: true,
        pinSpacing: true,
        scrub: true,
        // markers: true,
      }
    })

    const subtitles = document.querySelectorAll('.solution-body .head-subtitle');

    tlsb.from('.solution-body .head-description', {opacity: 0})
      .from(subtitles[0], { opacity: 0 })
      .to(subtitles[0], {opacity: 0, display: 'none'}, '+=1')
      .from(subtitles[1], { opacity: 0 })
      .to(subtitles[1], {opacity: 0, display: 'none'}, '+=1')
      .from(subtitles[2], { opacity: 0 })
      .to(subtitles[2], {opacity: 0, display: 'none'}, '+=1')
      .to('.solution-body .head-description', {opacity: 0})

    
    let tlsbox = gsap.timeline({
      scrollTrigger: {
        trigger: '.solution-box',
        start: 'top center',
        end: 'bottom center',
        pin: true,
        pinSpacing: true,
        // pinType: 'transform',
        scrub: true,
        // markers: true,
      }
    })
    
    tlsbox.from('.solution-box .head-title', {opacity: 0, y: '-5%'})
      .from('.solution-box .head-description p', { opacity: 0, stagger: 0.5 })
    
    return () => {}
  }, [])

  return (
    <section className="solution">

      <div className="solution-background">
        <img src="https://images.unsplash.com/photo-1615244895869-3c33fbfa4b97?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixlib=rb-1.2.1&q=80&w=1920" alt=""/>
      </div>

      <div className="panel container solution-head">

        <div className="head-info">
          <div className="head-title lead">¿Por qué Water Light?</div>
        </div>

      </div>
      
      <div className="panel container solution-body">
        
        <div className="head-info">
          <div className="head-description">
            <p className="lead">
              El mundo necesita una revolución de energía limpia porque
            </p>
          </div>
          <div className="head-subtitle lead">
            cerca de 1.5 billones de personas no cuentan con acceso a energía eléctrica.
          </div>
          <div className="head-subtitle lead">
            de acuerdo a las Naciones Unidas, se espera que para el 2035 la demanda de electricidad aumente un 70%.
          </div>
          <div className="head-subtitle lead">
            se estima que las reservas de combustibles fósiles se agoten en los próximos 52 años.
          </div>
        </div>

      </div>

      <div className="panel container solution-box">
        <div className="head-box">
          <div className="head-title">la solución</div>
          <div className="head-description">
            <p className="lead">
              Waterlight produce energía eléctrica a partir de un recurso natural renovable como el agua de mar. 
            </p>
            <p>
              Esto mejora la calidad de vida de las comunidades sin acceso a este recurso vital, ofreciendo una alternativa energética con el poder de suplir una gran demanda mientras se cuida el medio ambiente. 
            </p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Solution
