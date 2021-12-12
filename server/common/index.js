import axios from 'axios'
import { readFile } from 'fs/promises'

export const getProductsFunc = () => {
  return (
    readFile(`${__dirname}/../data/data.json`, 'utf-8')
      .then((data) => JSON.parse(data))
      .catch(() => [])
  )
}

export const sortProductsList = (arrayOfProducts, sortType, direction) => {
  switch (sortType) {
    case 'name': {
      arrayOfProducts.sort((a, b) => {
        if (direction) {
          return b.title.localeCompare(a.title)
        }
        return a.title.localeCompare(b.title)
      })
    }
    case 'price': {
      arrayOfProducts.sort((a, b) => {
        if (direction) {
          return b.price - a.price
        }
        return a.price - b.price
      })
    }
    default:
      return arrayOfProducts
  }
}

export const getRates = () => {
  const url = 'https://api.exchangerate.host/latest?base=USD&symbols=USD,EUR,CAD'
  const mockRates = {
    "CAD": 1.3,
    "EUR": 0.9,
    "USD": 1
  }
  return axios(url)
    .then(({data}) => data.rates)
    .catch(() => mockRates)
}
