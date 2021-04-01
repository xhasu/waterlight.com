import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { trimEnd } from 'lodash';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {

  useEffect(() => {

    ScrollTrigger.create({
      trigger: '.experience',
      start: 'top top',
      end: 'bottom top',
      toggleClass: { targets: 'header.header', className: 'dark' },
      scrub: true,
      markers: true,
      refreshPriority: -1
    })

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.experience .experience-intro',
        start: 'top center',
        end: 'bottom center',
        pin: true,
        scrub: true,
        markers: true,
      }
    })

    tl.from('.experience-intro .head-description', {opacity: 0})
      .from('.experience-intro .head-title.xl', {opacity: 0, y: '-15%'})

    let boxes = document.querySelectorAll('.experience .head-box.compact');

    boxes.forEach(item => {

      let tlitem = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top center',
          end: 'bottom center',
          // pin: true,
          scrub: true,
          markers: true,
        }
      })

      tlitem.from(item, {opacity: 0, y: '-15%'})

    })
    
    return () => { }
  }, [])

  return (
    <section className="experience">
      <div className="container">

        <div className="panel compact experience-intro">
          <div className="head-box expand">
            <div className="head-description">
              <p className="lead font-regular">¿COMO FUNCIONA?</p>
            </div>
            <div className="head-title xl">Nace de algo natural y evoluciona en algo asombroso</div>
          </div>
        </div>

        <div className="panel compact">
          <div className="head-box box-right compact">
            <div className="head-subtitle">CONEXIÓN ANCESTRAL</div>
            <p>Diseño inspirado en la comunidad Wayuú y su conexión ancestral con el mar.</p>
          </div>
        </div>

        <div className="panel compact">
          <div className="head-box box-right compact">
            <div className="head-subtitle">TRADICIÓN</div>
            <p>Correa tejida con figuras Kanas, artesanías milenarias Wayú.</p>
          </div>
        </div>

        <div className="panel compact">
          <div className="head-box box-right compact">
            <div className="head-subtitle">RECICLABLE</div>
            <p>Ensamblado con materiales 100 % reciclables</p>
          </div>
        </div>

        <div className="panel compact">
          <div className="head-box box-right compact">
            <div className="head-subtitle">WATERPROOF</div>
            <p>Resistente al agua exterior.</p>
          </div>
        </div>

        <div className="panel compact">
          <div className="head-box box-right compact">
            <div className="head-subtitle">CONEXIÓN ANCESTRAL</div>
            <p>Superficie antileslizante.</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
