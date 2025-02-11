

const services = [
  {
    id: 1,
    title: "Anti Age Face Treatment",
    price: "$50",
    description: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    icon: "https://i.ibb.co.com/XkK1nQkY/Group-1373.png", 
  },
  {
    id: 2,
    title: "Hair Color & Styleing",
    price: "$70",
    description: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
    icon: "https://i.ibb.co.com/F4kBq4WM/Group-1374.png",
  },
  {
    id: 3,
    title: "Skin Care Treatment",
    price: "$40",
    description: "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
    icon: "https://i.ibb.co.com/fYNS0qrW/Group-1372.png",
  },
];

const ServicesSection = () => {
  return (
    <section className='bg-white dark:bg-gray-900'>
        <div className="container mx-auto px-4 py-16 text-center text-gray-50">
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-50 ">Our Awesome <span className='text-pink-600'>Services</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`p-6 rounded-lg ${index === 1 ? 'shadow-lg' : ''}`}
          >
            <img src={service.icon} alt={service.title} className="mx-auto mb-4 w-16 h-16" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-50">{service.title}</h3>
            <p className="text-pink-600 text-xl font-bold">{service.price}</p>
            <p className="text-gray-400 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
      <button className="mt-8 bg-pink-600 hover:bg-pink-800 text-gray-50 px-6 py-3 rounded-lg shadow-md hover:bg-pink-600 transition">
        Explore More
      </button>
    </div>
    </section>
  );
};

export default ServicesSection;