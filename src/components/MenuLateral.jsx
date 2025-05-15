import { useNavigate } from "react-router-dom"
import { alertaRedireccion } from "../helpers/funciones";

const MenuLateral = () => {
    let redireccion = useNavigate()
    function cerrarSesion() {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        alertaRedireccion(redireccion, "cerrando sesión...", "/");
    }
    const homeRedireccion = () => {
        redireccion('/home')
    }
    const serviciosRedireccion = () => {
        redireccion('/servicios')
    }
    const contactosRedireccion = () => {
        redireccion('/contacto')
    }

    const acercaRedireccion = () => {
        redireccion('/acerca de')
    }


    return (
        <aside className="menu-lateral">
            <h1 onClick={homeRedireccion} className="menu-lateral-logo">Academia</h1>
            <h1 onClick={homeRedireccion} className="menu-lateral-logo">Home</h1>
            <img className="menu-lateral-logo-imagen" src="/logo.png" alt="logo" />
            <nav className="menu-lateral-navegacion">
                <a onClick={serviciosRedireccion} className="menu-lateral-navegacion-item" href="">Servicios</a>
                <a onClick={contactosRedireccion} className="menu-lateral-navegacion-item" href="">Contacto</a>
                <a onClick={acercaRedireccion} className="menu-lateral-navegacion-item" href="">Acerca de</a>
                <button onClick={cerrarSesion} type='button' className="menu-lateral-navegacion-item">Cerrar sesión</button>
            </nav>
        </aside>
    )
}

export default MenuLateral