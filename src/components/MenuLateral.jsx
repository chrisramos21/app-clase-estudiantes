import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { alertaRedireccion } from "../helpers/funciones";

const MenuLateral = () => {
  let redireccion = useNavigate();

  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  function cerrarSesion() {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    setMenuAbierto(false);
    alertaRedireccion(redireccion, "cerrando sesión...", "/");
  }

  return (
    <>
      <header className="menu-header">
        <div className="menu-header-logo-container">
          <Link to = "/home" className="menu-header-logo">
            Academia
          </Link>
          <img className="menu-header-logo-imagen" src="/logo.png" alt="logo" />
        </div>

        <button className="menu-header-toggle" onClick={toggleMenu}>
          <span className="menu-header-toggle-icon"></span>
        </button>

        <nav
          className={`menu-header-navegacion ${
            menuAbierto ? "menu-abierto" : ""
          }`}
        >
          <Link to = "/home"
            className="menu-header-navegacion-item"
            href="#"
          >
            Home
          </Link>
          <Link to = "estudiante"
            className="menu-header-navegacion-item"
            href="#"
          >
            Estudiantes
          </Link>
          <Link to = "contacto"
            className="menu-header-navegacion-item"
            href="#"
          >
            Contacto
          </Link>
          <Link to = "acerca de"
            className="menu-header-navegacion-item"
            href="#"
          >
            Acerca de
          </Link>
          <button
            onClick={cerrarSesion}
            type="button"
            className="menu-header-navegacion-item cerrar-sesion"
          >
            Cerrar sesión
          </button>
        </nav>
      </header>
    </>
  );
};

export default MenuLateral;
