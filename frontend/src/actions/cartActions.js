import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstant'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  //getState allow us to get the entire state tree (like: cart.cartItems //we define or state as cartItems in our reducer)
  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })
  //saving in the localStorage
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


export const removeFormCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}