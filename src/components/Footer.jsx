import React from 'react';

function Footer() {
  return (
    <footer style={{
      background: '#f3f3f3',
      padding: '20px',
      fontSize: '14px',
      marginTop: '30px',
      borderTop: '1px solid #d5d5d5'
    }}>
      <div style={{ maxWidth: '1200px', margin: 'auto', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>

        <div style={{ flex: 1, minWidth: '200px' }}>
          <h4>Contact Us</h4>
          <p><a href="tel:+9771234567890" style={{ color: 'black', textDecoration: 'none' }}>Phone: +977 123 456 789</a></p>
          <p><a href="mailto:Shrepple@Scloud.com" style={{ color: 'black', textDecoration: 'none' }}>Email: Shrepple@Scloud.com</a></p>
          <p>Address: 123 Sifal, KTM, NEP</p>
        </div>


        <div style={{ flex: 1, minWidth: '200px' }}>
          <h4>Quick Links</h4>
          <p><a href="#" style={{ color: 'black', textDecoration: 'none' }}>About Us</a></p>
          <p><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Privacy Policy</a></p>
          <p><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Terms & Conditions</a></p>
        </div>

        <div style={{ flex: 1, minWidth: '200px' }}>
          <h4>Follow Us</h4>
          <p><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Facebook</a></p>
          <p><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Twitter</a></p>
          <p><a href="#" style={{ color: 'black', textDecoration: 'none' }}>Instagram</a></p>
        </div>
      </div>

      <div style={{ marginTop: '20px', borderTop: '1px solid #ddd', paddingTop: '10px', textAlign: 'center' }}>
        &copy; 2025 Shrepple. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;