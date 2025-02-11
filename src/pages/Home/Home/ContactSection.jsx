const ContactSection = () => {
    return (
        <section className="bg-pink-100 dark:bg-gray-900 py-10">
            <div className="container mx-auto px-4 text-center">
                <div className="w-full md:w-1/3 mx-auto">
                    <h2 className="text-2xl text-center font-bold text-gray-900 dark:text-white mb-6">
                        Let us handle your project, professionally.
                    </h2>
                </div>
                <div className="w-full md:w-1/2 mx-auto p-6">
                    <form className="flex flex-col space-y-4">
                        <div className="flex space-x-4">
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                className="w-1/2 p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                            />
                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                className="w-1/2 p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                            />
                        </div>
                        <div className="flex space-x-4">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                        />
                        <input 
                            type="tel" 
                            placeholder="Phone" 
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                        />
                        </div>
                      
                        <textarea 
                            placeholder="Message" 
                            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600"
                            rows="4"
                        ></textarea>
                        <div>
                        <button 
                            type="submit" 
                            className=" bg-pink-600 text-white p-3 rounded-lg shadow-md hover:bg-pink-800 transition">
                            Send Message
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
