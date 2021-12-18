import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getRates } from '../redux/reducers/settings'

const Startup = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRates())
  }, [])

  return props.children
}

export default Startup
