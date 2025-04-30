import React from 'react';
import './BrandCard.css';

const BrandCard = ({ image, name }) => {
  return (
    <div className="brand-card">
      <img src={image} alt={name} loading="lazy" className="brand-logo" />
      <p className="brand-name">{name.toUpperCase()}</p>
    </div>
  );
};
export default BrandCard;