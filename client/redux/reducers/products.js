const GET_PRODUCTS = '@products/GET_PRODUCTS'

const initialState = {
  list: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        list: action.payload
      }
    }
    default:
      return state
  }
}

/*
before:
{
  list: [ { id: i1 }, { id: i2 }, { id: i3 } ]
}

after:
{
  list: {
    i1: { id: i1 },
    i2: { id: i2 },
    i3: { id: i3 }
  }
}
*/

export const getProductsFromServer = () => {
  return (dispatch) => {
    fetch('/api/v1/products')
      .then((data) => data.json())
      .then((array) => array.reduce((acc, rec) => {
        acc[rec.id] = rec
        return acc
      }, {}))
      .then((products) => dispatch({ type: GET_PRODUCTS, payload: products }))
      .catch((err) => console.log(err))
  }
}
