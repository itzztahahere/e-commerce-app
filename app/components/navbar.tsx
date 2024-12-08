import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div>
            {/* Announcement Row */}
            <div className="bg-dark-primary text-white text-center py-2" style={{ height: '41px' }}>
                <p>Special Offer: Free Shipping on Orders Over $50!</p>
            </div>

            {/* Navbar Content */}
            <div className="bg-white">
                {/* First Row: Search Icon, Logo, Profile and Cart Icons */}
                <div className="flex items-center justify-between py-3 px-6" style={{ height: '80px' }}>
                    {/* Search Icon */}
                    <div className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faSearch} className="text-gray-600" />
                    </div>

                    {/* Logo */}
                    <div className="text-center flex-1">
                        <h1 className="text-xl font-semibold text-gray-800">
                            <Link href="/">
                            Avion
                            </Link>
                            </h1>
                    </div>

                    {/* Profile and Cart Icons */}
                    <div className="flex items-center space-x-4">
                        <FontAwesomeIcon icon={faUserCircle} className="text-gray-600" size="lg" />
                        <FontAwesomeIcon icon={faShoppingCart} className="text-gray-600" size="lg" />
                    </div>
                </div>

                {/* Second Row: Product Categories */}
                <div className="flex justify-center py-3 border-t border-b border-gray-200" style={{ height: '52px' }}>
                    <div className="flex justify-evenly gap-10 w-[675px]">
                        <p className="text-sm text-nav-items-text cursor-pointer">Plant Pots</p>
                        <p className="text-sm text-nav-items-text cursor-pointer">Ceramics</p>
                        <p className="text-sm text-nav-items-text cursor-pointer">Tables</p>
                        <p className="text-sm text-nav-items-text cursor-pointer">Chairs</p>
                        <p className="text-sm text-nav-items-text cursor-pointer">Crockery</p>
                        <p className="text-sm text-nav-items-text cursor-pointer">Tableware</p>
                        <p className="text-sm text-nav-items-text cursor-pointer">Cutlery</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
