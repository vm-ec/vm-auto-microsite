import React from 'react'

const ProductContainer = React.lazy(() => import('../pages/ProductContainer'));

const routes = [
  { path: '/:product', name: 'ProductContainer', element: ProductContainer },
] 

export default routes
