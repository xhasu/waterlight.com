import React from 'react'

import Welcome from '../components/sections/welcome'
import Intro from '../components/sections/intro'
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
          <img src="/images/intro-background.jpg" alt="waterlight" width="1920" height="1080" />
        </div>
      </div>
      <Solution />
      <Showcase />
      <Experience />
      <Product />
    </main>
  )
}

export default HomePage
