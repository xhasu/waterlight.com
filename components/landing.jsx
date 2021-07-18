import React, { useEffect, useContext } from 'react'

import Seo from './shared/seo'
import Welcome from './sections/welcome'
import Sequence from './sections/sequence'
import Intro from './sections/intro'
import Inspire from './sections/inspire'
import Solution from './sections/solution'
import Showcase from './sections/showcase'
import Experience from './sections/experience'
import Product from './sections/product'

const Landing = () => {
  return (
    <main>

      <Seo />

      <div className="award">

        <Welcome />
        <Intro />
        <div className="award-background">
          <picture>
            <source media="(min-width: 768px)" srcSet="/images/intro-background.jpg" />
            <img src="/images/intro-background-tablet.jpg" alt="waterlight" width="960" height="1080" />
          </picture>
        </div>

        <Sequence />

      </div>

      <Inspire />
      <Solution />
      <Showcase />
      <Experience />
      <Product />

    </main>
  )
}

export default Landing
