import React from 'react'

function Home(props) {
  const {product, price, from} = props.products
  return (
    <div >
      <p>product: {product}</p>
      <p>price: {price} $</p>
      <p>from: {from}</p>
    </div>
  )
}

export default Home
