import React, { useState } from 'react';
import './Products.css';

function Pajamas() {
  const [products, setProducts] = useState([
    { id: 1, name: 'بجامة قطنية', price: 85, color: 'أزرق', size: 'M', quantity: 100 },
    { id: 2, name: 'بجامة صيفية', price: 70, color: 'أبيض', size: 'L', quantity: 100 },
    { id: 3, name: 'بجامة دافئة', price: 95, color: 'رمادي', size: 'S', quantity: 100 },
  ]);

  const [sortBy, setSortBy] = useState('name');

  const handleSort = (sortOption) => {
    setSortBy(sortOption);
    // Add sorting logic here
  };

  return (
    <div className="products-section">
      <h2>🛏️ قسم البجامات</h2>
      <p className="section-info">السعر: أقل من أو يساوي 100 درهم</p>

      <div className="controls">
        <select value={sortBy} onChange={(e) => handleSort(e.target.value)}>
          <option value="name">ترتيب حسب الاسم</option>
          <option value="price-asc">السعر: من الأقل للأعلى</option>
          <option value="price-desc">السعر: من الأعلى للأقل</option>
        </select>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src="https://via.placeholder.com/200" alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="color">اللون: {product.color}</p>
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
    </div>
  );
}

export default Pajamas;