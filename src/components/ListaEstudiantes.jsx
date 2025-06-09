// src/components/ListaEstudiantes.jsx
import React from "react";
import AccionesEstudiante from "./AccionesEstudiante";

const ListaEstudiantes = ({ students, usuario, onEditar, onEliminar }) => {
  if (!students.length) return <p>No hay estudiantes registrados.</p>;

  return students.map((student) => {
    const puedeEditar =
      usuario?.user_type === "administrador" || student.fk_user === usuario?.id;
    return (
      <div className="servicios-card" key={student.id}>
        <h3>ID: {student.id_student}</h3>
        <p>Grado: {student.grade_level}</p>
        <p>Nacimiento: {student.birth_date}</p>
        <p>Dirección: {student.address}</p>
        <p>ID Usuario: {student.fk_user}</p>
        <AccionesEstudiante
          puedeEditar={puedeEditar}
          onEditar={() => onEditar(student)}
          onEliminar={() => onEliminar(student.id)}
        />
      </div>
    );
  });
};

export default ListaEstudiantes;
