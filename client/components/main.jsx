import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Head from './head'
import Header from './header'
import Products from './products'
import { getRates } from '../redux/reducers/settings'

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRates())
  }, [])

  return (
    <div className="flex flex-col">
      <Head title="Main" />
      <Header caption="SkillCrucial 5 Shop" />
      <Products />
    </div>
  )
}

export default React.memo(Main)
