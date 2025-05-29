import { Link } from 'react-router-dom'
import style from '../styles/globals.module.css'

export default function Header() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark px-4 ${style.navCustom}`}>
      <div className="container-fluid">
        <img className={style.adipLogo} src='/ADIPLogo.jpeg' alt="logoAdip" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2 mt-3 mt-lg-0">
            <li className="nav-item">
              <Link className="btn btn-outline-light" to="/">Ficha</Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-light" to="/informacoes">Informações</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}