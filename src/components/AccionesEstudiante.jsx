// src/components/AccionesEstudiante.jsx
import React from "react";

const AccionesEstudiante = ({ puedeEditar, onEditar, onEliminar }) => {
  if (!puedeEditar) return null;

  return (
    <div className="acciones">
      <button onClick={onEditar}>Editar</button>
      <button onClick={onEliminar}>Eliminar</button>
    </div>
  );
};

export default AccionesEstudiante;
