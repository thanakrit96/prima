import React from "react";
import { css } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const WrapperBanner = css`
  margin-top: 6em;
  @media (max-width: 480px) {
      padding: 10px 10px;
    }

  .swiper-pagination-bullet {
    background: white;
  }
`;

const BannerComponent = ({ bannerList, pageName }) => {
  let isLooping = bannerList.length > 1
  return (
    <div css={WrapperBanner} className="w-full">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        loop={isLooping}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper "
      >
        {bannerList.map((items, index) => (
          <SwiperSlide key={index}>
             <img src={items.url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerComponent;
