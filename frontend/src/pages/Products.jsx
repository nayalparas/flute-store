import { Link } from "react-router-dom"
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

  return (
    <>
      <div className="container mt-5">
        <h3>Material</h3>
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
      </div>
    </>
  )
}