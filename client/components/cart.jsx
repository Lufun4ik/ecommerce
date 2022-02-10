import React from 'react'
import { useSelector } from 'react-redux'

import Head from './head'
import Header from './header'
import Table from './common/table'

const Cart = () => {
  // const product = useSelector((store) => store.products.list)
  const { totalAmount, totalPrice, list: productInCart } = useSelector((s) => s.cart)
  const { rates, currencyName } = useSelector((store) => store.settings)

  return (
    <div className="flex flex-col">
      <Head title="Cart" />
      <Header caption="MyShop" />
      <Table data={Object.values(productInCart)} />
      <div id="total-amount">{totalAmount}</div>
      <div id="total-price">{(totalPrice * rates[currencyName]).toFixed(2)} {currencyName}</div>
    </div>
  )
}

export default React.memo(Cart)
