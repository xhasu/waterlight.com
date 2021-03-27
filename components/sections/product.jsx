import React from 'react'

const Product = () => {
  return (
    <section className="product">
      <div className="container">
        <div className="product-slogan">
          Tú haces parte de esta <br />
          <span>Revolución Energética</span>
        </div>
        <div className="product-media">
          <img src="https://images.unsplash.com/photo-1615826324871-a2b88293dde2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixlib=rb-1.2.1&q=80&w=1280" alt=""/>
        </div>
        <div className="product-actions">
          <a href="#" className="btn btn-secondary">Únete aquí a WATERLIGHT</a>
        </div>
      </div>
    </section>
  )
}

export default Product
