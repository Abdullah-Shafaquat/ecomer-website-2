import Image from "next/image";
import Hero from "./compunents/hero";
import * as React from "react"


import { FaStar } from "react-icons/fa";



function Home() {
  return ( 
    <div>
     
      <Hero/>
      <h1 className=" text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center mt-9">Shop by Category</h1 >
      <div className="p-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
      
       <div>
         <Image src="/image.png" alt="" height={200} width={200} />
         <p className="text-center text-gray-600  mt-2 uppercase">SHIRTS </p>
         </div>       
       <div>
         <Image src="/image1.png" alt="" height={200} width={200} />
         <p className="text-center text-gray-600  mt-2 uppercase">Denim</p>
         </div>
       <div>
         <Image src="/image2.png" alt="" height={200} width={200} />
         <p className="text-center text-gray-600  mt-2 uppercase">tess</p>
         </div>
       <div>
         <Image src="/image3.png" alt="" height={200} width={200} />
         <p className="text-center text-gray-600  mt-2 uppercase">pants</p>
         </div>
       <div>
         <Image src="/image4.png" alt="" height={200} width={200} />
         <p className="text-center text-gray-600  mt-2 uppercase">sweaters</p>
         </div>
       <div>
         <Image src="/image5.png" alt="" height={200} width={200} />
         <p className="text-center text-gray-600  mt-2 uppercase">outerwear</p>
         </div>
</div>

  <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-6 p-7">
    <div className="bg-[url('/bg2.png')] bg-no-repeat bg-cover bg-center pb-9 flex flex-col justify-center items-center text-center px-4 py-8 sm:px-8 sm:py-16 md:px-12 md:py-24 pt-10 lg:h-full">
   
    <h1 className="text-center  mt-2 uppercase text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">New Arrivals</h1>
    <button className="bg-white px-2 py-3 rounded-lg">SHOP THE LATEST</button>

    </div>
    <div className="bg-[url('/bg3.png')] bg-cover bg-center pb-9 flex flex-col justify-center items-center text-center px-4 py-8 sm:px-8 sm:py-16 md:px-12 md:py-24 pt-10 lg:h-[16cm]">
    <h1 className="text-center  mt-2 uppercase text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Best-Sellers</h1>
    <button className="bg-white px-2 py-3 rounded-lg">SHOP YOUR FAVORITES</button>

    </div>

    <div className="bg-[url('/bg4.png')] bg-cover bg-center pb-9 flex flex-col justify-center items-center text-center px-4 py-8 sm:px-8 sm:py-16 md:px-12 md:py-24 pt-10 lg:h-[16cm]">
    <h1 className="text-center  mt-2 uppercase text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">The Holiday Outfit</h1>
    <button className="bg-white px-2 py-3 rounded-lg">SHOP OCCASION</button>

    </div>


    
     </div>
      <div className="bg-[url('/bg5.png')] bg-cover bg-center flex flex-col justify-center items-center text-white p-7">
     <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-6 text-center ">We’re on a Mission To Clean Up the Industry</h1>
    <p className="text-xl text-center">Read about our progress in our latest Impact Report.</p>
     <button className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-medium shadow-lg hover:bg-gray-100 transition mt-5">
     LEARN MORE
     </button>
     </div>




         <div>
         <div className="text-center my-6 mt-9">
         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-gray-800">
         Everlane Favorites
          </h1>
           <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mt-4">
          Beautifully Functional. Purposefully Designed. Consciously Crafted.
         </p>
          </div>

          <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
  {/* Card 1 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image src="/image6.jpg" alt="The Waffle Long-Sleeve Crew" height={500} width={400} className="w-full object-cover" />
    <div className="p-4 flex">
      <h1 className=" text-gray-600 mt-2 uppercase font-semibold">The Waffle Long-Sleeve Crew</h1><div className=" justify-end text-end pt-2 pl-6 ml-8"><p>60$</p></div>
      
    </div>
    <p className="text-gray-400 mt-2 uppercase text-sm sm:text-base p-4">Bone</p>
  </div>

  {/* Card 2 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image src="/image7.png" alt="The Bomber Jacket | Uniform" height={500} width={400} className="w-full  object-cover" />
    <div className="p-4 flex">
      <h1 className=" text-gray-600 mt-2 uppercase font-semibold">The Bomber Jacket | Uniform</h1><div className=" justify-end text-end pt-2 pl-6 ml-8"><p>148$</p></div>
      
    </div>
    <p className="text-gray-400 mt-2 uppercase text-sm sm:text-base p-4">Toasted Coconut</p>
  </div>

  {/* Card 3 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image src="/image8.png" alt="The Slim 4-Way Jean | Uniform" height={500} width={400} className="w-full object-cover" />
    <div className="p-4 flex">
      <h1 className=" text-gray-600 mt-2 uppercase font-semibold">
        The Slim 4-Way  <br />
        Stretch Organic <br /> Jean | Uniform
      </h1> <div className=" justify-end text-end pt-2 pl-6 ml-8"><p>98$</p></div>
      
    </div>
    <p className="text-gray-400 mt-2 uppercase text-sm sm:text-base p-4">Dark Indigo</p>
  </div>

  {/* Card 4 */}
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <Image src="/image9.png" alt="The Essential Organic Crew" height={500} width={400} className="w-full  object-cover" />
    <div className="p-4 flex">
      <h1 className=" text-gray-600 mt-2 uppercase font-semibold">The Essential Organic Crew</h1><div className=" justify-end text-end pt-2 pl-6 ml-8"><p>30$</p></div>
      
    </div>
    <p className="text-gray-400 mt-2 uppercase text-sm sm:text-base p-4">Vintage Black</p>
  </div>
</div>
</div>


<div className="p-4 sm:p-8 md:p-16 lg:p-36 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
  <div className="flex flex-col justify-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-4">
      People Are Talking
    </h1>
    <p className="flex mb-4">
      <FaStar size={18} className="text-yellow-500 sm:text-20 md:text-23" />
      <FaStar size={18} className="text-yellow-500 sm:text-20 md:text-23" />
      <FaStar size={18} className="text-yellow-500 sm:text-20 md:text-23" />
      <FaStar size={18} className="text-yellow-500 sm:text-20 md:text-23" />
    </p>
    <p className="text-gray-600 mb-4 text-sm sm:text-base lg:text-lg">
      “Love this shirt! Fits perfectly and the fabric is thick without being stiff.”
    </p>
    <p className="text-gray-500 text-xs sm:text-sm lg:text-base">
      -- JonSnSF, The Heavyweight Overshirt
    </p>
  </div>

  <div>
    <Image
      src="/image10.png"
      alt="The Essential Organic Crew"
      height={500}
      width={400}
      className="w-full object-cover rounded-lg shadow-lg"
    />
  </div>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-8 md:p-12 border-t-2 border-black">
  {/* Section 1 */}
  <div className="flex flex-col items-center text-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
      Our Holiday Gift Picks
    </h1>
    <Image
      src="/image11.png"
      alt="Holiday Gift"
      height={400}
      width={400}
      className="w-full sm:w-3/4 md:w-2/3 lg:w-5/6 object-cover rounded-lg mb-4"
    />
    <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4">
      The best presents for everyone on your list.
    </p>
    <button className="px-6 py-2 bg-white underline text-black rounded-md transition duration-300">
      Read More
    </button>
  </div>

  {/* Section 2 */}
  <div className="flex flex-col items-center text-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
      Cleaner Fashion
    </h1>
    <Image
      src="/image12.png"
      alt="Cleaner Fashion"
      height={400}
      width={400}
      className="w-full sm:w-3/4 md:w-2/3 lg:w-5/6 object-cover rounded-lg mb-4"
    />
    <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4">
      See the sustainability efforts behind each of our products.
    </p>
    <button className="px-6 py-2 bg-white underline text-black rounded-md transition duration-300">
      Learn More
    </button>
  </div>
</div>



<div className="border-t-2 border-black p-4">
  {/* Title */}
  <h1 className="text-center mt-6 mb-5 text-2xl sm:text-3xl md:text-4xl">
    Everlane On You
  </h1>

  {/* Description */}
  <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg">
    Share your latest look with Everlane On You for a chance to be featured.
  </p>
  <p className="text-center text-gray-500 text-sm sm:text-base md:text-lg mt-2">
    Add Your Photo
  </p>

  {/* Image Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
    <Image
      src="/image13.png"
      alt=""
      height={300}
      width={300}
      className="w-full object-cover rounded-lg"
    />
    <Image
      src="/image14.png"
      alt=""
      height={300}
      width={300}
      className="w-full object-cover rounded-lg"
    />
    <Image
      src="/image15.png"
      alt=""
      height={300}
      width={300}
      className="w-full object-cover rounded-lg"
    />
    <Image
      src="/image16.png"
      alt=""
      height={300}
      width={300}
      className="w-full object-cover rounded-lg"
    />
    <Image
      src="/image17.png"
      alt=""
      height={300}
      width={300}
      className="w-full object-cover rounded-lg"
    />
  </div>
</div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 text-center mt-12 mb-8">
  {/* Item 1 */}
  <div className="flex flex-col items-center">
    {/* Icon */}
    <div className="mb-4">
    <Image src="/image18.png" alt="" height={80} width={80} />
      
    </div>
    {/* Heading */}
    <h3 className="text-lg font-semibold text-gray-800">Complimentary Shipping</h3>
    {/* Description */}
    <p className="text-gray-600 text-sm">
      Enjoy free shipping on U.S. orders over $100.
    </p>
  </div>

  {/* Item 2 */}
  <div className="flex flex-col items-center">
    {/* Icon */}
    <div className="mb-4">
    <Image src="/image19.png" alt="" height={80} width={80} />
    </div>
    {/* Heading */}
    <h3 className="text-lg font-semibold text-gray-800">Consciously Crafted</h3>
    {/* Description */}
    <p className="text-gray-600 text-sm">
      Designed with you and the planet in mind.
    </p>
  </div>

  {/* Item 3 */}
  <div className="flex flex-col items-center">
    {/* Icon */}
    <div className="mb-4">
    <Image src="/image20.png" alt="" height={80} width={80} />
    </div>
    {/* Heading */}
    <h3 className="text-lg font-semibold text-gray-800">Come Say Hi</h3>
    {/* Description */}
    <p className="text-gray-600 text-sm">
      We have 11 stores across the U.S.
    </p>
  </div>
</div>




  </div>

    
   );
}

export default Home;
