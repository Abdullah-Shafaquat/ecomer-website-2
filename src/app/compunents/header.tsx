"use client";

import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";




export default function Header() {
    const [search, setSearch] = useState(false);
    const [menu, setmenu] = useState(false)
    const menuisopen = ()=>{setmenu(!menu)}

    return (
        <header className="bg-white shadow-md">
            {/* Top Navigation */}
           
            
            <div className="flex justify-between items-center px-6 py-4 uppercase">
                {/* Navigation Links */}
                <nav className=" space-x-6 hidden md:block">
                <Link
                        href="/"
                        className="text-gray-700 text-lg font-medium hover:text-gray-900 hover:underline"
                    >
                        HOME
                    </Link>
                    <Link
                        href="/womens"
                        className="text-gray-700 text-lg font-medium hover:text-gray-900 hover:underline"
                    >
                         Women
                    </Link>
                    <Link
                        href="/mens"
                        className="text-gray-700 text-lg font-medium hover:text-gray-900 hover:underline"
                    >
                        Men
                    </Link>
                    <Link
                        href="/about"
                        className="text-gray-700 text-lg font-medium hover:text-gray-900 hover:underline"
                    >
                        About
                    </Link>
                    <Link
                        href="/blogs"
                        className="text-gray-700 text-lg font-medium hover:text-gray-900 hover:underline"
                    >
                        Blogs
                    </Link>
                </nav>


                {/* Brand Name */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide text-center">
                     Everlane
                    </h1>

                {/* Icons and Search Button */}
            <div className="flex justify-between items-center px-6 py-4">
                <div className="flex gap-6">
                    {/* Search Icon */}
                    <button
                        onClick={() => setSearch(!search)}
                        className="p-2 rounded-full hover:bg-gray-200 transition duration-300 hidden md:block"
                    >
                        <CiSearch size={24} className="text-gray-700 hidden md:block" />
                    </button>
                    <div className="p-2 flex gap-6">

                    {/* Account Icon */}
                    <Link href="/signup" className="text-blue-500 hover:underline">
                    <RiAccountCircleLine size={24} className="text-gray-700 hidden md:block" />
            </Link>
                    

                    {/* Baggage Claim Icon */}
                    
                    <Link href="/card">
                    <button
       
                            className="text-black p-2 hover:bg-gray-200 rounded hidden md:block"
                                   aria-label="Toggle Shopping Cart"
                          >
                    <AiOutlineShoppingCart aria-label="Shopping Cart" size={23} />
      </button></Link>
                    <button className="md:hidden  py-3 px-8 rounded-full text-lg sm:text-xl lg:hidden  transition duration-300" onClick={ menuisopen}>
                       { menu ? <FaTimes size={24} />  :<IoReorderThreeSharp size={24}/> }
                    </button>
                
            
                    </div>
              
                </div>
            </div>
          
            </div>
            {menu &&(
                  <div>
                    <ul className="uppercase lg:hidden md:hidden">
                   
                    <li><Link href="/" className="text-gray-700 text-lg font-medium hover:text-gray-900 hover:underline">Home</Link></li>
                  
                        <li><Link href="/womens" className="text-gray-700 text-lg font-medium hover:text-gray-900 hover:underline"> Women</Link></li>
                        <li><Link href="/mens" className="text-gray-700 text-lg font-medium hover:text-gray-900 hover:underline"> Men</Link></li>
                        <li><Link href="/about" className="text-gray-700 text-lg font-medium hover:text-gray-900 hover:underline">About</Link></li>
                        <li><Link href="/blogs" className="text-gray-700 text-lg font-medium hover:text-gray-900 hover:underline">Everworld Stories</Link></li>
                        
                    <li className="text-gray-700 text-lg font-medium hover:text-gray-900 hover:underline "><Link href="/card">Cart</Link></li>
                    </ul>
                  </div>
             )}
         

            

           

            {/* Search Bar */}
            {search && (
                <div className="bg-white shadow-md p-4">
                    <div className="flex items-center gap-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={() => setSearch(false)}
                            className="text-gray-600 hover:text-gray-900"
                        >
                            Cancel
                        </button>
                    </div>
                </div>                
            )}
        </header>
    );
}
