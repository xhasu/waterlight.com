import React from 'react'

const Intro = () => {
  return (
    <section className="intro">

      <div className="blurred left"></div>
      <div className="blurred right"></div>

      <div className="panel container">

        <div className="head-box">
          <div className="head-title">¿qué es WaterLight?</div>
          <div className="head-description">
            <p className="lead">
              Un dispositivo que crea energía eléctrica utilizando solo el agua de mar.
            </p>
            <p className="opacity-9">
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
