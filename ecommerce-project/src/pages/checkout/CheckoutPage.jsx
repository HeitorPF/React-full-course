import axios from 'axios'
import { CheckoutHeader } from './CheckoutHeader'
import { OrderSummary } from './OrderSumary'
import { PaymentSummary } from './PaymentSummary'
import { useEffect, useState } from 'react'
import './CheckoutPage.css'

export function CheckoutPage({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([])
  const [paymentSummary, setPaymentSummary] = useState(null)

  useEffect(() => {
    const fetchCheckouData = async () => {
      let response = await axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
      setDeliveryOptions(response.data)

      response = await axios.get('/api/payment-summary')
      setPaymentSummary(response.data)
    }

    fetchCheckouData()
  }, [])

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="../../public/cart-favicon.png" />
      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">

          <OrderSummary deliveryOptions={deliveryOptions} cart={cart} />

          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  )
}