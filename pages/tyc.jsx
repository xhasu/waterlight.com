import React from 'react'
import useTranslation from '../hooks/useTranslation';

const Tyc = () => {

  const { t } = useTranslation();

  return (
    <div className="tyc">
      <h1>Aviso legal</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quam vitae repellat laudantium eius, assumenda ullam corrupti et delectus amet fugiat animi porro, qui earum nemo, fugit illum totam beatae!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quam vitae repellat laudantium eius, assumenda ullam corrupti et delectus amet fugiat animi porro, qui earum nemo, fugit illum totam beatae!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quam vitae repellat laudantium eius, assumenda ullam corrupti et delectus amet fugiat animi porro, qui earum nemo, fugit illum totam beatae!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quam vitae repellat laudantium eius, assumenda ullam corrupti et delectus amet fugiat animi porro, qui earum nemo, fugit illum totam beatae!</p>
      <a href="#" className="btn btn-secondary">{t('cta')}</a>
    </div>
  )
}

export default Tyc
