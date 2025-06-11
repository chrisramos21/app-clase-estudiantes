

let apiEnvios = "https://back-json-server-martes.onrender.com/envios";

function GestionEstudiantes() {



    return (
        <div className="servicios-card" key={student.id}>
            <h3>ID: {student.id_student}</h3>
            <p>Grado: {student.grade_level}</p>
            <p>Nacimiento: {student.birth_date}</p>
            <p>Dirección: {student.address}</p>
            <p>ID Usuario: {student.fk_user}</p>
            <button
                onClick={() => eliminarEnvio(item.id)}
                className="card__button">
                Eliminar
            </button>
            <Link to={"/home/editar/" + item.id} className="card__button">
                Editar
            </Link>
        </div>
    )
}

export default GestionEstudiantes