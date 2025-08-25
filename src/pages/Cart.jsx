import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from '../slices/cartSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Cart() {

    const cartItems = useSelector(function(state) {
    return state.cart.items;
  });

  const dispatch = useDispatch();

  const [showOrderForm, setShowOrderForm] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: '',
    address: '',
    email: ''
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    let quantity = cartItems[i].quantity ? cartItems[i].quantity : 1;
    totalPrice += cartItems[i].price * quantity;
  }

  function handleInputChange(event) {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    setOrderForm({
      ...orderForm,
      [fieldName]: fieldValue
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setOrderSubmitted(true);
    dispatch(clearCart());
  }

  function removeCartItem(index) {
    dispatch(removeItem(index));
  }

  return (
    <div>
      <Navbar />

      <div style={{
        paddingTop: '80px',
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '600px',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          padding: '40px 20px',
          textAlign: 'center'
        }}>
          <h2>Your Cart</h2>

          {orderSubmitted ? (
            <div>
              <h4>Thank you for your order!</h4>
              <p>We will process your order soon.</p>
            </div>
          ) : showOrderForm ? (
            <form onSubmit={handleFormSubmit} style={{textAlign: 'left', margin: '0 auto', maxWidth: '400px'}}>
              <div style={{marginBottom: '10px'}}>
                <label>Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={orderForm.name} 
                  onChange={handleInputChange} 
                  required 
                  style={{width: '100%', padding: '5px'}}
                />
              </div>

              <div style={{marginBottom: '10px'}}>
                <label>Address</label>
                <input 
                  type="text" 
                  name="address" 
                  value={orderForm.address} 
                  onChange={handleInputChange} 
                  required 
                  style={{width: '100%', padding: '5px'}}
                />
              </div>

              <div style={{marginBottom: '10px'}}>
                <label>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={orderForm.email} 
                  onChange={handleInputChange} 
                  required 
                  style={{width: '100%', padding: '5px'}}
                />
              </div>

              <button type="submit" style={{
                background: '#0071e3',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                padding: '10px 15px',
                cursor: 'pointer'
              }}>
                Submit Order
              </button>
            </form>
          ) : cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cartItems.map(function(item, index) {
                let itemQuantity = item.quantity ? item.quantity : 1;
                let itemTotal = item.price * itemQuantity;

                return (
                  <div key={index} style={{
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    padding: '10px',
                    marginBottom: '10px'
                  }}>
                    <h5>{item.product}</h5>
                    <p>Color: {item.color}</p>
                    <p>Storage: {item.storage}</p>
                    <p>Quantity: {itemQuantity}</p>
                    <p>Price: ${itemTotal}</p>

                    <button 
                      onClick={function() { removeCartItem(index); }} 
                      style={{
                        background: '#d62d20',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '5px 10px',
                        cursor: 'pointer'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}

              <p style={{fontWeight: 'bold', textAlign: 'right'}}>Total: ${totalPrice}</p>

              <button 
                onClick={function() { setShowOrderForm(true); }} 
                style={{
                  background: '#0071e3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '10px 15px',
                  cursor: 'pointer',
                  display: 'block',
                  margin: '10px auto'
                }}
              >
                Order Now
              </button>
            </div>
          )}

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cart;