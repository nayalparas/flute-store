import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

import Productscarouselbase from "../components/Productscarouselbase"

export default function Products() {
  const product = <div className="col-12 col-md-6 col-lg-4 col-xl-3 my-3">
    <Link to='/products/sdafssadf'>
      <div className="row">
        <div className="col-6 col-md-12">
          <img src='/flute.jpg' className="img-fluid" />
        </div>
        <div className="col-6 col-md-12">
          <div className="m-3 text-black">
            <h4>A Base  | Bamboo | 23Inch | With Cover</h4>
            <div>Price</div>
          </div>
        </div>
      </div>
    </Link>
  </div>

  const [searchParams] = useSearchParams()
  const material = searchParams.get('material')
  const base = searchParams.get('base')

  return (
    <>
      <div className="container mt-5">
        <h2>{material}</h2>
        {!searchParams.get('base') ? <div>
          <Productscarouselbase material={material} base='Base B' />
          <Productscarouselbase material={material} base='Base C' />
          <Productscarouselbase material={material} base='Base D' />
          <Productscarouselbase material={material} base='Base A' />
          <Productscarouselbase material={material} base='Base E' />
          <Productscarouselbase material={material} base='Base F' />
          <Productscarouselbase material={material} base='Base G' />
          <Productscarouselbase material={material} base='Base H' />
          <Productscarouselbase material={material} base='Base I' />
          <Productscarouselbase material={material} base='Base J' />
          <Productscarouselbase material={material} base='Base K' />
        </div> : <div>
          <h5>{base}</h5>
          <div className="row">
            {product}
            {product}
            {product}
            {product}
            {product}
            {product}
            {product}
            {product}
            {product}
            {product}
          </div>
        </div>}
      </div>
    </>
  )
}