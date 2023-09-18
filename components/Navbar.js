import Link from "next/link";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">TOP-MAN</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link legacyBehavior href="/">
            <a className="nav-link active">Inicio
              <span className="visually-hidden">(current)</span>
            </a>
            </Link>
            
          </li>
          <li className="nav-item">
            <Link legacyBehavior href="/formularios">
                <a className="nav-link">Formularios</a>
            </Link>
            
          </li>
          <li className="nav-item">
            <Link legacyBehavior href="/reports">
            <a className="nav-link" >Reportes</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link legacyBehavior href="/autentificacion">
            <a className="nav-link" >Login</a>
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar;