import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import { Scrollbar, Navigation } from 'swiper/modules';

export default function Productscarouselbase({material, base}) {

  const image = <Link to='/products/sdafssadf'>
    <div className='mb-5'>
      <div>
        <img src='/flute.jpg' className="img-fluid" />
      </div>
      <div>
        <div className="m-3 text-black">
          <h5>A Base  | Bamboo | 23Inch | With Cover</h5>
          <div>Price</div>
        </div>
      </div>
    </div>
  </Link>

  return (
    <>
      <div className="my-5 container">
        <div className="p-4 border border-secondary-subtle rounded-4">
          <h2 className='mb-4'>{base}</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            scrollbar={{
              hide: true
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Scrollbar, Navigation]}
          >
            <SwiperSlide>{image}</SwiperSlide>
            <SwiperSlide>{image}</SwiperSlide>
            <SwiperSlide>{image}</SwiperSlide>
            <SwiperSlide>{image}</SwiperSlide>
            <SwiperSlide>{image}</SwiperSlide>
            <SwiperSlide>{image}</SwiperSlide>
            <SwiperSlide>{image}</SwiperSlide>
            <SwiperSlide>{image}</SwiperSlide>
          <SwiperSlide><Link to={`/products/?material=${material}&base=${base}`}><h3 className='text-center'>View All</h3></Link></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
