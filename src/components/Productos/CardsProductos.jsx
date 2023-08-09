import React from 'react'
import {  ProductosContainer, ProductosWrapper } from './CardsProductosStyles'
import { products } from '../../data/Products'
import CardProducto from './CardProducto'
/* import Button from '../UI/Button/Button' */

const CardsProductos = () => {
    return (
      <ProductosWrapper>
          <h2 id='destacados' >Nuestros Productos</h2>
          <ProductosContainer>
              {
                  products.map((stock) => {
                      return <CardProducto key={stock.id} {...stock} />
                  })
              }
          </ProductosContainer>
          {/* <ButtonContainerStyled>
              <Button>
                  Ver menos
              </Button>
              <Button disabled>
                  Ver mas
              </Button>
          </ButtonContainerStyled> */}
      </ProductosWrapper>
    )
}
export default CardsProductos