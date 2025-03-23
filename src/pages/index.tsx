import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const onboardingData = [
  {
    title: "Welcome to Our App",
    description:
      "Discover our amazing first feature that will help you achieve great things!",
    image: "/placeholder1.svg",
  },
  {
    title: "Powerful Features",
    description:
      "Experience our second amazing feature that will revolutionize your workflow!",
    image: "/placeholder2.svg",
  },
];

export default function Onboarding() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/kyc");
  };

  return (
    <div className="h-screen bg-white relative">
      <div className="h-[calc(100%-80px)]">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="h-full"
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: ".swiper-custom-pagination",
          }}
        >
          {onboardingData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center h-full px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-64 h-64 bg-gray-200 rounded-lg mb-8"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-2xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-600 text-center"
                >
                  {slide.description}
                </motion.p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[80px] px-6 flex flex-col gap-4 items-center bg-white">
        <div className="swiper-custom-pagination flex gap-2 justify-center"></div>
        <button
          onClick={handleNext}
          className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium"
        >
          Next
        </button>
      </div>
    </div>
  );
}
