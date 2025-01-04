"use client";
import { useState, useEffect } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number | string;
  image: string;
  description: string;
  category: string;
  quantity: number;
};

// Helper function to clean price strings
const cleanPrice = (price: string | number): number =>
  parseFloat(String(price).replace(/[^0-9.-]+/g, ""));

// Function to calculate the total price
const calculateTotal = (cartItems: CartItem[]): number => {
  return cartItems.reduce(
    (total, item) => total + cleanPrice(item.price) * item.quantity,
    0
  );
};



const CartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [tax] = useState<number>(799); // Example tax amount
  const [pickupFee] = useState<number>(99); // Example pickup fee
  const [savings] = useState<number>(299); // Example savings
  const [showMessage, setShowMessage] = useState<boolean>(false); // For showing message

  // Load the cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Update cart in localStorage
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Handle quantity change
  const handleQuantityChange = (id: number, action: "increase" | "decrease"): void => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + (action === "increase" ? 1 : -1), 1) }
          : item
      );
    });
  };

  // Handle item deletion from the cart
  const handleDeleteItem = (id: number): void => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Handle Add to Cart message
  const handleAddToCart = (item: CartItem): void => {
    setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000); // Hide message after 3 seconds
  };

  const totalPrice = calculateTotal(cart);

  return (
    <div className="p-4 sm:p-6 lg:flex lg:space-x-6">
      {/* Add to Cart Message */}
      {showMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-md">
          Item added to cart successfully!
        </div>
      )}

      {/* Cart Items Section */}
      <div className="flex-1 mb-6 lg:mb-0">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty!</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b py-4"
            >
              <div className="flex items-start sm:items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-cover mr-4"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <button
                    className="text-sm text-blue-500 hover:underline"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Favorites
                  </button>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                <button
                  onClick={() => handleQuantityChange(item.id, "decrease")}
                  className="px-2 py-1 bg-gray-200 text-sm rounded"
                >
                  -
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => handleQuantityChange(item.id, "increase")}
                  className="px-2 py-1 bg-gray-200 text-sm rounded"
                >
                  +
                </button>
              </div>
              <div className="flex flex-col items-end mt-2 sm:mt-0">
                <p className="font-semibold">${cleanPrice(item.price)}</p>
                <button
                  onClick={() => handleDeleteItem(item.id)}
                  className="text-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Order Summary Section */}
      <div className="w-full lg:w-1/3 p-4 border rounded-lg shadow-md bg-gray-50">
        <h2 className="text-lg sm:text-xl font-bold mb-4">Order Summary</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Original price</span>
            <span>${(totalPrice + savings).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Savings</span>
            <span>-${savings.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Store Pickup</span>
            <span>${pickupFee}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${(totalPrice + tax + pickupFee - savings).toFixed(2)}</span>
          </div>
        </div>
        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          onClick={() => alert("Proceed to checkout!")}
        >
          Proceed to Checkout
        </button>
        <button className="mt-2 w-full text-blue-500 hover:underline">
          Continue Shopping →
        </button>
      </div>
    </div>
  );
};

export default CartPage;
