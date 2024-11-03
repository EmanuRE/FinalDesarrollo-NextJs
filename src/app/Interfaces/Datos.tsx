export interface Datos {
  id?: number;                // ID opcional para el registro
  nombres: string;            // Nombres del cliente
  apellidos: string;          // Apellidos del cliente
  genero: string;             // Género del cliente
  fechaNacimiento: string;    // Fecha de nacimiento del cliente
  estado: string;             // Estado del cliente (activo, inactivo, etc.)
  contabilidad: string;       // Información contable del cliente
  direccion: string;          // Dirección del cliente
  estadoInformacion: string;  // Estado de la información (completa, incompleta, etc.)
  fechaActualizacion: string; // Fecha de la última actualización
  fechaCreacion: string;      // Fecha de creación del registro
  infoFinanciera: string;     // Información financiera del cliente
  usuarioCreador: string;     // Usuario que creó el registro
}


