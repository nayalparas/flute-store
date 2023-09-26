import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const image = <img src='/flute_wide.jpg' className="card-img-top" />
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>{image}</SwiperSlide>
        <SwiperSlide>{image}</SwiperSlide>
        <SwiperSlide>{image}</SwiperSlide>
        <SwiperSlide>{image}</SwiperSlide>
        <SwiperSlide>{image}</SwiperSlide>
        <SwiperSlide>{image}</SwiperSlide>
        <SwiperSlide>{image}</SwiperSlide>
        <SwiperSlide>{image}</SwiperSlide>
        <SwiperSlide>{image}</SwiperSlide>
      </Swiper>
    </>
  );
}
