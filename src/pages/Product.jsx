import React from 'react';
import Filters from '../components/Products/Filters';
import ProductCard from '../components/Products/ProductCard';
const products = [
  {
    image: "https://image.invaluable.com/housePhotos/danielleelizabeth/99/671099/H20262-L207261643.jpg",
    title: "Gucci Carton UK",
    price: 14.99,
    oldPrice: 19.99
  },
  // Add more products here
];

const ProductPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto flex flex-grow mt-8">
        <Filters />
        <div className="flex-grow p-4">
          <h2 className="font-bold text-2xl mb-4">Casual Wear</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
