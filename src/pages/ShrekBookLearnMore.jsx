import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ShrekBookLearnMore() {
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
          maxWidth: '600px',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          padding: '40px 20px',
          textAlign: 'center',
          margin: '0 auto'
        }}>
          <h1 style={{ fontWeight: 'bold', fontSize: '2rem', textAlign: 'center' }}>ShrekBook Air</h1>
          <p style={{ textAlign: 'center' }}>Sky-high performance powered by S4 Chip.</p>

          <img
            src="https://www.apple.com/v/macbook-air/t/images/overview/hero/hero_static__c9sislzzicq6_large.png"
            style={{ maxWidth: '60%', margin: '20px auto', display: 'block' }}
            alt="ShrekBook"
          />

          <p style={{ marginTop: '20px', textAlign: 'center' }}>
            Experience seamless performance, stunning display, and the latest Shrepple technology.
          </p>

          <div style={{ margin: '20px 0', textAlign: 'center' }}>
            <Link 
              to="/" 
              style={{
                display: 'inline-block',
                background: '#0071e3',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '20px',
                textDecoration: 'none',
                marginRight: '10px'
              }}
            >
              Back to Home
            </Link>

            <Link 
              to="/shrekbook/buy" 
              style={{
                display: 'inline-block',
                background: '#0071e3',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '20px',
                textDecoration: 'none'
              }}
            >
              Buy
            </Link>
          </div>

          <p style={{ padding: '10px', color: '#a7afb8', textAlign: 'center' }}>
            From $999 or $83.25/mo. for 12 mo.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ShrekBookLearnMore;