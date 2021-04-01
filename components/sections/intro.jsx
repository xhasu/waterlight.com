import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {

  useEffect(() => {

    const boxes = document.querySelectorAll('.intro .panel.container');

    const createTimeline = (element, index) => {

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: 'top center',
          end: "bottom center",
          pin: true,
          pinSpacing: false,
          scrub: true,
          // markers: true,
        }
      })

      let headBox = element.querySelector('.head-box');

      tl.from(headBox, { opacity: 0, y: '-5%', })
        .to(element.querySelectorAll('.head-description'),
          { opacity: 0, y: '-15%' }, '+=1')
        .to(element.querySelectorAll('.head-title, .head-subtitle'),
          { opacity: 0, y: '-10%' })

    };

    boxes.forEach(createTimeline);

    return () => { };
  }, []);

  return (
    <section className="intro">

      <div className="blurred left"></div>
      <div className="blurred right"></div>

      <div className="panel container">

        <div className="head-box box-left">
          <div className="head-title">¿qué es WaterLight?</div>
          <div className="head-description">
            <p className="lead font-town font-medium">
              Un dispositivo que crea energía eléctrica utilizando solo el agua de mar.
            </p>
            <p className="opacity-9 font-raleway font-regular">
              Esto, gracias a la ionización de un electrolito compuesto de agua salada, que convierte el aluminio de su interior en electricidad.
            </p>
          </div>
        </div>

      </div>

      <div className="panel container">

        <div className="head-box box-right head-bordered">
          <div className="head-subtitle">Energía limpia y renovable</div>
          <div className="head-description">
            <p className="lead">
              Hasta por 45 días con tan solo medio litro de agua*.
            </p>
          </div>
        </div>

      </div>

      <div className="panel container">

        <div className="head-box box-left head-bordered">
          <div className="head-subtitle mb-2">Cuándo y dónde sea</div>
          <div className="head-description">
            <p className="lead">
              Iluminación 24/7 en cualquier lugar.
            </p>
          </div>
        </div>

      </div>

      <div className="panel container">

        <div className="head-box box-right head-bordered">
          <div className="head-subtitle">Batería recargable</div>
          <div className="head-description">
            <p className="lead">
              Para dispositivos móviles y alimentación de electrodomésticos.
            </p>
          </div>
        </div>

      </div>

      <div className="panel container">

        <div className="head-box box-left head-bordered">
          <div className="head-subtitle mb-2">Facilmente adaptable</div>
          <div className="head-description">
            <p className="lead">
              A cualquier canoa para mejorar el proceso de pesca.
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Intro
