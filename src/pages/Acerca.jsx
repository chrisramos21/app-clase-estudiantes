import './Acerca.css'
import MenuLateral from "../components/MenuLateral"
const Acerca = () => {
    return (
        <div className="acerca">
            <MenuLateral />
            <div className="acerca-contenido">
                <main className="acerca-principal">
                    <section className="acerca-titulo">
                        <h2 className="acerca-titulo-texto">Acerca de...</h2>
                    </section>
                    <div>
                        <img src="/nosotros.jpg" alt="Acerca de nosotros" />

                        <section>
                            <h3 className="acerca-titulo-info">Historia de la Institución</h3>
                            <p className="acerca-parrafo">
                                Nuestro centro educativo fue fundado en el año 2001 con el propósito de brindar educación de calidad.
                            </p>
                        </section>

                        <section>
                            <h3 className="acerca-titulo-info">Misión y Visión</h3>
                            <p className="acerca-parrafo"><strong>Misión:</strong> Formar estudiantes con excelencia académica y valores sólidos.</p>
                            <p className="acerca-parrafo"><strong>Visión:</strong> Ser una institución líder en educación integral.</p>
                        </section>

                        <section>
                            <h3 className="acerca-titulo-info">Equipo docente</h3>
                            <div className="equipo-docente">
                                <img src="/profesor1.jpg" alt="Profesor 1" />
                                <img src="/profesor2.jpg" alt="Profesor 2" />
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Acerca