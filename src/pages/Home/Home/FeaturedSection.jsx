const FeaturedSection = () => {
  return (
    <section className="bg-pink-100 dark:bg-gray-900">
      <div className="container px-4 py-10 mx-auto flex flex-col md:flex-row items-center">
        {/* Right Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="https://i.ibb.co.com/35B5b6Ym/fetured-image.png"
            alt="Salon"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>

        {/* Left Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="w-full  text-2xl font-bold text-gray-900 leading-tight dark:text-gray-50">
            Let us handle your screen
            <span className="text-pink-600"> Professionally</span>.
          </h1>
          <p className="text-gray-600 mt-4 w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat.
          </p>
          <div className="mt-14 flex gap-10">
            <div className="space-y-3">
                <p className="text-4xl font-bold text-pink-600">500 +</p>
                <p className="text-black dark:text-gray-50">Happy Customer</p>
            </div>
            <div className="space-y-3">
            <p className="text-4xl font-bold text-pink-600">16 +</p>
            <p className="text-black dark:text-gray-50">Total Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
