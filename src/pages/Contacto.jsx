import './Contacto.css'
import MenuLateral from "../components/MenuLateral"
const Contacto = () => {
    return (
        <div className="contacto">
            <MenuLateral />
            <div className="contacto-contenido">
                <main className="contacto-principal">
                    <section className="contacto-titulo">
                        <h2 className="contacto-titulo-texto">Contactos</h2>
                    </section>
                    <div>
                        <h2>Contáctanos</h2>
                        <form>
                            <label>Nombre:<br /><input type="text" name="nombre" /></label><br />
                            <label>Email:<br /><input type="email" name="email" /></label><br />
                            <label>Mensaje:<br /><textarea name="mensaje"></textarea></label><br />
                            <button type="submit">Enviar</button>
                        </form>

                        <h3>Información de contacto</h3>
                        <p>Teléfono: +57 301 000 0000</p>
                        <p>Email: contacto@centroeducativo.edu.co</p>
                        <p>Dirección: Calle 123 #45-67, Bogotá</p>

                        <h3>Ubicación</h3>
                        <iframe src="" width="100%" height="200"></iframe>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Contacto