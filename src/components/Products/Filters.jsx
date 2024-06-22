import React from 'react';

const Filters = () => {
  return (
    <div className="w-1/4 p-4">
      <h2 className="font-bold mb-4">Filters</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Category</h3>
        <ul>
          <li>Woman</li>
          <li>Men</li>
          <li>Watch</li>
          <li>Kids</li>
          <li>Sports</li>
          <li>Sunglass</li>
          <li>Bags</li>
          <li>Sneakers</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Brands</h3>
        <ul>
          <li>Shovia</li>
          <li>Fusion</li>
          <li>Hunter Shoes</li>
          <li>Club Shoes</li>
          <li>Hoppister</li>
          <li>Blaze Fashion</li>
          <li>Elegance</li>
          <li>Fashadill</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Price</h3>
        <ul>
          <li>Under $50</li>
          <li>$50 to $100</li>
          <li>$100 to $150</li>
          <li>$150 to $200</li>
          <li>$200 to $300</li>
          <li>$300 to $500</li>
          <li>$500 to $1000</li>
          <li>Over $1000</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Colors</h3>
        <ul>
          <li>Black</li>
          <li>Blue</li>
          <li>Olive</li>
          <li>Maroon</li>
          <li>Brown</li>
          <li>White</li>
          <li>Gray</li>
        </ul>
      </div>
    </div>
  );
}

export default Filters;
