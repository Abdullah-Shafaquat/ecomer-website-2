import Image from "next/image";

function About() {
    return ( 
        <div>
             <div className="bg-[url('/bg6.png')] bg-cover bg-center pb-9 flex flex-col justify-center items-center text-center px-4 py-8 sm:px-8 sm:py-16 md:px-12 md:py-24 pt-10 lg:h-[16cm]">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
           We believe <br />
           we can all make <br />
           a difference.
      </h1>
      <p className="text-white text-lg sm:text-xl md:text-2xl mb-6">
      Our way: Exceptional quality.
      Ethical factories. Radical Transparency.
      </p>
    </div>
    <div className="p-6 sm:p-8 md:p-10 lg:p-20 rounded-lg shadow-lg bg-gray-100">
  <p className="text-gray-700 text-base sm:text-xl md:text-2xl leading-relaxed text-center">
    At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make. It’s a new way of doing things. We call it Radical Transparency.
  </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 sm:p-10 md:p-12 rounded-lg shadow-lg bg-[#ECEBDE]">
  {/* Image Section */}
  <div className="flex justify-center items-center">
    <Image
      src="/image21.png"
      alt="Ethical Approach"
      height={400}
      width={400}
      className="w-full sm:w-3/4 md:w-2/3 lg:w-full object-cover rounded-lg shadow-md"
    />
  </div>

  {/* Text Section */}
  <div className="flex flex-col justify-center">
    <h1 className="font-bold text-gray-800">OUR FACTORIES</h1>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
      Our Ethical Approach
    </h1>
    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
      We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.
    </p>
  </div>
</div>
<div className="bg-[url('/bg7.png')] bg-cover bg-center pb-9 flex flex-col justify-center items-center text-center px-4 py-8 h-52 sm:px-8 sm:py-16 md:px-12 md:py-24 pt-10 lg:h-[16cm]"></div>


<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 sm:p-10 md:p-12  rounded-lg shadow-lg bg-[#ECEBDE]">
 

  {/* Text Section */}
  <div className="flex flex-col justify-center ">
    <h1 className="font-bold text-gray-800">OUR QUALITY</h1>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
    Designed <br />
    to last.
    </h1>
    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
    At Everlane, we’re not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.
    </p>
  </div>
   {/* Image Section */}
   <div className="flex justify-center items-center">
    <Image
      src="/image22.png"
      alt="Ethical Approach"
      height={400}
      width={400}
      className="w-full sm:w-3/4 md:w-2/3 lg:w-full object-cover rounded-lg shadow-md"
    />
  </div>
</div>
<div className="bg-[url('/bg8.png')] bg-cover bg-center pb-9 flex flex-col justify-center items-center text-center px-4 py-8 sm:px-8 sm:py-16 md:px-12 h-52 md:py-24 pt-10 lg:h-[16cm]"></div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 sm:p-10 md:p-12 rounded-lg shadow-lg ">
  {/* Image Section */}
  <div className="flex justify-center items-center">
    <Image
      src="/image23.png"
      alt="Ethical Approach"
      height={400}
      width={400}
      className="w-full sm:w-3/4 md:w-2/3 lg:w-full object-cover rounded-lg shadow-md bg-white"
    />
  </div>

  {/* Text Section */}
  <div className="flex flex-col justify-center">
    <h1 className="font-bold text-gray-800">OUR PRICES</h1>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
    Radically Transparent.
    </h1>
    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
    We believe our customers have a right to know how much their clothes cost to make. We reveal the true costs behind all of our products—from materials to labor to transportation—then offer them to you, minus the traditional retail markup.
    
    </p>
  </div>
</div>



<div className="text-center py-8">
    <h1 className="text-4xl font-bold text-gray-800">More to Explore</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mt-8">
        <div className="text-center">
            <Image
                src="/image24.png"
                alt="Ethical Approach"
                height={400}
                width={400}
                className="w-full sm:w-3/4 md:w-2/3 lg:w-full object-cover rounded-lg shadow-md bg-white"
            />
            <p className="mt-4 text-xl font-medium text-gray-700">Our Products</p>
        </div>
        
        <div className="text-center">
            <Image
                src="/image25.png"
                alt="Ethical Approach"
                height={400}
                width={400}
                className="w-full sm:w-3/4 md:w-2/3 lg:w-full object-cover rounded-lg shadow-md bg-white"
            />
            <p className="mt-4 text-xl font-medium text-gray-700">Our Stores</p>
        </div>

        <div className="text-center">
            <Image
                src="/image26.png"
                alt="Ethical Approach"
                height={400}
                width={400}
                className="w-full sm:w-3/4 md:w-2/3 lg:w-full object-cover rounded-lg shadow-md bg-white"
            />
            <p className="mt-4 text-xl font-medium text-gray-700">Careers</p>
        </div>
    </div>
</div>





</div>

       
     );
}

export default About;