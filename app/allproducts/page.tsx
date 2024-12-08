'use client'
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';
import NavbarMain from '../components/navbarmain';
import Footer from "../components/footer";

const Product = () => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push('/productlisting'); // Navigates to the "/about" page
    };
    return (
        <>
            <NavbarMain />
            <section>
  <div className="relative h-[209px]">
    <img 
      src="/images/bgimg.jpg" 
      className="object-cover w-full h-[209px]" 
      alt="Background Image" 
    />
    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl font-semibold">
      All Products
    </p>
  </div>
</section>
<div className="flex items-center justify-between h-[69px] w-[1440px] mx-auto px-4">
      {/* Left Hand Side */}
      <div className="flex space-x-6">
        <div className="flex items-center space-x-2">
          <p className="text-sm text-dark-primary">Category</p>
          <IoIosArrowForward  />
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm text-dark-primary">Product Type</p>
          <IoIosArrowForward  />
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm text-dark-primary">Price</p>
          <IoIosArrowForward  />
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm text-dark-primary">Brand</p>
          <IoIosArrowForward  />
        </div>
      </div>

      {/* Right Hand Side */}
      <div className="flex items-center space-x-2">
        <p className="text-sm text-dark-primary">Sorting By: Date Added</p>
      </div>
    </div>


            <section>
                <div className='px-10 py-12 text-[#2A254B] mt-12'>

                    {/* Flexbox layout: stack on small screens, side by side on medium and large screens */}
                    <h1 className='text-2xl' >Our popular products</h1>
                    <div className='flex mx-auto justify-center flex-col md:flex-row gap-8 mt-8'>

                        {/* Product 1 */}
                        <div className='w-full md:w-[350px] h-auto group'>
                            <Image
                                src={'/images/sofa.jpg'}
                                height={800}
                                width={800}
                                alt='sofa'
                                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                            />
                            <div className='mt-4 text-[#2A254B]'>
                                <p className='py-2'>The popular suede sofa</p>
                                <p>$980</p>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className='w-full md:w-[350px] h-auto group'>
                            <Image
                                src={'/images/chair.jpg'}
                                height={800}
                                width={800}
                                alt='chair'
                                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                            />
                            <div className='mt-4 text-[#2A254B]'>
                                <p className='py-2'>The Dandy chair</p>
                                <p>$250</p>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className='w-full md:w-[350px] h-auto group'>
                            <Image
                                src={'/images/chair2.jpg'}
                                height={900}
                                width={900}
                                alt='chair'
                                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                            />
                            <div className='mt-4 text-[#2A254B]'>
                                <p className='py-2'>The Dandy chair</p>
                                <p>$250</p>
                            </div>
                        </div>
                        {/* Product 4 */}
                        <div className='w-full md:w-[350px] h-auto group'>
                            <Image
                                src={'/images/chair2.jpg'}
                                height={900}
                                width={900}
                                alt='chair'
                                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                            />
                            <div className='mt-4 text-[#2A254B]'>
                                <p className='py-2'>The Dandy chair</p>
                                <p>$250</p>
                            </div>
                        </div>


                    </div>
                    <div className='flex mx-auto justify-center flex-col md:flex-row gap-8 mt-8'>

                        {/* Product 1 */}
                        <div className='w-full md:w-[350px] h-auto group'>
                            <Image
                                src={'/images/sofa.jpg'}
                                height={800}
                                width={800}
                                alt='sofa'
                                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                            />
                            <div className='mt-4 text-[#2A254B]'>
                                <p className='py-2'>The popular suede sofa</p>
                                <p>$980</p>
                            </div>
                        </div>

                        {/* Product 2 */}
                        <div className='w-full md:w-[350px] h-auto group'>
                            <Image
                                src={'/images/chair.jpg'}
                                height={800}
                                width={800}
                                alt='chair'
                                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                            />
                            <div className='mt-4 text-[#2A254B]'>
                                <p className='py-2'>The Dandy chair</p>
                                <p>$250</p>
                            </div>
                        </div>

                        {/* Product 3 */}
                        <div className='w-full md:w-[350px] h-auto group'>
                            <Image
                                src={'/images/chair2.jpg'}
                                height={900}
                                width={900}
                                alt='chair'
                                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                            />
                            <div className='mt-4 text-[#2A254B]'>
                                <p className='py-2'>The Dandy chair</p>
                                <p>$250</p>
                            </div>
                        </div>
                        {/* Product 4 */}
                        <div className='w-full md:w-[350px] h-auto group'>
                            <Image
                                src={'/images/chair2.jpg'}
                                height={900}
                                width={900}
                                alt='chair'
                                className='w-full h-[80%] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                            />
                            <div className='mt-4 text-[#2A254B]'>
                                <p className='py-2'>The Dandy chair</p>
                                <p>$250</p>
                            </div>
                        </div>


                    </div>


                    {/* View Collection Button */}
                    <div className='my-10 flex justify-center items-center'>
                        <button className='bg-[#F9F9F9] py-4 px-6 rounded-[5px] text-[#2A254B]' onClick={handleNavigation}>
                            View products
                        </button>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Product;
