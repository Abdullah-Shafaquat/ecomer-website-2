import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (id) {
    const product = Products.find((product) => product.id === parseInt(id));
    if (product) {
      return NextResponse.json(product);
    } 
  } else {
    return NextResponse.json(Products);
  }
};

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
};

const Products: Product[] = [
    {    id: 1, 
        name: "Men's T-Shirt",
         category: "Clothing",
         price: 19.99,
        image: "/image27.jpg", 
        description: "A versatile and stylish men's t-shirt crafted from soft, breathable cotton fabric. It is perfect for casual outings and daily wear, offering comfort and durability. The modern cut ensures a flattering fit, making it suitable for all body types. The t-shirt is available in various colors, offering options to match any wardrobe. Whether paired with jeans or shorts, this t-shirt will enhance your casual look. Ideal for the warmer months, it provides all-day comfort. It’s easy to maintain, making it an essential piece for your wardrobe." 
    },
    {
         id: 2,
        name: "Men's Jeans",
        category: "Clothing",
        price: 49.99,
         image: "/img28.jpg", 
         description: "These men’s jeans offer a slim-fit design, combining style with comfort. Made from high-quality denim, they are designed to be durable and comfortable for everyday wear. The slim-fit cut offers a modern and sleek look that pairs well with t-shirts, polo shirts, or button-up shirts. Available in various washes, these jeans add a touch of sophistication to your casual look. The premium fabric ensures comfort, whether you’re sitting, standing, or moving throughout the day. They are perfect for both casual and semi-formal occasions." 
    },
    { 
        id: 3,
        name: "Men's Sneakers",
        category: "Footwear",
        price: 69.99,
        image: "/img29.jpg",
        description: "Stay stylish and comfortable with these men's sneakers, designed for both fashion and functionality. With breathable materials and a sleek design, they provide all-day comfort. The shoes offer excellent support, making them perfect for outdoor activities, travel, or casual outings. The trendy design complements jeans, shorts, and joggers, giving you a versatile footwear option. Whether you're hitting the streets or running errands, these sneakers will enhance your look while providing the comfort your feet deserve."
    },
    {
      id: 4,
      name: "Men's Watch",
      category: "Accessories",
      price: 129.99, 
      image: "/img30.jpg",
      description: "This men's watch combines elegance with functionality, featuring a minimalist design that suits any occasion. The sleek stainless steel strap adds sophistication, while the simple dial keeps the watch timeless and versatile. Ideal for formal and casual settings, it can easily complement both business attire and casual outfits. The durable materials ensure longevity, while the classic design will never go out of style. Whether you're heading to work or out for a night on the town, this watch will always add the perfect finishing touch to your outfit."
     },
    {
        id: 5, 
        name: "Men's Hoodie",
        category: "Clothing",
        price: 39.99,
        image: "/img31.jpg",
        description: "Stay cozy with this stylish men's hoodie, designed for ultimate comfort. Made from soft fabric, it offers a relaxed fit that provides warmth without feeling bulky. The hoodie features a drawstring closure for added adjustability and a front pocket for convenience. Whether you're lounging at home or out for a walk, it provides both style and practicality. The classic design makes it easy to pair with jeans, shorts, or joggers, making it a perfect addition to your casual wardrobe. It’s an ideal choice for colder days."
    },
    {
        id: 6,
        name: "Men's Sunglasses",
        category: "Accessories",
        price: 59.99,
        image: "/img32.jpg", 
        description: "Protect your eyes while looking stylish with these men's sunglasses. With high-quality lenses that offer UV protection, these sunglasses will keep your eyes safe from harmful rays while adding a touch of sophistication to your outfit. The frames are designed to complement various face shapes, and the classic design ensures they never go out of style. Whether you're at the beach, hiking, or running errands, these sunglasses provide the perfect blend of fashion and function."
    },
    {
      id: 7,
       name: "Men's Polo Shirt", 
       category: "Clothing",
        price: 34.99, 
        image: "/img33.jpg", 
        description: "A classic polo shirt that provides both comfort and style. Made from breathable fabric, it’s perfect for warm weather. The shirt features a modern fit that offers both comfort and flexibility, making it ideal for everything from casual outings to semi-formal events. The stylish collar adds a polished look, while the soft cotton ensures comfort throughout the day. Available in various colors, this polo shirt pairs perfectly with jeans, chinos, or shorts, making it a versatile wardrobe staple." 
      },
    { 
      id: 8, 
      name: "Men's Leather Jacket", 
      category: "Clothing",
       price: 199.99,
        image: "/img34.jpg", 
        description: "Add a timeless piece to your wardrobe with this men’s leather jacket. Crafted from genuine leather, this jacket offers durability and a sleek design that can be dressed up or down. The smooth leather provides a stylish edge, making it perfect for both casual and formal outfits. Whether paired with jeans for a night out or layered over a shirt for a more polished look, this jacket will keep you warm and stylish. It’s a must-have investment piece for anyone looking to elevate their wardrobe." },
    { 
      id: 9, 
      name: "Men's Chinos", 
      category: "Clothing",
       price: 49.99, 
       image: "/img35.jpg",
        description: "These slim-fit chinos are a perfect blend of comfort and sophistication. Made from soft cotton with a hint of stretch, they provide all-day comfort while maintaining a sharp and tailored appearance. The modern cut allows for a sleek look, whether paired with a casual t-shirt or a button-up shirt. These chinos are a versatile option for both casual and business casual settings. The high-quality fabric is durable and easy to maintain, making them an excellent choice for daily wear." },
    { 
      id: 10,
       name: "Men's Cap",
        category: "Accessories",
         price: 19.99, 
         image: "/img36.jpg", 
         description: "This men's cap combines functionality with style. Designed to protect your eyes from the sun, it features an adjustable strap for a perfect fit. Made from lightweight material, it keeps you cool and comfortable throughout the day. The classic design ensures it can be easily paired with a variety of outfits, from casual shorts to more activewear looks. Whether you're going for a jog, heading to the beach, or just out on a sunny day, this cap will keep you looking stylish while offering the protection you need." },
    { 
      id: 11,
       name: "Men's Wallet",
        category: "Accessories",
         price: 29.99, 
         image: "/img37.jpg", 
         description: "This sleek leather wallet is designed for those who prefer a minimalist approach to storage. With multiple card slots and a section for cash, this wallet ensures you can carry your essentials without bulk. The high-quality leather construction ensures durability, while the slim profile fits easily in your pocket. Whether you’re going to work or heading out for an evening, this wallet is an essential accessory to keep your valuables secure and organized." },
    { 
      id: 12,
       name: "Men's Boots", 
       category: "Footwear", 
       price: 89.99, 
       image: "/img38.jpg",
        description: "Built for both style and functionality, these men’s boots are ideal for outdoor activities and cold weather. The rugged sole provides excellent grip, while the high-quality leather ensures durability. With a timeless design, these boots complement both casual and semi-formal outfits. Whether you’re going hiking, working outdoors, or just need a reliable pair of boots for the winter, these boots provide comfort and support. The versatile style ensures they pair well with jeans or chinos, making them a must-have in your wardrobe." },
    { 
      id: 13,
       name: "Men's Messenger Bag",
        category: "Accessories",
         price: 59.99, image: "/img39.jpg",
          description: "This men’s messenger bag is designed to provide both style and practicality. With a spacious interior and multiple compartments, it offers plenty of room for carrying your essentials, such as a laptop, books, or documents. The adjustable strap ensures a comfortable fit, and the sleek design adds a touch of professionalism to any outfit. Whether you're heading to the office or on a business trip, this bag offers a perfect solution for keeping your belongings organized and easily accessible." },
    { 
      id: 14,
       name: "Men's Hoodie Sweatshirt", 
       category: "Clothing",
        price: 39.99, 
        image: "/img40.jpg", 
        description: "This men’s hoodie sweatshirt offers warmth and comfort for any occasion. Made from soft, high-quality fabric, it provides a cozy layer during colder months. The relaxed fit ensures maximum comfort, while the drawstring hood adds a stylish touch. The front pocket is perfect for keeping your hands warm or carrying small essentials. Pair it with jeans or joggers for a casual, sporty look that’s both comfortable and stylish. Ideal for lounging, workouts, or running errands, this hoodie will quickly become a wardrobe favorite." },
    { 
      id: 15,
       name: "Men's Swim Trunks", 
       category: "Clothing",
        price: 24.99, 
        image: "/img41.jpg", 
        description: "Dive into summer with these comfortable men’s swim trunks. Made from quick-drying fabric, they’re perfect for lounging by the pool or heading to the beach. The modern design offers a flattering fit, while the lightweight material keeps you comfortable in the water. The elastic waistband with an adjustable drawstring ensures a secure and comfortable fit, while the stylish colors and patterns make them a standout piece for your summer wardrobe. Whether you’re swimming, surfing, or just relaxing, these swim trunks are a must-have." },
    { 
      id: 16,
       name: "Men's Belt",
        category: "Accessories",
         price: 29.99, image: "/img42.jpg", 
       description: "A high-quality leather belt that’s perfect for both formal and casual occasions. The sleek design features a smooth, polished buckle that complements both business suits and everyday jeans. The durable leather ensures longevity, while the adjustable size provides a perfect fit for any waist. Whether you’re dressing up for a special occasion or simply looking to add a polished touch to your casual outfit, this belt is a must-have accessory. The minimalist design makes it versatile, while the craftsmanship ensures it will last for years." },
    { 
      id: 17,
       name: "Men's Athletic Shorts", 
       category: "Clothing",
        price: 22.99, 
        image: "/img43.jpg", 
        description: "These men’s athletic shorts are designed for comfort and flexibility. Made from lightweight, breathable fabric, they are perfect for running, exercising, or lounging. The relaxed fit provides freedom of movement, while the elastic waistband ensures a secure and comfortable fit. Available in various colors, these shorts are an essential addition to your workout wardrobe. Whether you're at the gym, running outdoors, or simply enjoying a day off, these athletic shorts will keep you comfortable and stylish." },
    { 
      id: 18,
       name: "Men's Formal Shirt", 
       category: "Clothing",
        price: 49.99, 
        image: "/img44.jpg", 
        description: "This men’s formal shirt is a wardrobe essential for business meetings or formal events. Made from soft, breathable fabric, it offers both comfort and style. The tailored fit ensures a sharp, polished look, while the classic collar adds a touch of sophistication. Perfect for pairing with a suit or trousers, this shirt is versatile and easy to style. Available in a variety of colors and patterns, it’s perfect for creating a smart and professional appearance. Whether for work or a special occasion, this shirt will keep you looking your best." },
    { 
      id: 19,
       name: "Men's Running Shoes", 
       category: "Footwear",
        price: 79.99,
         image: "/img45.jpg", 
       description: "These lightweight men’s running shoes offer the perfect balance of comfort and performance. Designed with advanced cushioning technology, they provide support during every step, ensuring a smooth and comfortable run. The breathable fabric keeps your feet cool, while the durable sole offers traction on various surfaces. Whether you’re hitting the track or the treadmill, these running shoes will enhance your performance and keep your feet comfortable. The sleek design also makes them a great choice for casual outings." },
    { 
      id: 20,
       name: "Men's Casual Jacket", 
       category: "Clothing",
        price: 69.99, 
        image: "/img46.jpg", 
        description: "This men’s casual jacket combines style and practicality, perfect for layering during cooler months. Made from soft yet durable fabric, it provides warmth without feeling heavy. The modern fit ensures a sleek silhouette, while the versatile design allows it to be paired with a variety of outfits, from jeans to chinos. Whether you’re heading out for a walk or meeting friends for coffee, this jacket will keep you comfortable and stylish. With its timeless design, it’s a must-have addition to any casual wardrobe." },
    { 
      id: 21,
       name: "Men's Sports Watch", 
       category: "Accessories", 
       price: 99.99, 
       image: "/img47.jpg", 
       description: "This men's sports watch is the perfect blend of style and functionality for the active man. Designed to withstand the demands of an active lifestyle, it features a durable, shock-resistant case and a water-resistant design, making it ideal for sports, outdoor activities, and even swimming. The watch is equipped with a range of features including a stopwatch, countdown timer, and a backlight for easy reading in low-light conditions. The digital display provides clear, accurate timekeeping, while the comfortable rubber strap ensures a secure fit during workouts or intense activities. Whether you're hitting the gym, running, or exploring the outdoors, this sports watch will keep you on track while complementing your athletic style." },
    { 
      id: 22,
       name: "Men's Flip Flops", 
       category: "Footwear", 
       price: 15.99, 
       image: "/img48.jpg", 
       description: "These men's flip-flops are the ultimate choice for comfort and convenience during warm weather. Made from lightweight, durable materials, they offer a relaxed, laid-back style perfect for beach days, poolside lounging, or casual outings. The soft, cushioned footbed provides all-day comfort, while the flexible rubber sole ensures excellent grip and support on various surfaces, reducing the risk of slipping. With their simple, yet stylish design, these flip-flops are easy to slip on and off, making them a go-to option for quick errands or vacation packing. Available in a range of colors, they are versatile enough to pair with your summer wardrobe, adding a touch of casual elegance to your everyday look."
       },
    { 
      id: 23,
       name: "Men's Dress Shoes", 
       category: "Footwear", 
       price: 89.99, 
       image: "/img49.jpg", 
       description: "These men's dress shoes are the epitome of elegance and sophistication, designed for formal occasions and business attire. Crafted from high-quality leather, they offer a sleek and polished look, ensuring you make a lasting impression wherever you go. The shoes feature a refined, classic design with a comfortable fit, ideal for long hours at work or evening events. With their sturdy sole and cushioned insole, they provide excellent support and comfort, while the smooth leather finish adds a touch of luxury. Whether you're attending a wedding, business meeting, or formal dinner, these dress shoes will complement your outfit and elevate your overall appearance."
       },
    { 
      id: 24,
       name: "Men's Beanie",
        category: "Accessories", 
       price: 19.99, 
       image: "/img50.jpg", 
       description: "This men's beanie is the perfect accessory for keeping warm and stylish during the colder months. Made from a soft, knitted fabric, it provides excellent insulation while remaining lightweight and comfortable. The snug fit ensures that the beanie stays securely in place, protecting your head and ears from chilly winds. Its classic design makes it easy to pair with various outfits, whether you're dressing casually for a weekend outing or need an extra layer for outdoor activities. The beanie’s versatility allows it to complement both everyday wear and more rugged, outdoor looks. Available in a range of colors, it's an essential winter accessory for any wardrobe." },
    { 
      id: 25,
       name: "Men's Track Jacket", 
       category: "Clothing",
        price: 59.99, 
        image: "/img51.jpg", 
        description: "The men's track jacket is designed for both performance and style, making it a perfect addition to your activewear or casual wardrobe. Made from a breathable, moisture-wicking fabric, it keeps you comfortable whether you're hitting the gym, going for a jog, or simply running errands. The sleek, athletic fit allows for easy movement, while the ribbed cuffs and hem ensure a secure fit. Featuring a zippered front, side pockets for storage, and bold color accents, this jacket combines functionality with a modern, sporty aesthetic. Ideal for layering over workout gear or pairing with casual jeans, it provides a versatile and stylish option for any season. Whether you're exercising or relaxing, the men's track jacket offers both comfort and practicality." },
    { 
      id: 26,
       name: "Men's Backpack",
        category: "Accessories",
         price: 69.99,
          image: "/img52.jpg", 
       description: "This men's backpack is the ideal combination of style, functionality, and durability. Perfect for daily use or travel, it features multiple compartments to help organize your essentials, including a laptop sleeve, front zippered pockets for quick access, and spacious main storage. Made from high-quality, water-resistant material, it provides protection for your belongings while ensuring long-lasting durability. The adjustable, padded shoulder straps offer added comfort, even when carrying heavy loads, making it perfect for work, school, or weekend getaways. The sleek and minimalist design adds a touch of sophistication, while the modern colors ensure it suits a variety of personal styles. Whether you're commuting or exploring, this men's backpack has everything you need for a practical and stylish accessory." },
    { 
      id: 27,
       name: "Men's Dress Pants", 
       category: "Clothing",
        price: 59.99, 
        image: "/img53.jpg", 
        description: "These men's dress pants are the epitome of style and sophistication, making them a perfect choice for formal occasions, business meetings, or professional events. Crafted from a high-quality blend of fabrics, these pants offer both comfort and durability, with a smooth finish that adds to their sleek look. The tailored fit ensures a sharp, flattering silhouette, while the classic flat-front design provides a modern touch. Equipped with belt loops, a zippered fly, and side pockets, these dress pants offer practicality without sacrificing style. Their versatile design makes them easy to pair with dress shirts, blazers, or sweaters, allowing you to create the perfect ensemble for any occasion. Whether you're attending a corporate event or an elegant evening out, these men's dress pants provide the ideal blend of comfort, fit, and timeless appeal." },
    { 
      id: 28,
       name: "Men's Hoodie Jacket", 
       category: "Clothing",
        price: 79.99, 
        image: "/img54.jpg", 
        description: "This men's hoodie jacket combines warmth, comfort, and style, making it a perfect outerwear choice for cooler days. Crafted from soft, high-quality fabric, it offers a cozy fit while still looking fashionable. The jacket features a front zipper closure, adjustable drawstrings for the hood, and spacious pockets to keep your essentials close. Its versatile design allows you to layer it over casual outfits or wear it as a statement piece. Whether you're lounging at home, running errands, or meeting up with friends, the men's hoodie jacket ensures you'll stay warm without compromising on style. Available in a range of modern colors, this hoodie jacket is the ultimate addition to any casual wardrobe." },
    { 
      id: 29,
       name: "Men's Sneakers 2.0",
        category: "Footwear",
         price: 89.99, 
         image: "/img55.jpg", 
       description: "The men's sneakers 2.0 are designed for ultimate comfort and modern style. Featuring a sleek, sporty look, these sneakers are perfect for everyday wear, whether you're heading to the gym, going for a run, or just running errands. The upgraded version boasts enhanced cushioning and support, making them ideal for long hours on your feet. The breathable mesh upper keeps your feet cool and comfortable, while the durable rubber sole provides excellent traction for various surfaces. With a versatile design that pairs well with both casual and athletic wear, the men's sneakers 2.0 combine function and fashion, ensuring you stay comfortable and stylish throughout the day." },
    { 
      id: 30,
       name: "Men's Running Shorts", 
       category: "Clothing",
        price: 24.99, 
        image: "/img56.jpg", 
        description: "The men's running shorts are designed for maximum comfort and performance during your workout or outdoor activities. Made from lightweight, breathable fabric, these shorts provide optimal ventilation to keep you cool even during intense exercise. The moisture-wicking material quickly absorbs sweat, ensuring you stay dry and comfortable throughout your run or training session. The stretchy waistband with an adjustable drawstring ensures a secure and personalized fit, while the side pockets offer convenient storage for small essentials like keys or a phone. With a stylish, modern cut, these running shorts allow for full range of motion, making them perfect for running, jogging, or any active pursuit. Whether you're at the gym or on the trails, these shorts are your go-to choice for comfort and style." },
  { 
    id: 31,
     name: "Women's Dress", 
     category: "Clothing",
      price: 49.99, 
      image: "/women1.jpg", 
      description: "The Women's Dress is a stylish and elegant choice for formal events, offering a timeless and flattering fit. Made from high-quality materials, this dress combines sophistication with comfort. Its classic design and refined silhouette make it perfect for weddings, galas, and other upscale occasions. The soft fabric drapes gracefully, providing a smooth and luxurious feel. The dress can be easily paired with heels and subtle jewelry for a polished look. Available in various sizes, this dress ensures you stand out in any formal setting."
     },
  { 
    id: 32,
     name: "Women's T-Shirt", 
     category: "Clothing",
      price: 19.99, 
      image: "/women2.jpg", 
      description: "The Women's T-Shirt is the epitome of comfort and casual style. Crafted from soft cotton, it feels gentle on the skin, providing all-day wearability. Its versatile design allows for easy pairing with jeans, shorts, or skirts, making it a perfect addition to your everyday wardrobe. Whether you're running errands, lounging at home, or enjoying a relaxed day out, this t-shirt offers a laid-back, easygoing vibe. With a classic fit and a variety of colors, it’s a must-have staple for every woman’s closet." },
  { 
    id: 33,
     name: "Women's Jeans", 
     category: "Clothing",
      price: 39.99, 
      image: "/women3.jpg", 
      description: "The Women's Jeans offer a modern, slim-fit design that’s both flattering and comfortable. These jeans are crafted with a blend of cotton and stretchy materials, providing a perfect balance of style and flexibility. The slim fit hugs your curves, giving you a sleek and polished look, while the high-quality fabric ensures durability and a soft feel. Whether you’re heading out for a casual outing or pairing them with a dressy top for a night out, these jeans are a versatile and essential piece for any wardrobe.." },
  { 
    id: 34,
     name: "Women's Handbag", 
     category: "Accessories",
      price: 89.99, 
     image: "/women4.jpg", 
     description: "The Women's Handbag is both chic and functional, offering ample space for all your essentials without compromising on style. Made from premium materials, this handbag features a sleek design with a spacious interior and multiple compartments for easy organization. Its sturdy straps ensure comfortable carrying, while the elegant finish adds a touch of sophistication to any outfit. Whether for daily use or special occasions, this handbag is the perfect accessory to complement your fashion-forward look." },
  { 
    id: 35,
     name: "Women's Sandals", 
     category: "Footwear", 
     price: 29.99, 
     image: "/women5.jpg", 
     description: "The Women's Sandals are a perfect blend of style and comfort for casual outings in warm weather. Crafted from durable materials, these sandals feature a simple yet trendy design that pairs well with dresses, shorts, or skirts. The open-toe design and adjustable straps ensure a perfect fit, making them ideal for everyday wear. Whether you're heading to the beach or enjoying a sunny day in the city, these sandals will keep you comfortable and stylish all day long. Available in various colors, they’re a must-have addition to your summer wardrobe." },
  { 
    id: 36,
     name: "Women's Sunglasses",
      category: "Accessories", 
      price: 49.99, 
      image: "/women6.jpg", 
     description: "The Women's Sunglasses are a must-have accessory for any fashion-forward individual. Designed to provide excellent UV protection, they feature a sleek, modern frame that enhances your look while safeguarding your eyes from the sun's harmful rays. These sunglasses combine style with function, offering a versatile accessory that complements any outfit. Whether you’re relaxing at the beach or strolling through the city, these trendy sunglasses will elevate your style and protect your eyes with ease." },
  { 
    id: 37,
     name: "Women's Blouse", 
     category: "Clothing",
      price: 34.99, 
      image: "/women7.jpg", 
      description: "The Women's Blouse is an elegant and versatile piece that’s perfect for both work and casual wear. Made from lightweight and breathable fabric, it offers comfort without compromising on style. The sophisticated design includes subtle details that make it ideal for office settings, while its relaxed fit allows for easy movement. Pair it with dress pants for a professional look, or with jeans for a more laid-back, casual vibe. Available in a range of colors, this blouse is a timeless wardrobe staple." },
  { 
    id: 38,
     name: "Women's Hoodie", 
     category: "Clothing",
      price: 39.99, 
      image: "/women8.jpg", 
      description: "The Women's Hoodie is the ultimate cozy companion for colder days. Made from soft, high-quality fabric, this hoodie provides warmth and comfort without feeling too heavy. The relaxed fit and adjustable drawstrings ensure a perfect fit, while the ribbed cuffs and hem keep the cold out. Whether you're lounging at home, running errands, or layering it over a casual outfit, this hoodie is both stylish and practical. Available in various colors, it's an essential addition to your wardrobe for chilly days and nights." },
  { 
    id: 39,
     name: "Women's Watch", 
     category: "Accessories", 
     price: 119.99,
      image: "/women9.jpg", 
     description: "The Women's Watch combines elegance with modern design, featuring a stainless steel band that adds durability and sophistication. The sleek, minimalist dial offers a timeless look, while the polished finish gives it a touch of luxury. Whether worn at work, a night out, or a casual day, this watch is a versatile accessory that complements any outfit. Designed to keep you punctual and stylish, this watch makes a statement wherever you go." },
  { 
    id: 40,
     name: "Women's Boots",
      category: "Footwear",
       price: 79.99,
        image: "/women10.jpg", 
     description: "The Women's Boots are the perfect footwear for colder months, offering both style and functionality. Made from durable materials, these boots are designed to keep your feet warm and dry in harsh weather conditions. With a trendy design that can be paired with jeans, skirts, or dresses, they’re perfect for everything from casual outings to more formal events. The sturdy sole provides excellent grip, ensuring comfort and stability as you walk. Available in a variety of colors, these boots are a winter essential." },
  { 
    id: 41,
     name: "Women's Leggings", 
     category: "Clothing",
      price: 24.99, 
      image: "/women11.jpg", 
      description: "The Women's Leggings are designed for ultimate comfort and flexibility, making them perfect for workouts or casual wear. Crafted from stretchy, breathable fabric, these leggings provide a snug fit that moves with you, offering maximum comfort during yoga, running, or everyday activities. The high-waisted design ensures a smooth silhouette, while the versatile style allows you to pair them with tunics, t-shirts, or hoodies. Whether you're hitting the gym or relaxing at home, these leggings are a practical and stylish choice." },
  { 
    id: 42,
     name: "Women's Scarf", 
     category: "Accessories", 
     price: 19.99, 
     image: "/women12.jpg", 
     description: "The Women's Scarf is a soft and stylish accessory that complements any outfit, whether it's for warmth or fashion. Made from cozy, lightweight material, it provides just the right amount of comfort during cooler days. Its versatile design allows it to be paired with casual or formal wear, adding a touch of sophistication to your look. Available in a range of colors and patterns, this scarf can be worn in various ways, making it a must-have accessory in every wardrobe." },
  { 
    id: 43,
     name: "Women's Cardigan", 
     category: "Clothing",
      price: 44.99, 
      image: "/women13.jpg", 
      description: "The Women's Cardigan is a lightweight and comfortable addition to any wardrobe, perfect for layering over your favorite outfits. Made from soft and breathable fabric, it adds warmth without feeling too heavy, making it ideal for cooler days. Its versatile design can be paired with dresses, skirts, or pants for a relaxed, stylish look. Whether you're dressing up or down, this cardigan provides both comfort and elegance, making it a go-to piece for year-round wear." },
  { 
    id: 44,
     name: "Women's Sneakers", 
     category: "Footwear", 
     price: 69.99, 
     image: "/women14.jpg", 
     description: "The Women's Sneakers are sporty, stylish, and designed for all-day comfort. With a modern and sleek look, they’re perfect for casual outings, exercise, or everyday wear. These sneakers feature cushioned insoles that provide support, ensuring your feet stay comfortable whether you're walking, running, or standing for long periods. The durable outsole offers excellent traction, making them perfect for various activities. Available in a range of colors, these sneakers are as functional as they are fashionable." },
  { 
    id: 45,
     name: "Women's Skirt", 
     category: "Clothing",
      price: 29.99, 
      image: "/women15.jpg", 
      description: "The Women's Skirt is a chic and versatile piece that can be easily dressed up or down. Made from high-quality fabric, this skirt offers a flattering fit that suits a variety of body types. Whether you're wearing it with a casual t-shirt for a laid-back look or dressing it up with a blouse for a formal event, this skirt adds a stylish flair to your wardrobe. Available in different lengths and colors, it’s a must-have for anyone looking to elevate their fashion game." },
  { 
    id: 46,
     name: "Women's Tote Bag", 
     category: "Accessories", 
     price: 49.99, 
     image: "/women16.jpg", 
     description: "The Women's Tote Bag is the perfect solution for carrying all your daily essentials in one stylish bag. Made from durable material, this spacious tote features a minimalist design that pairs well with any outfit. Whether you're heading to the office, the gym, or running errands, it offers plenty of room for your laptop, books, or other necessities. The sturdy straps ensure comfort while carrying, making it a practical and chic accessory for everyday use." },
  { 
    id: 47,
     name: "Women's Gloves",
      category: "Accessories",
       price: 19.99, 
       image: "/women17.jpg", 
     description: "The Women's Gloves are warm, stylish, and designed to provide comfort in the winter months. Made from soft, insulating material, they keep your hands warm while allowing for full dexterity. The sleek design and fashionable finish ensure that these gloves pair well with any winter outfit. Whether you're running errands in the cold or enjoying outdoor activities, these gloves offer both functionality and style, keeping your hands cozy without sacrificing elegance." },
  { 
    id: 48,
     name: "Women's Casual Jacket", 
     category: "Clothing",
      price: 59.99, 
      image: "/women18.jpg", 
      description: "The Women's Casual Jacket is a versatile piece designed for everyday wear. With its stylish yet comfortable design, this jacket is perfect for layering over t-shirts, sweaters, or dresses. Made from durable materials, it offers warmth and protection from the elements, while the relaxed fit ensures easy movement. Available in various colors, this casual jacket is perfect for running errands, meeting friends, or going for a casual stroll, adding both style and comfort to your wardrobe." },
  { 
    id: 49,
     name: "Women's Clutch",
      category: "Accessories",
       price: 39.99, 
       image: "/women19.jpg", 
     description: "The Women's Clutch is a stylish and elegant accessory perfect for evening events, parties, or special occasions. Made from premium materials, this compact bag features a sleek design that adds sophistication to your look. The perfect size for carrying essentials like your phone, makeup, and cards, it is both functional and fashionable. Whether you're attending a wedding, a dinner party, or a night out, this clutch will add a touch of class to any ensemble." },
     
      {
        id: 50,
        name: "Women's Swimwear",
        category: "Clothing",
        price: 34.99,
        image: "/women20.jpg",
        description: "The Women's Swimwear is a trendy and stylish swimsuit designed for the beach or poolside. Made with high-quality, durable fabric, it offers both comfort and support while ensuring a perfect fit. Whether you're lounging by the pool or enjoying a beach vacation, this swimsuit gives you the confidence to enjoy the water in style. Its sleek design and flattering cut make it suitable for all body types, while the vibrant colors and patterns add a fun, fashionable touch. With its comfortable straps and built-in support, this swimwear is perfect for both relaxation and active water sports. Available in various sizes and designs, it’s your go-to choice for sunny days."
      },
      {
        id: 51,
        name: "Women's Perfume",
        category: "Accessories",
        price: 59.99,
        image: "/women21.jpg",
        description: "Women's Perfume offers a luxurious fragrance that’s perfect for everyday wear. Crafted with a blend of floral, fruity, and musky notes, it leaves a lasting impression wherever you go. This perfume is designed to evoke feelings of confidence and elegance, making it an essential addition to your daily routine. The sophisticated scent lingers throughout the day, keeping you refreshed and smelling wonderful. Packaged in a sleek, elegant bottle, it adds a touch of glamour to your vanity. Whether you're heading to work, meeting friends, or attending a special event, this fragrance complements your personality and style, ensuring you stand out with every spray."
      },
      {
        id: 52,
        name: "Women's Hat",
        category: "Accessories",
        price: 24.99,
        image: "/women22.jpg",
        description: "The Women's Hat is a fashionable accessory that provides both style and sun protection. Crafted from high-quality materials, this hat offers a comfortable fit while shielding you from the sun’s harsh rays. Its classic design makes it a versatile piece that can be worn with various outfits, from casual daytime looks to more sophisticated ensembles. Available in different colors and styles, this hat elevates any outfit, whether you’re spending a day at the beach, running errands, or enjoying an outdoor event. The wide brim offers added protection, while the breathable fabric ensures comfort throughout the day."
      },
      {
        id: 53,
        name: "Women's Earrings",
        category: "Accessories",
        price: 14.99,
        image: "/women23.jpg",
        description: "The Women's Earrings are a pair of elegant, timeless pieces perfect for any occasion. Made from high-quality materials, these earrings are designed to complement a wide range of outfits, from casual looks to formal attire. Their simple yet chic design adds just the right amount of sparkle, making them ideal for everyday wear or special events. Whether you're dressing up for a night out or adding a touch of elegance to your work attire, these earrings are the perfect accessory. Lightweight and comfortable, they can be worn all day without discomfort, making them a versatile addition to your jewelry collection."
      },
      {
        id: 54,
        name: "Women's Blazer",
        category: "Clothing",
        price: 79.99,
        image: "/women24.jpg",
        description: "The Women's Blazer is a sleek and professional piece, ideal for work, meetings, or any occasion that calls for a polished look. Made from a premium fabric blend, this blazer offers a tailored fit that flatters the figure while providing comfort and flexibility. With its sharp lines, classic collar, and versatile design, it pairs effortlessly with trousers, skirts, or dresses. Available in a variety of colors, this blazer can be dressed up for formal events or styled casually for everyday office wear. The high-quality material ensures durability, while the sophisticated style makes it a timeless addition to your wardrobe."
      },
      {
        id: 55,
        name: "Women's Pajamas",
        category: "Clothing",
        price: 39.99,
        image: "/women25.jpg",
        description: "The Women's Pajamas offer ultimate comfort and coziness for a good night's sleep. Made from soft, breathable fabric, these pajamas feel gentle against the skin, ensuring a restful night’s sleep. The relaxed fit and stylish design make them perfect for lounging around the house on lazy days, or for a peaceful night's rest. Whether you're unwinding after a long day or relaxing on a weekend morning, these pajamas provide the perfect balance of comfort and style. Available in a variety of colors and designs, they are a must-have for anyone who values both comfort and fashion during their downtime."
      },
      {
        id: 56,
        name: "Women's Tracksuit",
        category: "Clothing",
        price: 54.99,
        image: "/women26.jpg",
        description: "The Women's Tracksuit is perfect for workouts, lounging, or casual wear. Made from a comfortable, flexible fabric, it offers both style and functionality. The tracksuit’s sporty design is perfect for athletic activities, while the soft material ensures comfort whether you're hitting the gym or relaxing at home. With a full zip-up jacket and matching pants, this tracksuit is both practical and stylish. It comes in a variety of colors and sizes to suit your personal style. Whether you're jogging, doing yoga, or simply running errands, this tracksuit offers the perfect blend of performance and fashion."
      },
      {
        id: 57,
        name: "Women's Boots",
        category: "Footwear",
        price: 89.99,
        image: "/women27.jpg",
        description: "The Women's Boots are stylish, durable, and designed for outdoor activities. Made with sturdy materials, these boots provide both comfort and protection, making them ideal for hiking, walking, or everyday wear during colder months. The high-quality construction ensures durability and long-lasting wear, while the stylish design allows them to be paired with a variety of outfits. Whether you're trekking through rugged terrain or simply walking around town, these boots offer the perfect combination of practicality and fashion. Available in various styles, they provide the support and comfort needed for all-day wear."
      },
      {
        id: 58,
        name: "Women's Slip Dress",
        category: "Clothing",
        price: 49.99,
        image: "/women28.jpg",
        description: "The Women's Slip Dress is a lightweight, elegant piece perfect for casual or evening wear. With its smooth fabric and simple design, it drapes beautifully on the body, offering a flattering and feminine silhouette. The adjustable straps and relaxed fit provide comfort and flexibility, while the minimalist style makes it easy to dress up or down. Whether you're heading to a party, a night out, or simply enjoying a summer evening, this slip dress offers a chic and effortless look. Pair it with heels for a more formal vibe, or with sandals for a laid-back, casual look."
      },
      {
        id: 59,
        name: "Women's Flats",
        category: "Footwear",
        price: 39.99,
        image: "/women29.jpg",
        description: "The Women's Flats are comfortable and versatile shoes perfect for all-day wear. Made from soft, durable materials, they provide a comfortable fit while adding a touch of elegance to any outfit. Whether you're heading to the office, running errands, or going for a casual day out, these flats offer the perfect balance of style and comfort. Their sleek, simple design makes them easy to pair with dresses, skirts, or trousers, while the cushioned insole ensures all-day support. Available in a variety of colors, these flats are the go-to option for anyone looking for chic footwear without compromising on comfort."
      },
      {
        id: 60,
        name: "Women's Cap",
        category: "Accessories",
        price: 19.99,
        image: "/women30.jpg",
        description: "The Women's Cap is a casual and stylish accessory that completes your everyday look. Made from soft, breathable fabric, this cap offers sun protection while adding a relaxed, sporty vibe to any outfit. Its adjustable strap ensures a comfortable, customized fit for all head sizes. Perfect for casual outings, running errands, or spending a day outdoors, this cap is both functional and fashionable. Available in a range of colors, it pairs well with jeans, skirts, or athletic wear, making it a versatile addition to your wardrobe."
      }
    
    
];
