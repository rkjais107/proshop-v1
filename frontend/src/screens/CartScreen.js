import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import Message from '../components/Message'
import {addToCart} from '../actions/cartActions'
import { useParams, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router'

const CartScreen = () => {

  const params = useParams();
  const product_id = params.id;

  const location = useLocation();
  const qty = new URLSearchParams(location.search).get('qty');

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)
  const {cartItems} = cart

  useEffect(() => {
    if(product_id) {
      dispatch(addToCart(product_id, qty))
    }
  }, [dispatch, product_id, qty])
  
  const navigate = useNavigate();

  return (
    <div>CartScreen</div>
  )
}

export default CartScreen