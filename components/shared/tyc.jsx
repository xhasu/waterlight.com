import React from 'react'
import useTranslation from '../../hooks/useTranslation';

const Tyc = ({handleVisible}) => {

  const { t, locale } = useTranslation();

  return (
    <div className="tyc">
      <div className="tyc-container" hidden={locale == 'en'}>
        <h2>AVISOS LEGALES</h2>
        <p>E-Dina sociedad legalmente constituida y organizada conforme a las leyes de la República de Colombia, identificada con Nit No. 900.966.491-3 es una empresa dedicada a la investigación, desarrollo e innovación así como al diseño de prototipos de impacto tecnológico en el sector energético, así, tiene como objeto social el desarrollo de proyectos de energías alternas no convencionales y sostenibles.</p>
        <p>Wunderman Thompson sociedad legalmente constituida y organizada conforme a las leyes de la República de Colombia, identificada con Nit No. 800.240.190-2, tiene como objeto social la explotación en todas sus formas y modalidades de la actividad de promoción de toda clase de productos, servicios, marcas, nombres comerciales y eventos, de personas naturales o jurídicas.</p>
        <p>En atención a las anteriores consideraciones, E-Dina fabricó una batería que se carga de energía por medio de agua salada, tecnología debidamente patentada, cuya información ha sido compartida con Wunderman Thompson, en consideración de su amplia experiencia y deseo libre y voluntario de colaborarle a E-Dina en la emisión de un nuevo diseño industrial “WaterLight”.</p>
        <div className="tyc-actions">
          <span className="btn btn-secondary" onClick={handleVisible}>
            Volver a home
          </span>
        </div>
      </div>
      <div className="tyc-container" hidden={locale == 'es'}>
        <h2>LEGAL NOTICES</h2>
        <p>E-Dina, a company legally incorporated and organized under the laws of the Republic of Colombia, identified with Nit No. 900.966.491-3, is a company dedicated to research, development and innovation as well as the design of prototypes of technological impact in the energy sector, and its corporate purpose is the development of non-conventional and sustainable alternative energy projects.</p>
        <p>Wunderman Thompson, a company legally constituted and organized under the laws of the Republic of Colombia, identified with Nit No. 800.240.190-2, has as its corporate purpose the exploitation in all its forms and modalities of the activity of promotion of all kinds of products, services, brands, commercial names and events, of natural or legal persons.</p>
        <p>In attention to the above considerations, E-Dina manufactured a battery that provides electrical power using only salt-water., technology duly patented, whose information has been shared with Wunderman Thompson, in consideration of its wide experience and free and voluntary desire to collaborate with E-Dina in the issuance of a new industrial design "WaterLight".</p>
        <div className="tyc-actions">
          <span className="btn btn-secondary" onClick={handleVisible}>
            Home
          </span>
        </div>
      </div>
    </div>
  )
}

export default Tyc
