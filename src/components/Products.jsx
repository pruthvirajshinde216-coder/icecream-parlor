import React from 'react'
import Card from './Card'

const Products = ({ products }) => {
  return (
    <>
      <h2>Products List</h2>

      <div className="container">
        <div className="row">
          {products.map((p) => (
            <div className="col-md-4 mb-4" key={p.id}>
              <Card prod={p} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Products