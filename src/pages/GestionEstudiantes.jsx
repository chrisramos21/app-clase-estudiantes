import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function GestionEstudiantes() {
    const [estudiantes, setEstudiantes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/students")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Error en la respuesta del servidor");
                }
                return res.json();
            })
            .then(data => {
                // Asegúrate que el backend te devuelva los campos correctos
                console.log("Estudiantes recibidos:", data);
                setEstudiantes(data);
            })
            .catch(err => {
                console.error("Error al cargar estudiantes:", err);
            });
    }, []);

    function eliminarEstudiante(id) {
        // Aquí puedes implementar una petición DELETE real al backend
        fetch(`http://localhost:8080/students/${id}`, {
            method: 'DELETE',
        })
        .then(res => {
            if (!res.ok) throw new Error("Error al eliminar el estudiante");
            // Filtrar el estudiante eliminado en el frontend
            setEstudiantes(estudiantes.filter(student => student.id !== id));
        })
        .catch(err => console.error("Error eliminando estudiante:", err));
    }

    return (
        <div>
            <h2>Gestión de Estudiantes</h2>
            {estudiantes.map((student) => (
                <div className="servicios-card" key={student.id}>
                    <h3>ID: {student.id}</h3>
                    <p>Grado: {student.gradeLevel}</p>
                    <p>Nacimiento: {student.birthDate}</p>
                    <p>Dirección: {student.address}</p>
                    <button
                        onClick={() => eliminarEstudiante(student.id)}
                        className="card__button">
                        Eliminar
                    </button>
                    <Link to={`/home/editar/${student.id}`} className="card__button">
                        Editar
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default GestionEstudiantes;