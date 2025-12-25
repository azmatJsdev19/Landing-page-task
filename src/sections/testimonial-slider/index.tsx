import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import { men, next, playButton, previous } from "../../assets";

const slides = [
  {
    text: "Musicians like Jason use Setapp to push the limits of their creativity, dancing through tasks for more time to play.",
    name: "Jason Stacek",
    image: men,
  },
  {
    text: "Setapp helps creators stay focused and productive without distractions.",
    name: "Another Artist",
    image: men,
  },
];

export default function Index() {
  return (
    <div className="-mt-80">
      <div className="container mx-auto px-4">
        {/* SLIDER WRAPPER */}
        <div className="relative rounded-3xl overflow-hidden bg-[#765070]">
          {/* TOP RIGHT NAVIGATION */}
          <div className="absolute top-6 right-6 z-10 flex gap-3">
            <button className="cursor-pointer swiper-button-prev-custom w-10 h-10 text-white/50 text-2xl flex items-center justify-center">
              <img src={previous} />
            </button>
            <button className="cursor-pointer swiper-button-next-custom w-10 h-10 text-white/50 text-2xl flex items-center justify-center">
              <img src={next} />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              el: ".swiper-pagination-custom",
              clickable: true,
            }}
            className="h-[720px]"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center h-full">
                  <div className="w-1/2 p-10 text-white flex flex-col items-start justify-between space-y-20">
                    <div className="space-y-4">
                      <p className="text-xl leading-relaxed max-w-md">
                        {slide.text}
                      </p>
                      <p className="text-sm">{slide.name}</p>
                    </div>
                    <img src={playButton} className="h-[60px]" />
                  </div>

                  <div className="w-1/2">
                    <img
                      src={slide.image}
                      alt={slide.name}
                      className="w-full h-full object-contain mt-20 mr-4"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* PAGINATION OUTSIDE THE BOX */}
        <div className="swiper-pagination-custom flex justify-center gap-2 mt-6" />
      </div>
    </div>
  );
}
