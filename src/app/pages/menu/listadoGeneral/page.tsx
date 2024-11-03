"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Datos }  from '../../../Interfaces/interfaces'

const Consulta = () => {
    const [DataObtenida, setDato] = useState<Datos[]>([]);

    const Consultar = () => {
        axios.get<Datos[]>('/api/clientes?id')
          .then(response => {
            setDato(response.data);
            console.log([response.data]) 
          })
          .catch(error => {
            console.error("Error al obtener el dato:", error);
          });
      };
        

    return (
        /* */
        <>
        <div>
        <h1>Consulta de Clientes</h1>
        <div>
          <button onClick={Consultar}>Consultar</button>
        </div>
  
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Genero</th>
              <th>Nacimiento</th>
              <th>Estado</th>
              <th>Conta</th>
              <th>Direccion</th>
              <th>EstadoFinanciero</th>
              <th>Actualizacion</th>
              <th>Creacion</th>
              <th>Financiero</th>
              <th>Creador</th>
            </tr>
          </thead>
          <tbody>
            {DataObtenida.map(dato => (
              <tr key={dato.id}> 
                <td>{dato.id}</td>
                <td>{dato.nombres}</td>
                <td>{dato.apellidos}</td>
                <td>{dato.genero}</td>
                <td>{dato.fechaNacimiento}</td>
                <td>{dato.estado}</td>
                <td>{dato.contabilidad}</td>
                <td>{dato.direccion}</td>
                <td>{dato.estadoInformacion}</td>
                <td>{dato.fechActualizacion}</td>
                <td>{dato.fechaCreacion}</td>
                <td>{dato.infoFinanciera}</td>
                <td>{dato.usuarioCreador}</td>
              
              </tr>
            ))}
          </tbody>
        </table> 
        </div> 
        </>

    )
}

export default Consulta