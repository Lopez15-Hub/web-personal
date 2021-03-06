import {Link} from 'react-router-dom';
function Nav() {
    var link ="#";
  return (
    <div className="container-fluid bg-orange shadow-sm mb-2">
      <nav className="row">
        <h1 className="text-white">Ezequiel López</h1>
        <div className="row">
          <ul>
            <li className="btn list-item btn-outline-light m-2">
            <Link to="/" className="a">Inicio</Link>
            </li>
            <li className="btn list-item btn-outline-light m-2">
              <Link className="a" to="/articles">
                Artículos
              </Link>
            </li>
            <li className="btn list-item btn-outline-light m-2">
              <a className="a" href={link}>
                Libros
              </a>
            </li>
            <li className="btn list-item btn-outline-light m-2">
              <a className="a" href={link}>
                Contacto
              </a>
            </li>
            <li className="btn btn-light">
             <Link to="/añadir" className="btn btn-light">Añadir articulo</Link>
             <Link to="/" className="btn btn-primary">Volver</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
