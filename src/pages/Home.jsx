import MenuLateral from "../components/MenuLateral"
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <MenuLateral />
            <div className="home-contenido">
                <main className="home-principal">
                    <section className="home-titulo">
                        <h2 className="home-titulo-texto">Estás en el home</h2>
                    </section>
                    <div className="home-info">
                        <h2>Bienvenido, estudiante</h2>
                        <p>Nos alegra tenerte aquí. Este es tu espacio para aprender, crecer y desarrollarte.</p>
                        <h3>Últimas noticias</h3>
                        <div className="home-noticias">
                            <div className="home-noticia">Inicia el semestre 2025-2 el 5 de agosto</div>
                            <div className="home-noticia">Conferencia de bienestar estudiantil el 20 de mayo</div>
                            <div className="home-noticia">Nuevo curso de Programación Web disponible</div>
                        </div>
                        <h3>Accesos rápidos</h3>
                        <div className="home-accesos">
                            <a className="home-acceso" href="/clases">Ir a clases</a>
                            <a className="home-acceso" href="/material">Material de estudio</a>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Home