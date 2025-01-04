// pages/products.js
import Link from 'next/link';

import React from 'react';
type Blog = {
    id: number;
    name: string;
    description: string;
  };
  const blogs: Blog[] = [
    { 
      id: 1, 
      name: "Choosing the Perfect Men's Watch", 
      description: "Learn how to choose the perfect men's watch, from style and material to features and functionality. This guide will help you pick a timepiece that matches your style and needs, covering movement types, water resistance, and strap options."
    },
    { 
      id: 2, 
      name: "Choosing the Perfect Men's Hoodie", 
      description: "The guide offers tips on selecting the ideal men's hoodie for every season, covering fabric choices, fits, and style, ensuring comfort and fashion for all occasions."
    },
    { 
      id: 3, 
      name: "Men's Footwear for Every Occasion", 
      description: "This guide helps you choose the perfect men's footwear for any occasion, whether casual, formal, or work, exploring styles, materials, and design features for every need."
    },
    { 
      id: 4, 
      name: "Women's T-Shirts: Styles & Tips", 
      description: "Explore popular T-shirt styles and trends for women, offering tips on fabric, fit, and styling, ensuring you pick the right T-shirt for comfort and fashion."
    },
    { 
      id: 5, 
      name: "Women's Handbags: Styles & Tips", 
      description: "Discover the diverse world of women's handbags, covering essential styles for every occasion, with tips on choosing the right bag and caring for it."
    },
    { 
      id: 6, 
      name: "Women's Hoodies: Styles & Tips", 
      description: "Learn how to choose the perfect women's hoodie for any occasion, from casual to chic, with tips on fit, fabric, and styling for maximum comfort and fashion."
    },
  ];
  

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-14 uppercase">our Blogs</h1>
    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <div 
            key={blog.id} 
            className="bg-white rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-2 border-gray-300"
          >
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-5">{blog.name}</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {blog.description}
              </p>
              <div className="flex justify-center">
              <Link href= {`/blogs/blog?id=${blog.id}`}><button className="bg-gradient-to-r from-gray-500 to-slate-900 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ">
                    
                  Show More
                </button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
