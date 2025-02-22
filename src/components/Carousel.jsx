import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import img3 from "../../public/product/category/cat-1.jpg"
import img1 from "../../public/product/category/cat-1.jpg"
import img4 from "../../public/product/category/cat-1.jpg"
import img2 from "../../public/product/category/cat-1.jpg"

const Carousel = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="w-full h-auto">
      <h1 className="text-center text-5xl font-semibold my-16">Find Your favourite Categories</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="">
            <img src={image} alt={`Slide ${index + 1}`} className="w-[100%] h-120 object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;