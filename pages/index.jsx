import React from 'react'

import Welcome from '../components/sections/welcome'
import Sequence from '../components/sections/sequence'
import Intro from '../components/sections/intro'
import Inspire from '../components/sections/inspire'
import Solution from '../components/sections/solution'
import Showcase from '../components/sections/showcase'
import Experience from '../components/sections/experience'
import Product from '../components/sections/product'

const HomePage = () => {
  return (
    <main>

      <div className="award">
      
        <Welcome />
        <Intro />
        <div className="award-background">
          <picture>
            <source media="(min-width: 768px)" srcSet="/images/intro-background.jpg"/>
            <img src="/images/intro-background-tablet.jpg" alt="waterlight" width="960" height="1080" />
          </picture>
        </div>

        {/* <Sequence /> */}

      </div>

      <Inspire />
      <Solution />
      <Showcase />
      <Experience />
      <Product />

    </main>
  )
}

export default HomePage
