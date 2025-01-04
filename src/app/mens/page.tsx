import Image from "next/image";
import Link from "next/link";
function Meas() {
    return ( 
        <div>
            <div className="text-center py-8">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 uppercase tracking-wide">
        Mens Product
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {menProducts.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-md overflow-hidden">
            <Link href={`/womens/product?id=${product.id}`}>
         <Image
  src={product.image}
  alt={product.name}
  width={400}
  height={400}
  className="h-64 md:h-72 lg:h-80 rounded-lg shadow-lg object-cover"
/>


            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-semibold text-gray-800">${product.price.toFixed(2)}</p>
            </div></Link>
          </div>
        ))}
      </div>
    </div>

</div>

       
     );
}

export default Meas;
type MenProduct = {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
  };
  
const menProducts:MenProduct[] = [
    { id: 1, name: "Men's T-Shirt", category: "Clothing", price: 19.99, image: "/image27.jpg", description: "A comfortable and stylish men's t-shirt made from soft cotton." },
    { id: 2, name: "Men's Jeans", category: "Clothing", price: 49.99, image: "/img28.jpg", description: "Slim-fit men's jeans with a modern look and premium quality fabric." },
    { id: 3, name: "Men's Sneakers", category: "Footwear", price: 69.99, image: "/img29.jpg", description: "Sporty and comfortable sneakers perfect for everyday wear." },
    { id: 4, name: "Men's Watch", category: "Accessories", price: 129.99, image: "/img30.jpg", description: "A sleek and elegant men's watch with a stainless steel strap." },
    { id: 5, name: "Men's Hoodie", category: "Clothing", price: 39.99, image: "/img31.jpg", description: "A cozy hoodie for cooler days, with a stylish fit and soft fabric." },
    { id: 6, name: "Men's Sunglasses", category: "Accessories", price: 59.99, image: "/img32.jpg", description: "Fashionable sunglasses with UV protection for a perfect summer look." },
    { id: 7, name: "Men's Polo Shirt", category: "Clothing", price: 34.99, image: "/img33.jpg", description: "Classic polo shirt made with breathable fabric for comfort and style." },
    { id: 8, name: "Men's Leather Jacket", category: "Clothing", price: 199.99, image: "/img34.jpg", description: "Premium leather jacket with a timeless design for casual and formal occasions." },
    { id: 9, name: "Men's Chinos", category: "Clothing", price: 49.99, image: "/img35.jpg", description: "Comfortable and stylish chinos with a slim fit and soft cotton blend." },
    { id: 10, name: "Men's Cap", category: "Accessories", price: 19.99, image: "/img36.jpg", description: "A stylish cap for casual looks and protection from the sun." },
    { id: 11, name: "Men's Wallet", category: "Accessories", price: 29.99, image: "/img37.jpg", description: "A sleek leather wallet with multiple card slots and a slim design." },
    { id: 12, name: "Men's Boots", category: "Footwear", price: 89.99, image: "/img38.jpg", description: "Durable and stylish boots perfect for outdoor activities and cold weather." },
    { id: 13, name: "Men's Messenger Bag", category: "Accessories", price: 59.99, image: "/img39.jpg", description: "A practical and stylish messenger bag for work or casual use." },
    { id: 14, name: "Men's Hoodie Sweatshirt", category: "Clothing", price: 39.99, image: "/img40.jpg", description: "A comfortable and warm hoodie sweatshirt for everyday wear." },
    { id: 15, name: "Men's Swim Trunks", category: "Clothing", price: 24.99, image: "/img41.jpg", description: "Perfect swim trunks for the beach or pool, made with quick-drying fabric." },
    { id: 16, name: "Men's Belt", category: "Accessories", price: 29.99, image: "/img42.jpg", description: "A leather belt that complements both casual and formal outfits." },
    { id: 17, name: "Men's Athletic Shorts", category: "Clothing", price: 22.99, image: "/img43.jpg", description: "Breathable athletic shorts perfect for running, working out, or lounging." },
    { id: 18, name: "Men's Formal Shirt", category: "Clothing", price: 49.99, image: "/img44.jpg", description: "A sharp formal shirt for business or special occasions." },
    { id: 19, name: "Men's Running Shoes", category: "Footwear", price: 79.99, image: "/img45.jpg", description: "Lightweight and cushioned running shoes for optimal performance." },
    { id: 20, name: "Men's Casual Jacket", category: "Clothing", price: 69.99, image: "/img46.jpg", description: "A versatile casual jacket for layering over any outfit." },
    { id: 21, name: "Men's Sports Watch", category: "Accessories", price: 99.99, image: "/img47.jpg", description: "A sporty, water-resistant watch designed for active lifestyles." },
    { id: 22, name: "Men's Flip Flops", category: "Footwear", price: 15.99, image: "/img48.jpg", description: "Comfortable flip flops for the beach or casual wear." },
    { id: 23, name: "Men's Dress Shoes", category: "Footwear", price: 89.99, image: "/img49.jpg", description: "Elegant dress shoes for formal events and business attire." },
    { id: 24, name: "Men's Beanie", category: "Accessories", price: 19.99, image: "/img50.jpg", description: "A warm and stylish beanie to keep your head cozy in the cold." },
    { id: 25, name: "Men's Track Jacket", category: "Clothing", price: 59.99, image: "/img51.jpg", description: "A sporty track jacket perfect for workouts or casual outings." },
    { id: 26, name: "Men's Backpack", category: "Accessories", price: 69.99, image: "/img52.jpg", description: "A durable and spacious backpack for everyday use or travel." },
    { id: 27, name: "Men's Dress Pants", category: "Clothing", price: 59.99, image: "/img53.jpg", description: "Tailored dress pants for a sharp, professional look." },
    { id: 28, name: "Men's Hoodie Jacket", category: "Clothing", price: 79.99, image: "/img54.jpg", description: "A warm hoodie jacket with a stylish design and functional pockets." },
    { id: 29, name: "Men's Sneakers 2.0", category: "Footwear", price: 89.99, image: "/img55.jpg", description: "A new version of stylish sneakers with enhanced comfort and support." },
    { id: 30, name: "Men's Running Shorts", category: "Clothing", price: 24.99, image: "/img56.jpg", description: "Lightweight running shorts designed for optimal movement and breathability." }
  ];
  