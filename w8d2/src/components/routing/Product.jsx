import React from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
  const params = useParams();
  // const [myParams, setParams] = React.useState(params.productId || 1);
  // setParams(parmams.productId);

  return (
    <div>
      <h2>Product Page</h2>
      <h3>This is product number {params.productId}</h3>
    </div>
  )
}

export default Product
