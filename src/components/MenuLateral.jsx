import { useNavigate } from "react-router-dom"
import { useState } from "react"

const MenuHorizontal = () => {
    const redireccion = useNavigate()
    const [menuAbierto, setMenuAbierto] = useState(false)

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto)
    }

    const homeRedireccion = () => {
        redireccion('/home')
        setMenuAbierto(false)
    }
    const serviciosRedireccion = () => {
        redireccion('/servicios')
        setMenuAbierto(false)
    }
    const contactosRedireccion = () => {
        redireccion('/contacto')
        setMenuAbierto(false)
    }
    const acercaRedireccion = () => {
        redireccion('/acerca de')
        setMenuAbierto(false)
    }
    const cerrarSesionRedireccion = () => {
        redireccion('/')
        setMenuAbierto(false)
    }

    return (
        <header className="menu-header">
            <div className="menu-header-logo-container">
                <h1 onClick={homeRedireccion} className="menu-header-logo">Academia</h1>
                <img className="menu-header-logo-imagen" src="/logo.png" alt="logo" />
            </div>
            
            <button className="menu-header-toggle" onClick={toggleMenu}>
                <span className="menu-header-toggle-icon"></span>
            </button>
            
            <nav className={`menu-header-navegacion ${menuAbierto ? 'menu-abierto' : ''}`}>
                <a onClick={homeRedireccion} className="menu-header-navegacion-item" href="#">Home</a>
                <a onClick={serviciosRedireccion} className="menu-header-navegacion-item" href="#">Servicios</a>
                <a onClick={contactosRedireccion} className="menu-header-navegacion-item" href="#">Contacto</a>
                <a onClick={acercaRedireccion} className="menu-header-navegacion-item" href="#">Acerca de</a>
                <button onClick={cerrarSesionRedireccion} type='button' className="menu-header-navegacion-item cerrar-sesion">Cerrar sesión</button>
            </nav>
        </header>
    )
}

export default MenuHorizontal