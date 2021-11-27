const ADD_ITEM = '@cart/ADD_ITEM'

const initialState = {
  list: {},
  totalPrice: 0,
  totalAmount: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        ...state,
        list: action.payload,
        totalAmount: state.totalAmount + 1,
        totalPrice: state.totalPrice + action.payload.price,
      }
    }
    default:
      return state
  }
}

export const addItem = (id) => {
  return (dispatch, getState) => {
    const { list } = getState().cart
    const productslist = getState().products.list
    const { price } = productslist.find((item) => item.id === id)
    const itemAmount = typeof list[id] === 'undefined' ? 1 : list[id].amount + 1
    dispatch({
      type: ADD_ITEM,
      payload: {
        ...list,
        [id]: { amount: itemAmount },
        price
      }
    })
  }
}
