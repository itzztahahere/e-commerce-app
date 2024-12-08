import Link from 'next/link';
import React from 'react';

const PopularProducts = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 py-10">
      {/* Title */}
      <h2 className="text-3xl text-dark-primary mb-10">Our Popular Products</h2>

      {/* Grid Layout with 3 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* First Column - Takes Half the Space */}
        <div className="lg:col-span-2 bg-white overflow-hidden">
          <img src="/images/sofa.jpg" alt="Popular Product 1" className="w-full h-[375px] object-cover" />
          <div className="pl-0 p-5">
            <h4 className="text-xl text-gray-800">Popular Product 1</h4>
            <p className="text-lg font-normal text-gray-600 mt-2">$199.99</p>
          </div>
        </div>

        {/* Second Column */}
        <div className="bg-white overflow-hidden">
          <img src="/images/chair.jpg" alt="Popular Product 2" className="w-full h-[375px] object-cover" />
          <div className="pl-0 p-5">
            <h4 className="text-xl text-gray-800">Popular Product 2</h4>
            <p className="text-lg font-normal text-gray-600 mt-2">$120.00</p>
          </div>
        </div>

        {/* Third Column */}
        <div className="bg-white overflow-hidden">
          <img src="/images/chair.jpg" alt="Popular Product 3" className="w-full h-[375px] object-cover" />
          <div className="pl-0 p-5">
            <h4 className="text-xl text-gray-800">Popular Product 3</h4>
            <p className="text-lg font-normal text-gray-600 mt-2">$89.50</p>
          </div>
        </div>
      </div>

      {/* View Collections Button */}
      <div className="flex justify-center mt-8">
        <Link href="/allproducts"
          style={{ backgroundColor: '#F9F9F9' }}
          className="text-dark-primary py-3 px-4 w-[170px] h-[56px] text-center rounded-md"
        >
          View Collections
        </Link>
      </div>
    </div>
  );
};

export default PopularProducts;
