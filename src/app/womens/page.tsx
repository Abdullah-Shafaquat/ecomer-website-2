import Image from "next/image";
import Link from "next/link";

function Womens() {
    return ( 
        <div>
        <div className="text-center py-8">
          <h1 className="text-3xl mb-7 sm:text-4xl md:text-5xl font-bold text-gray-800 uppercase tracking-wide">
            Women’s Product
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {womenProducts.map((product) => (
              <div key={product.id} className="border rounded-lg shadow-md overflow-hidden">
                <Link href={`/womens/product?id=${product.id}`}>
                  <span>
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
                    </div>
                  </span>
                </Link>
              </div>
            ))}
          
          </div>
        </div>
      </div>
     );
}

export default Womens;
type WomenProduct = {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
  };
  
  const womenProducts: WomenProduct[] = [
    { id: 31, name: "Women's Dress", category: "Clothing", price: 49.99, image: "/women1.jpg", description: "A stylish and elegant dress perfect for formal events." },

    { id: 32, name: "Women's T-Shirt", category: "Clothing", price: 19.99, image: "/women2.jpg", description: "Comfortable and casual t-shirt made from soft cotton." },

    { id: 33, name: "Women's Jeans", category: "Clothing", price: 39.99, image: "/women3.jpg", description: "Slim-fit women's jeans with a modern look." },

    { id: 34, name: "Women's Handbag", category: "Accessories", price: 89.99, image: "/women4.jpg", description: "A chic and spacious handbag for daily use." },

    { id: 35, name: "Women's Sandals", category: "Footwear", price: 29.99, image: "/women5.jpg", description: "Stylish sandals perfect for casual outings in warm weather." },

    { id: 36, name: "Women's Sunglasses", category: "Accessories", price: 49.99, image: "/women6.jpg", description: "Trendy sunglasses that provide UV protection and style." },

    { id: 37, name: "Women's Blouse", category: "Clothing", price: 34.99, image: "/women7.jpg", description: "Elegant blouse suitable for work or casual wear." },

    { id: 38, name: "Women's Hoodie", category: "Clothing", price: 39.99, image: "/women8.jpg", description: "Cozy and comfortable hoodie perfect for colder days." },

    { id: 39, name: "Women's Watch", category: "Accessories", price: 119.99, image: "/women9.jpg", description: "A sleek women's watch with a modern design and stainless steel band." },

    { id: 40, name: "Women's Boots", category: "Footwear", price: 79.99, image: "/women10.jpg", description: "Stylish boots with durable material for colder months." },

    { id: 41, name: "Women's Leggings", category: "Clothing", price: 24.99, image: "/women11.jpg", description: "Comfortable and stretchy leggings for workouts or casual wear." },

    { id: 42, name: "Women's Scarf", category: "Accessories", price: 19.99, image: "/women12.jpg", description: "Soft and fashionable scarf to complement any outfit." },

    { id: 43, name: "Women's Cardigan", category: "Clothing", price: 44.99, image: "/women13.jpg", description: "Lightweight cardigan that can be worn over any outfit for added warmth." },

    { id: 44, name: "Women's Sneakers", category: "Footwear", price: 69.99, image: "/women14.jpg", description: "Sporty and stylish sneakers for all-day comfort." },

    { id: 45, name: "Women's Skirt", category: "Clothing", price: 29.99, image: "/women15.jpg", description: "A fashionable skirt that can be paired with casual or formal tops." },
    { id: 46, name: "Women's Tote Bag", category: "Accessories", price: 49.99, image: "/women16.jpg", description: "A spacious tote bag for carrying all your essentials." },

    { id: 47, name: "Women's Gloves", category: "Accessories", price: 19.99, image: "/women17.jpg", description: "Warm gloves that provide comfort and style in the winter." },

    { id: 48, name: "Women's Casual Jacket", category: "Clothing", price: 59.99, image: "/women18.jpg", description: "A versatile casual jacket for everyday wear." },

    { id: 49, name: "Women's Clutch", category: "Accessories", price: 39.99, image: "/women19.jpg", description: "A stylish clutch bag for evening events or parties." },

    { id: 50, name: "Women's Swimwear", category: "Clothing", price: 34.99, image: "/women20.jpg", description: "A trendy swimsuit for the beach or poolside." },

    { id: 51, name: "Women's Perfume", category: "Accessories", price: 59.99, image: "/women21.jpg", description: "A luxurious fragrance for everyday wear." },

    { id:52, name: "Women's Hat", category: "Accessories", price: 24.99, image: "/women22.jpg" ,description: "A fashionable hat for sun protection and style." },

    { id: 53, name: "Women's Earrings", category: "Accessories", price: 14.99, image: "/women23.jpg", description: "A pair of elegant earrings for any occasion." },

    { id: 54, name: "Women's Blazer", category: "Clothing", price: 79.99, image: "/women24.jpg", description: "A sleek and professional blazer suitable for work or meetings." },

    { id: 55, name: "Women's Pajamas", category: "Clothing", price: 39.99, image: "/women25.jpg", description: "Comfortable and cozy pajamas for a good night's sleep." },

    { id: 56, name: "Women's Tracksuit", category: "Clothing", price: 54.99, image: "/women26.jpg", description: "A sporty tracksuit perfect for workouts or lounging." },

    { id: 57, name: "Women's Boots", category: "Footwear", price: 89.99, image: "/women27.jpg", description: "Stylish and durable boots for outdoor activities." },

    { id: 58, name: "Women's Slip Dress", category: "Clothing", price: 49.99, image: "/women28.jpg", description: "A lightweight slip dress perfect for casual or evening wear." },

    { id: 59, name: "Women's Flats", category: "Footwear", price: 39.99, image: "/women29.jpg", description: "Comfortable flats perfect for all-day wear." },

    { id: 60, name: "Women's Cap", category: "Accessories", price: 19.99, image: "/women30.jpg",description: "A casual cap to complete your everyday look." }

  ];
  