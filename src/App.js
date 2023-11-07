import React, { useLayoutEffect } from 'react'

const App = () => {
  const products = [
    {
      id:1,
      title:"html"
    },
    {
      id:2,
      title:"css"
    },
    {
      id:3,
      title:"Bootstrap"
    },
    {
      id:4,
      title:"javascript"
    }

  ]
  return (
    <div>
        {
          products.map((product)=>{
            return <Products product = {product}></Products>
          })
        }
    </div>
  )
}


function Products (props) {
  return <ul>
    <li>
      <p>{props.product.title}</p>
    </li>
  </ul>
}

export default App
