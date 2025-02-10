import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    designation: "Makeup Artist",
    review:
      "Amazing salon! The staff is very professional and the service was excellent.",
    rating: 5,
    image: "https://via.placeholder.com/80",
  },
  {
    id: 2,
    name: "Emily Roberts",
    designation: "Beauty Enthusiast",
    review:
      "I love the ambiance and the quality of service. Highly recommended!",
    rating: 4,
    image: "https://via.placeholder.com/80",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    designation: "Fashion Blogger",
    review: "The best salon experience I've ever had. Will visit again!",
    rating: 3.5,
    image: "https://via.placeholder.com/80",
  },
  {
    id: 4,
    name: "Emily Roberts",
    designation: "Fashion Blogger",
    review: "The best salon experience I've ever had. Will visit again!",
    rating: 5,
    image: "https://via.placeholder.com/80",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          What Our Clients Say
        </h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 mx-auto rounded-full mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.designation}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  {testimonial.review}
                </p>
                <div className="flex justify-center mt-3">
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={testimonial.rating}
                    readOnly
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
