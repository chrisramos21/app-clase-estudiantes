import Formulario from "./Formulario"


const IniciarSesion = () =>{
    return(
        <section className="iniciar-sesion">
            <h1>
                Bienvenido a CLASS STUDENT
            </h1>
            <form className="iniciar-sesion-elementos">
                <h2 className="iniciar-sesion-elementos-titulo">Inicio de sesión</h2>
                <label for="Name" >Nombre</label>
                <Formulario/>
                <div className="iniciar-sesion-elementos-nombre">
                    <label for="Name" >Contraseña</label>
                    <label for="Name" >¿Olvidó contraseña?</label>
                </div>
                <Formulario/>
                <button className="iniciar-sesion-elementos-boton">Iniciar sesion</button>
            </form>
        </section>
    )
}

export default IniciarSesion