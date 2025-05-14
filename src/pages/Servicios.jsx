import './Servicios.css'
import MenuLateral from "../components/MenuLateral"
const Servicios = () => {
    return (
        <div className="servcio">
            <MenuLateral />
            <div className="servicios-div">
                <main className="servicio-principal">
                    <section className="servicio-titulo">
                        <h2 className="servicio-titulo-texto">Servicios</h2>
                    </section>
                    <div className="servicios-cuerpo">
                        <div className="servicios-card">
                            <h2>Cursos ofrecidos</h2>
                            <ul>
                                <li>Introducción a la programación</li>
                                <li>Diseño gráfico</li>
                                <li>Matemáticas avanzadas</li>
                            </ul>
                        </div>

                        <div className="servicios-card">
                            <h3>Horarios disponibles</h3>
                            <p>Tenemos clases disponibles en la mañana, tarde y noche.</p>
                        </div>

                        <div className="servicios-card">
                            <h3>Modalidad</h3>
                            <p>Ofrecemos cursos tanto virtuales como presenciales.</p>
                        </div>

                        <div className="servicios-card">
                            <h3>Inscripciones</h3>
                            <p>Comunícate con nosotros para inscribirte en cualquier curso.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Servicios