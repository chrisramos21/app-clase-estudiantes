import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Servicios.css';
function GestionEstudiantes() {
    const [estudiantes, setEstudiantes] = useState([]);
    const [gradeLevel, setGradeLevel] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [address, setAddress] = useState("");
    const redireccion = useNavigate();

    const usuario = JSON.parse(localStorage.getItem("usuario")); // se obtiene el usuario logueado
    const fk_user = usuario?.id;

    useEffect(() => {
        fetch("http://localhost:8080/students")
            .then(res => res.json())
            .then(data => setEstudiantes(data))
            .catch(err => console.error("Error al cargar estudiantes:", err));
    }, []);

    const crearEstudiante = () => {
        if (!gradeLevel || !birthDate || !address || !fk_user) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        const nuevoEstudiante = {
            gradeLevel: parseInt(gradeLevel),
            birthDate,
            address,
            fk_user
        };

        fetch("http://localhost:8080/students", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(nuevoEstudiante)
        })
            .then(res => {
                if (!res.ok) throw new Error("Error en el registro");
                return res.json();
            })
            .then(data => {
                setEstudiantes([...estudiantes, data]);
                setGradeLevel("");
                setBirthDate("");
                setAddress("");
                alert("Estudiante registrado con éxito");
            })
            .catch(err => console.error("Error al crear estudiante:", err));
    };

    const eliminarEstudiante = (id) => {
        fetch(`http://localhost:8080/students/${id}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (!res.ok) throw new Error("Error al eliminar el estudiante");
                setEstudiantes(estudiantes.filter(student => student.id !== id));
            })
            .catch(err => console.error("Error eliminando estudiante:", err));
    };

  return (
    <div className="servicio">
        <div className="servicios-div">
            <h2 className="gestor-titulo">Gestión de Estudiantes</h2>

            <div className="formulario-estudiante">
                <h4>Crear Estudiante</h4>
                <input
                    type="number"
                    placeholder="Grado"
                    value={gradeLevel}
                    onChange={e => setGradeLevel(e.target.value)}
                />
                <input
                    type="date"
                    placeholder="Fecha de nacimiento"
                    value={birthDate}
                    onChange={e => setBirthDate(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Dirección"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                <button onClick={crearEstudiante}>Guardar Estudiante</button>
            </div>

            <hr style={{ width: "100%", maxWidth: "600px" }} />

            <div className="servicios-cuerpo">
                {estudiantes.map((student) => (
                    <div className="servicios-card" key={student.id}>
                        <h3>ID: {student.id}</h3>
                        <p>Grado: {student.gradeLevel}</p>
                        <p>Nacimiento: {student.birthDate}</p>
                        <p>Dirección: {student.address}</p>
                        <div className="acciones">
                            <button
                                onClick={() => eliminarEstudiante(student.id)}
                                className="card__button">
                                Eliminar
                            </button>
                            <Link to={`/home/editar/${student.id}`} className="card__button">
                                Editar
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
}

export default GestionEstudiantes;