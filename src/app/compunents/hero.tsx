function Hero() {
  return (
    <div className="bg-[url('/bg1.png')] bg-cover bg-center pb-9 flex flex-col justify-center items-center text-center px-4 py-8 sm:px-8 sm:py-16 md:px-12 md:py-24 pt-10 lg:h-[16cm]">
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Your Cozy Era
      </h1>
      <p className="text-white text-lg sm:text-xl md:text-2xl mb-6">
        Get peak comfy-chic <br />
        with new winter essentials.
      </p>
      <button className="bg-blue-500 text-white py-3 px-8 rounded-full text-lg sm:text-xl hover:bg-blue-600 transition duration-300">
        Shop Now
      </button>
    </div>
  );
}

export default Hero;
