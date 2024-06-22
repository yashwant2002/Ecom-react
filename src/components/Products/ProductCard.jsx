import React from 'react';

const ProductCard = ({ image, title, price, oldPrice }) => {
  return (
    <div className="border rounded-lg p-4">
      <img src={image} alt={title} className="w-full h-48 object-contain mb-4" />
      <h3 className="font-bold text-lg">{title}</h3>
      <div className="flex justify-between items-center">
        <span className="text-red-500 font-semibold">${price}</span>
        {oldPrice && <span className="text-gray-500 line-through">${oldPrice}</span>}
      </div>
    </div>
  );
}

export default ProductCard;
