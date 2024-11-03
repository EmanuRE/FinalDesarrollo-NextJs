"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Datos } from '../../../Interfaces/interfaces'; // Asegúrate de ajustar la ruta si es diferente

const AgregarUsuario = () => {
  const [dato, setDato] = useState<Datos>({
    nombres: '',
    apellidos: '',
    genero: '',
    fechaNacimiento: '',
    direccion: '',
    contabilidad: '',
    infoFinanciera: '',
    usuarioCreador: '',
    estadoInformacion: true,  // Estado inicial
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDato({
      ...dato,
      [name]: name === 'estadoInformacion' ? (e.target as HTMLInputElement).checked : value
    });
  };

  const agregarUsuario = () => {
    axios.post('/api/clientes', dato)
      .then(response => {
        console.log("Usuario agregado:", response.data);
      })
      .catch(error => {
        console.error("Error al agregar el usuario:", error);
      });
  };

  return (
    <div>
      <h1>Agregar Usuario</h1>
      <form onSubmit={(e) => { e.preventDefault(); agregarUsuario(); }}>
        <div>
          <label>Nombres:</label>
          <input type="text" name="nombres" value={dato.nombres} onChange={handleChange} />
        </div>
        <div>
          <label>Apellidos:</label>
          <input type="text" name="apellidos" value={dato.apellidos} onChange={handleChange} />
        </div>
        <div>
          <label>Género:</label>
          <input type="text" name="genero" value={dato.genero} onChange={handleChange} />
        </div>
        <div>
          <label>Fecha de Nacimiento:</label>
          <input type="date" name="fechaNacimiento" value={dato.fechaNacimiento} onChange={handleChange} />
        </div>
        <div>
          <label>Dirección:</label>
          <textarea name="direccion" value={dato.direccion} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Contabilidad:</label>
          <input type="text" name="contabilidad" value={dato.contabilidad} onChange={handleChange} />
        </div>
        <div>
          <label>Información Financiera:</label>
          <textarea name="infoFinanciera" value={dato.infoFinanciera} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Usuario Creador:</label>
          <input type="text" name="usuarioCreador" value={dato.usuarioCreador} onChange={handleChange} />
        </div>
        <div>
          <label>Estado de Información:</label>
          <input type="checkbox" name="estadoInformacion" checked={dato.estadoInformacion} onChange={handleChange} />
        </div>
        <button type="submit">Agregar Usuario</button>
      </form>
    </div>
  );
}

export default AgregarUsuario;
