export default function Product() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src='/flute.jpg' className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h3>A Base  | Bamboo | 23Inch | With Cover</h3>
            <h4>Price</h4>
            <div>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}