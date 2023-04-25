import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const goOrders = () => {
        alo('/orders')
    }

    const goCategory = () => {
        alo('/categories')
    }

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:500, gap: 50}}>
        <h3 onClick={goCategory}>Category</h3>
        <h3 onClick={goOrders}>Orders</h3>
        <Link to={'/products'}>Products</Link>
        <Link to={'/suppliers'}>Suppliers</Link>

    </div>
  )
}

export default Home