import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import './OrdersPage.css'
import { OrdersGrid } from './OrdersGrid'

export function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await axios.get('/api/orders?expand=products')
      setOrders(response.data)
    }

    fetchOrders()
  }, [])

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="../../public/orders-favicon.png" />
      <title>Orders</title>

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid
          orders={orders}
        />
      </div>
    </>
  )
}