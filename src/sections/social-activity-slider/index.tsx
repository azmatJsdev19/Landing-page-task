import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";

import { nextBlack, previousBlack } from "../../assets";
import { facebookIcon, twitterIcon, youtubeIcon } from "../../assets";

const slides = [
  {
    text: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    name: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    icon: twitterIcon,
    bg: "bg-[#6F6D94]",
  },
  {
    text: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    name: "Mauricio Sanchez",
    handle: "@m741s",
    icon: twitterIcon,
    bg: "bg-[#E1B48C]",
  },
  {
    text: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    name: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    icon: facebookIcon,
    bg: "bg-[#7A4F6A]",
  },
  {
    text: "Have been using Setapp for almost two years, and I have to say it's the best and the most cost-effective way of having apps on Mac.",
    name: "Arash Pourhabibi",
    handle: "@ArashPourhabibi",
    icon: twitterIcon,
    bg: "bg-[#6F6D94]",
  },
  {
    text: "My favorites ❤️ from @Setapp Ulysses, CleanMyMac X, Paste, MindNode, Swift Publisher.",
    name: "Mauricio Sanchez",
    handle: "@m741s",
    icon: twitterIcon,
    bg: "bg-[#E1B48C]",
  },
  {
    text: "For those of you that wonder where I discover/get all the awesome apps for my Mac that I use, a lot of them are from Setapp!",
    name: "Meredith Sweet",
    handle: "@meredith.sweet.silberstein",
    icon: facebookIcon,
    bg: "bg-[#7A4F6A]",
  },
];

const Index = () => {
  return (
    <div className="border-b border-b-black">
      <div className="container mx-auto px-4 pt-20 pb-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
          <h2 className="text-4xl font-bold text-center lg:text-left">
            Setapp in your words.
          </h2>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center text-center lg:text-left">
            <p className="text-[18px] font-thin leading-relaxed">
              What you say about how Setapp powers you up.
            </p>
            <div className="flex items-center gap-4">
              <img src={facebookIcon} alt="Facebook" />
              <img src={twitterIcon} alt="Twitter" />
              <img src={youtubeIcon} alt="YouTube" />
            </div>
          </div>
        </div>

        {/* SLIDER */}
        <div className="relative rounded-3xl overflow-hidden py-12">
          {/* TOP-RIGHT NAVIGATION */}
          <div className="absolute top-0 right-0 flex gap-3 text-black z-100">
            <button className="swiper-button-prev-custom-social w-10 h-10 flex items-center justify-center cursor-pointer">
              <img src={previousBlack} alt="Previous" />
            </button>
            <button className="swiper-button-next-custom-social w-10 h-10 flex items-center justify-center cursor-pointer">
              <img src={nextBlack} alt="Next" className="h-5" />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={3}
            spaceBetween={24}
            navigation={{
              prevEl: ".swiper-button-prev-custom-social",
              nextEl: ".swiper-button-next-custom-social",
            }}
            pagination={{
              el: ".swiper-pagination-custom-social",
              clickable: true,
            }}
            className="h-auto"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`h-[320px] rounded-lg bg-gray-100 text-white flex flex-col justify-between gap-4`}
                >
                  <div className={`h-full rounded-lg m-1 p-6 ${slide.bg}`}>
                    <p className={`text-[18px] leading-relaxed `}>
                      {slide.text}
                    </p>
                  </div>

                  <div className="flex items-center justify-between p-6 text-black">
                    <div>
                      <p className="font-semibold">{slide.name}</p>
                      <p className="text-xs opacity-80">{slide.handle}</p>
                    </div>
                    <img src={slide.icon} alt="social" className="h-5 w-5" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="swiper-pagination-custom-social flex justify-center gap-2" />
      </div>
    </div>
  );
};

export default Index;
