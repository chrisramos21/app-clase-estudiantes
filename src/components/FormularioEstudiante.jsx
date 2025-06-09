// src/components/FormularioEstudiante.jsx
import React from "react";

const FormularioEstudiante = ({ formEstudiante, editando, handleChange, onGuardar, onActualizar }) => {
  return (
    <div className="formulario-estudiante">
      <h4>{editando ? "Editar Estudiante" : "Crear tu registro como estudiante"}</h4>
      <input
        name="id_student"
        type="text"
        placeholder="ID estudiante"
        value={formEstudiante.id_student}
        onChange={handleChange}
      />
      <input
        name="grade_level"
        type="number"
        placeholder="Nivel de grado"
        value={formEstudiante.grade_level}
        onChange={handleChange}
      />
      <input
        name="birth_date"
        type="date"
        value={formEstudiante.birth_date}
        onChange={handleChange}
      />
      <input
        name="address"
        type="text"
        placeholder="Dirección"
        value={formEstudiante.address}
        onChange={handleChange}
      />
      {editando ? (
        <button onClick={onActualizar}>Actualizar</button>
      ) : (
        <button onClick={onGuardar}>Guardar</button>
      )}
    </div>
  );
};

export default FormularioEstudiante;
