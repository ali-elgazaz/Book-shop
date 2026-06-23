import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import RichDad from "../assets/best seller/RichDad.png";
import best2 from "../assets/best seller/best2.jpg";
import best3 from "../assets/best seller/best3.png";
import best4 from "../assets/best seller/best4.jpg";
import best5 from "../assets/best seller/best5.jpg";
import best6 from "../assets/best seller/best6.jpg";
import best7 from "../assets/best seller/best7.jpg";
import best8 from "../assets/best seller/best8.png";
import best9 from "../assets/best seller/best9.jpg";
import { Link } from "react-router-dom";

const BestSeller = () => {
  return (
    <section className="bg-[rgba(59,47,74,1)] py-30 flex flex-col items-center overflow-hidden">
      {/* Heading */}
      <div className="pb-20 text-center">
        <h2 className="text-[26px] font-bold">Best Seller</h2>

        <p className="text-[16px] text-white/50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          <br />
          ultricies est. Aliquam in justo varius, sagittis neque ut, malesuada
          leo.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={8}
        spaceBetween={30}
        loop={true}
        className="w-full"
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img
            src={RichDad}
            alt="Rich Dad Book"
            className="w-43.25 h-65 rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={best2}
            alt="Rich Dad Book"
            className="w-43.25 h-65 rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={best3}
            alt="Rich Dad Book"
            className="w-43.25 h-65 rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={best4}
            alt="Rich Dad Book"
            className="w-43.25 h-65 rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={best5}
            alt="Rich Dad Book"
            className="w-43.25 h-65 rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={best6}
            alt="Rich Dad Book"
            className="w-43.25 h-65 rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={best7}
            alt="Rich Dad Book"
            className="w-43.25 h-65 rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={best8}
            alt="Rich Dad Book"
            className="w-43.25 h-65 rounded-xl"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src={best9}
            alt="Rich Dad Book"
            className="w-43.25 h-65 rounded-xl"
          />
        </SwiperSlide>
      </Swiper>

      <Link
        to="/books"
        className="bg-secondary rounded-lg text-[18px] font-semibold mt-20 py-3 px-4 "
      >
        Shop now
      </Link>
    </section>
  );
};

export default BestSeller;
