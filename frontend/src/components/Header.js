import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🛍️ Oussama Chop Shop</h1>
          <p>متجر اسامة شوب</p>
        </div>
        <div className="seller-info">
          <p>👤 البائع: <strong>oukyono</strong></p>
          <p>📞 تواصل معنا</p>
        </div>
      </div>
    </header>
  );
}

export default Header;