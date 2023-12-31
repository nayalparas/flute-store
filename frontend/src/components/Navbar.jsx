import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">DeepakFlutes</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/products?material=Acrylic">Acrylic</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products?material=Bamboo">Bamboo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products?material=Fry+Bamboo">Fry Bamboo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products/?material=PVC">PVC</Link>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link" to="/signup"><button className="btn btn-primary">SignUp</button></Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/login"><button className="btn btn-primary">LogIn</button></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}