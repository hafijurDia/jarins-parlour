const HeroSection = () => {
    return (
        <section className="bg-pink-100 dark:bg-gray-900">
            <div className="container px-4 py-10 mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="w-full md:w-1/2 text-4xl font-bold text-gray-900 leading-tight dark:text-gray-50">
            BEAUTY SALON FOR EVERY WOMEN
          </h1>
          <p className="text-gray-600 mt-4 w-full md:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat.
          </p>
          <button className="mt-6 bg-pink-500 text-gray-50 px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transition">
            Get an Appointment
          </button>
        </div>
        
        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="https://i.ibb.co.com/wF2TNdMh/hero-image.png"
            alt="Salon"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
        </section>
    );
};



export default HeroSection;
