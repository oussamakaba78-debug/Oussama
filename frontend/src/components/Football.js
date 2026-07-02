import React, { useState } from 'react';
import './Products.css';

function Football() {
  const [products, setProducts] = useState([
    { id: 1, name: 'قميص ريال مدريد', price: 120, team: 'Real Madrid', size: 'M', quantity: 100 },
    { id: 2, name: 'قميص برشلونة', price: 110, team: 'Barcelona', size: 'L', quantity: 100 },
    { id: 3, name: 'قميص مانشستر يونايتد', price: 115, team: 'Manchester United', size: 'S', quantity: 100 },
  ]);

  const whatsappNumber = '0656578109';

  const handleContactWhatsApp = () => {
    const message = 'السلام عليكم، أريد التواصل بخصوص ملابس كرة القدم';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="products-section">
      <h2>⚽ قسم ملابس كرة القدم</h2>
      <p className="section-info">احصل على أحدث ملابس فريقك المفضل</p>

      <div className="controls">
        <button className="btn-whatsapp" onClick={handleContactWhatsApp}>
          💬 تواصل معنا عبر WhatsApp
        </button>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src="https://via.placeholder.com/200" alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="team">الفريق: {product.team}</p>
              <p className="size">الحجم: {product.size}</p>
              <p className="stock">المخزون: {product.quantity}</p>
            </div>
            <div className="product-footer">
              <span className="price">{product.price} درهم</span>
              <button className="btn-add">أضف للسلة</button>
            </div>
          </div>
        ))}
      </div>

      <div className="contact-section">
        <h3>📞 اتصل بنا</h3>
        <button className="btn-contact-large" onClick={handleContactWhatsApp}>
          WhatsApp: {whatsappNumber}
        </button>
      </div>
    </div>
  );
}

export default Football;