import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-pink-600 text-white pt-10 pb-20">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
                {/* Address and Company Name */}
                <div className="space-y-2">
                    <h2 className="text-lg mb-3">Company Name</h2>
                    <p className="flex items-center justify-center md:justify-start text-sm"><FaMapMarkerAlt className="mr-2" /> 123 Beauty St, Salon City</p>
                    <p className="flex items-center justify-center md:justify-start text-sm"><FaPhone className="mr-2" /> +123 456 7890</p>
                    <p className="flex items-center justify-center md:justify-start text-sm"><FaEnvelope className="mr-2" /> info@company.com</p>
                </div>
                
                {/* Company Links */}
                <div >
                    <h2 className="text-lg mb-3">Company</h2>
                    <ul className="space-y-2">
                        <li><Link to="/about" className="text-sm">About</Link></li>
                        <li><Link to="/services" className="text-sm">Services</Link></li>
                        <li><Link to="/careers" className="text-sm">Careers</Link></li>
                        <li><Link to="/contact" className="text-sm">Contact</Link></li>
                    </ul>
                </div>
                
                {/* Important Links */}
                <div>
                    <h2 className="text-lg mb-3">Important Links</h2>
                    <ul className="space-y-2">
                        <li><Link to="/privacy" className="text-sm">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="text-sm">Terms & Conditions</Link></li>
                        <li><Link to="/support" className="text-sm">Support</Link></li>
                        <li><Link to="/faqs" className="text-sm">FAQs</Link></li>
                    </ul>
                </div>
                
                {/* About Us and Social Links */}
                <div className="space-y-2">
                    <h2 className="text-lg mb-3">About Us</h2>
                    <p className="mb-3 text-sm">We provide top-notch beauty services to make you shine. Visit us for an amazing salon experience.</p>
                    <div className="flex justify-center md:justify-start space-x-4 pt-4">
                        <a href="#" className="hover:text-gray-200"><FaFacebook size={20} /></a>
                        <a href="#" className="hover:text-gray-200"><FaTwitter size={20} /></a>
                        <a href="#" className="hover:text-gray-200"><FaInstagram size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;