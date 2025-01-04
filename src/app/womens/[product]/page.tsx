"use client";
import Image from "next/image";
import * as React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

type Product = {
  quantity: number;
  id: number;
  name: string;
  price: number | string;
  image: string;
  description: string;
  category: string;
};

const ProductPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || ''; // Provide fallback value for `id`

  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return; // Don't fetch if `id` is not available
      const res = await fetch(`https://ecomer-wesite-3.vercel.app/api/products?id=${id}`);
      const data = await res.json();
      setProduct(data);
    };
    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        const updatedCart = [...prevCart, { ...product, quantity: 1 }];
        return updatedCart;
      }
    });

    // Show the success message
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); // Hide message after 2 seconds
  };

  if (!product) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-lg">
      {/* Image Section */}
      <div className="flex justify-center items-center">
        <div className="my-6">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-center space-y-6 px-4 md:px-8 lg:px-16">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-gray-800 text-center md:text-left">
          {product.name}
        </h1>
        <h2 className="text-xs sm:text-sm md:text-base font-semibold text-gray-500 text-center md:text-left">
          {product.category}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center md:text-left">
          {product.description}
        </p>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 text-center md:text-left">
          {product.price}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add to Cart
        </button>
        {showMessage && (
          <div className="mt-4 text-green-600 font-medium text-center">
            Product added to cart successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
