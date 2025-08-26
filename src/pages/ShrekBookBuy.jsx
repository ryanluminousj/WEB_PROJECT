import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../slices/cartSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ShrekBookBuy() {
  const colors = ['Silver', 'Space Gray', 'Midnight', 'Starlight'];
  const storages = [
    { label: '256GB - $999', value: 999 },
    { label: '512GB - $1199', value: 1199 },
    { label: '1TB - $1399', value: 1399 },
    { label: '2TB - $1599', value: 1599 },
  ];

  const [color, setColor] = useState(colors[0]);
  const [storage, setStorage] = useState(storages[0].value);
  const [storageLabel, setStorageLabel] = useState(storages[0].label);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  function changeStorage(e) {
    const selectedIndex = e.target.selectedIndex;
    setStorage(storages[selectedIndex].value);
    setStorageLabel(storages[selectedIndex].label);
  }

  function addToCart() {
    dispatch(addItem({
      product: 'ShrekBook Air',
      color: color,
      storage: storageLabel,
      price: storage,
      quantity: quantity,
    }));
    alert('Added ' + quantity + ' ShrekBook Air - ' + color + ', ' + storageLabel + ' to cart! Total: $' + (storage * quantity));
  }

  return (
    <>
      <Navbar />

      <div style={{
        paddingTop: '80px',
        background: 'linear-gradient(to bottom, #bee1fb, #f4fafd)',
        minHeight: '80vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '900px',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          padding: '0',
          textAlign: 'center',
          margin: '0 auto'
        }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '2rem', textAlign: 'center', padding: '40px 20px 0' }}>Buy ShrekBook Air</h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch', margin: '20px 0' }}>
            <div style={{ flex: '1 1 300px', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img src="https://www.apple.com/v/macbook-air/t/images/overview/hero/hero_static__c9sislzzicq6_large.png" style={{ maxWidth: '100%', borderRadius: '10px' }} />
            </div>

            <div style={{ flex: '1 1 300px', padding: '20px' }}>
              <ul style={{ textAlign: 'left', fontSize: '1rem', color: '#444', paddingLeft: 0 }}>
                <li>Ultra-lightweight aluminum chassis</li>
                <li>Retina display with True Tone</li>
                <li>Up to 18 hours battery life</li>
                <li>Advanced cooling for silent operation</li>
                <li>Latest Shrepple OS</li>
              </ul>
            </div>

            <div style={{ flex: '1 1 300px', padding: '20px' }}>
              <h3>Select Color</h3>
              <select value={color} onChange={e => setColor(e.target.value)} style={{ display: 'block', margin: '10px auto', maxWidth: '200px', padding: '5px' }}>
                {colors.map(function(c) { return <option key={c}>{c}</option>; })}
              </select>

              <h3>Select Storage</h3>
              <select value={storage} onChange={changeStorage} style={{ display: 'block', margin: '10px auto', maxWidth: '200px', padding: '5px' }}>
                {storages.map(function(s) { return <option key={s.label} value={s.value}>{s.label}</option>; })}
              </select>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', margin: '20px 0' }}>
                <span>Quantity:</span>
                <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} style={{ padding: '5px 10px', borderRadius: '50%', border: '1px solid #ccc', cursor: 'pointer' }}>–</button>
                <span style={{ minWidth: '24px', textAlign: 'center', fontWeight: 'bold' }}>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} style={{ padding: '5px 10px', borderRadius: '50%', border: '1px solid #ccc', cursor: 'pointer' }}>+</button>
              </div>

              <p>Price: <strong>${storage * quantity}</strong></p>

              <button onClick={addToCart} style={{ display: 'block', margin: '0 auto', background: '#0071e3', color: 'white', padding: '10px 20px', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ShrekBookBuy;
