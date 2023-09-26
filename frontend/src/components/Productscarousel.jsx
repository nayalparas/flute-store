import { useEffect } from "react"
import { Link } from "react-router-dom"

export default function Productscarousel() {
  const image = <Link to='/products/sdafssadf'>
    <div>
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

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "/scripts/initProductCarousel.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  
  return (
    <>
      <div className="my-5 container">
        <div className="p-4 border border-secondary-subtle rounded-4">
          <h2>Material</h2>
          <swiper-container id='productCarousel' init='false'>
            <swiper-slide>
              {image}
            </swiper-slide>
            <swiper-slide>{image}</swiper-slide>
            <swiper-slide>{image}</swiper-slide>
            <swiper-slide>{image}</swiper-slide>
            <swiper-slide>{image}</swiper-slide>
            <swiper-slide>{image}</swiper-slide>
            <swiper-slide>{image}</swiper-slide>
            <swiper-slide>{image}</swiper-slide>
            <swiper-slide>{image}</swiper-slide>
          </swiper-container>
        </div>
      </div>


      {/* <div className="m-3">
      
    </div> */}
    </>
  )
}