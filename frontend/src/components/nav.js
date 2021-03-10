import { Link } from "react-router-dom";
function Nav() {

  return (
    <div className="container-fluid shadow mb-4">
      <div className="row">
      <nav className="navbar navbar-expand-lg navar-dark mt-5">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Mi sitio web</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/articles">Articulos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contacto">Contacto</Link>
        </li>
       
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Mas
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" >Añadir articulo</Link></li>
            <li><Link className="dropdown-item" >Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" >Something else here</Link></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
      
  
      <div className="container-fluid bg-img row">
        <div className="container text-center">
          <h1 className="text-white text-center display-1">Mi sitio web</h1>
          <h3 className="text-white text-center mr-4 lead">
            Una web creada para ti
          </h3>
        </div>
      </div>
    </div>
  );
}
export default Nav;
