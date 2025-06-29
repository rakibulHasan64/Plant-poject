// Slider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Slider() {
   const images = [
      "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC04/image/cache/catalog/demo/banners/slider-01-1730x880.jpg",
      "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC05/image/cache/catalog/demo/banners/slider-01-1580x730.jpg",
      "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC06/image/cache/catalog/demo/banners/slider-02-1720x780.jpg",
      "https://opencart.templatetrip.com/OPC07/OPC190_nursery/OPC06/image/cache/catalog/demo/banners/slider-01-1720x780.jpg"
   ];

   return (
      <div className="container mx-auto py-4">
         <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            loop={true}
            pagination={{ clickable: true }}
            className="rounded-lg"
         >
            {images.map((src, idx) => (
               <SwiperSlide key={idx}>
                  <img src={src} alt={`Slide ${idx + 1}`} className="w-full h-auto object-cover" />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}

export default Slider;
