import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SpadLearnMore() {
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
          <h1 style={{ fontWeight: 'bold', fontSize: '2rem', textAlign: 'center' }}>SPad Air</h1>
          <p style={{ textAlign: 'center' }}>Now supercharged by the S3 chip.</p>

          <img
            src="https://www.pngplay.com/wp-content/uploads/13/iPad-PNG-Free-File-Download.png"
            style={{ maxWidth: '60%', margin: '20px auto', display: 'block' }}
            alt="SPad"
          />

          <p style={{ marginTop: '20px', textAlign: 'center' }}>
            Enjoy next-gen display, powerful AI integration, and a sleek design.
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
              to="/spad/buy" 
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
            From $599 or $49.91/mo. for 12 mo.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SpadLearnMore;