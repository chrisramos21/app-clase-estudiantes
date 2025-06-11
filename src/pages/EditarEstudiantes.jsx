import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditarEstudiantes() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [estudiante, setEstudiante] = useState({
        gradeLevel: "",
        birthDate: "",
        address: ""
    });

    useEffect(() => {
        fetch(`http://localhost:8080/students/${id}`)
            .then(res => {
                if (!res.ok) throw new Error("Error al obtener estudiante");
                return res.json();
            })
            .then(data => setEstudiante(data))
            .catch(err => console.error("Error cargando estudiante:", err));
    }, [id]);

    const actualizarEstudiante = () => {
        fetch(`http://localhost:8080/students/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(estudiante)
        })
            .then(res => {
                if (!res.ok) throw new Error("Error al actualizar estudiante");
                alert("Estudiante actualizado");
                navigate("/home/gestion");
            })
            .catch(err => console.error("Error actualizando estudiante:", err));
    };

    return (
        <div>
            <h2>Editar Estudiante</h2>
            <input
                type="number"
                value={estudiante.gradeLevel}
                onChange={e => setEstudiante({ ...estudiante, gradeLevel: e.target.value })}
                placeholder="Grado"
            />
            <input
                type="date"
                value={estudiante.birthDate}
                onChange={e => setEstudiante({ ...estudiante, birthDate: e.target.value })}
                placeholder="Fecha de nacimiento"
            />
            <input
                type="text"
                value={estudiante.address}
                onChange={e => setEstudiante({ ...estudiante, address: e.target.value })}
                placeholder="Dirección"
            />
            <button onClick={actualizarEstudiante}>Guardar Cambios</button>
        </div>
    );
}

export default EditarEstudiantes;