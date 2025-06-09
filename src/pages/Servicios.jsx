import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuLateral from "../components/MenuLateral";
import FormularioEstudiante from "../components/FormularioEstudiante";
import ListaEstudiantes from "../components/ListaEstudiantes";
import "./Servicios.css";

const API_STUDENTS_URL = "https://back-json-server-martes.onrender.com/envios";
const usuario = JSON.parse(localStorage.getItem("usuario"));

const Servicios = () => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [formEstudiante, setFormEstudiante] = useState(estudianteBase());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usuarioYaRegistrado, setUsuarioYaRegistrado] = useState(false);
  const [editando, setEditando] = useState(null);
  const [mostrarFormulario, setMostrarFormulario] = useState(false); // Nuevo estado

  function estudianteBase() {
    return {
      id_student: "",
      grade_level: "",
      birth_date: "",
      address: "",
      fk_user: usuario?.id || "",
    };
  }

  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_STUDENTS_URL);
      if (!res.ok) throw new Error("Error HTTP: " + res.status);
      const data = await res.json();
      setStudents(data);
      const yaExiste = data.some((est) => est.fk_user === usuario?.id);
      setUsuarioYaRegistrado(yaExiste);
    } catch (err) {
      setError("No se pudieron cargar los estudiantes.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleChange = (e) =>
    setFormEstudiante({ ...formEstudiante, [e.target.name]: e.target.value });

  const crearEstudiante = async () => {
    try {
      const res = await fetch(API_STUDENTS_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formEstudiante),
      });
      if (!res.ok) throw new Error("Error al crear estudiante");
      const nuevo = await res.json();
      setStudents([...students, nuevo]);
      setUsuarioYaRegistrado(true);
      setFormEstudiante(estudianteBase());
      setMostrarFormulario(false); // Cierra el formulario después de guardar
    } catch {
      alert("Error al guardar el estudiante");
    }
  };

  const eliminarEstudiante = async (id) => {
    try {
      const res = await fetch(`${API_STUDENTS_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      setStudents(students.filter((s) => s.id !== id));
    } catch {
      alert("No se pudo eliminar");
    }
  };

  const actualizarEstudiante = async () => {
    try {
      const res = await fetch(`${API_STUDENTS_URL}/${editando}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formEstudiante),
      });
      if (!res.ok) throw new Error();
      const actualizado = await res.json();
      setStudents(students.map((s) => (s.id === actualizado.id ? actualizado : s)));
      setEditando(null);
      setFormEstudiante(estudianteBase());
      setMostrarFormulario(false);
    } catch {
      alert("No se pudo actualizar");
    }
  };

  const iniciarEdicion = (estudiante) => {
    setEditando(estudiante.id);
    setFormEstudiante(estudiante);
    setMostrarFormulario(true); // Muestra el formulario al editar
  };

  return (
    <div className="servicio">
      <MenuLateral />
      <div className="servicios-div">
        <div className="servicio-titulo" style={{ marginTop: "20px" }}>
          <h1 className="servicio-titulo-texto">Gestión de Estudiantes</h1>
        </div>

        {usuario?.user_type === "administrador" && (
          <div className="crear-usuario-btn">
            <button onClick={() => navigate("/crear-usuario")}>Crear Usuario</button>
          </div>
        )}

        {/* Botón para mostrar/ocultar el formulario */}
        <div className="crear-estudiante-toggle">
          <button onClick={() => {
            setMostrarFormulario(!mostrarFormulario);
            setEditando(null); // Reinicia edición si se está creando uno nuevo
            setFormEstudiante(estudianteBase());
          }}>
            {mostrarFormulario ? "Cerrar Formulario" : "Crear/Editar Estudiante"}
          </button>
        </div>

        {/* Mostrar el formulario si el usuario lo activa o si está editando */}
        {mostrarFormulario && (
          <FormularioEstudiante
            formEstudiante={formEstudiante}
            editando={editando}
            handleChange={handleChange}
            onGuardar={crearEstudiante}
            onActualizar={actualizarEstudiante}
          />
        )}

        <div className="servicios-cuerpo">
          <ListaEstudiantes
            students={students}
            usuario={usuario}
            onEditar={iniciarEdicion}
            onEliminar={eliminarEstudiante}
          />
        </div>
      </div>
    </div>
  );
};

export default Servicios;





