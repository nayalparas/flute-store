export default function Maincarousel() {

  const image = <img src='/flute_wide.jpg' className="card-img-top" />

  return (
    <swiper-container pagination='true' navigation='true' autoplay-disable-on-interaction='false' rewind='true'>
      <swiper-slide>{image}</swiper-slide>
      <swiper-slide>{image}</swiper-slide>
      <swiper-slide>{image}</swiper-slide>
      <swiper-slide>{image}</swiper-slide>
      <swiper-slide>{image}</swiper-slide>
      <swiper-slide>{image}</swiper-slide>
      <swiper-slide>{image}</swiper-slide>
      <swiper-slide>{image}</swiper-slide>
      <swiper-slide>{image}</swiper-slide>
    </swiper-container>
  )
}