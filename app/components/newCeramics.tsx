import React from 'react';

const ProductCards = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5 py-10">
        {/* Title */}
      <h2 className="text-3xl text-dark-primary mb-10">New Ceramics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* Product Card 1 */}
        <div className="bg-white overflow-hidden">
          <img src="/images/chair.jpg" alt="Product" className="w-[305px] h-[375px] object-cover" />
          <div className="pl-0 p-5">
            <h4 className="text-xl font-semibold text-gray-800">Product Title 1</h4>
            <p className="text-lg font-normal text-gray-600 mt-2">$99.99</p>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="bg-white overflow-hidden">
          <img src="/images/img2.jpg" alt="Product" className="w-[305px] h-[375px] object-cover" />
          <div className="pl-0 p-5">
            <h4 className="text-xl font-semibold text-gray-800">Product Title 2</h4>
            <p className="text-lg font-normal text-gray-600 mt-2">$120.00</p>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="bg-white overflow-hidden">
          <img src="/images/img3.jpg" alt="Product" className="w-[305px] h-[375px] object-cover" />
          <div className="pl-0 p-5">
            <h4 className="text-xl font-semibold text-gray-800">Product Title 3</h4>
            <p className="text-lg font-normal text-gray-600 mt-2">$89.50</p>
          </div>
        </div>

        {/* Product Card 4 */}
        <div className="bg-white overflow-hidden">
          <img src="/images/img4.jpg" alt="Product" className="w-[305px] h-[375px] object-cover" />
          <div className="pl-0 p-5">
            <h4 className="text-xl font-semibold text-gray-800">Product Title 4</h4>
            <p className="text-lg font-normal text-gray-600 mt-2">$75.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
