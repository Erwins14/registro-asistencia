# Proyecto Sitio Web de Gestión de Empleados y Registro de Asistencia
Este proyecto es un sitio web desarrollado en Angular que se encarga de gestionar la información de empleados y registros de asistencia. Utiliza Firebase como base de datos en tiempo real para almacenar y recuperar datos.

## Características Principales 🔨
* **Gestión de Empleados:** El sitio web permite visualizar, agregar y editar información detallada de empleados, así como registrar nuevos empleados asociados a un ID de Tarjeta e inactivar empleados.
* **Registro de Asistencia:** Permite visualizar el registro de asistencia de los empleados, manteniendo un historial de fechas y horas de registro, así como el estado de entradas y salidas de cada empleado.
* **Integración con Firebase:** Utiliza Firebase Realtime Database para almacenar y sincronizar los datos de empleados y asistencia en tiempo real.
* **Autenticación:** Cuenta con un sistema de autenticación para administradores, permitiendo un acceso seguro a las funciones de gestión.

## Uso 🚀

### Gestión de Empleados
* **Visualización:** En la sección de empleados, se listan todos los empleados registrados, mostrando sus detalles.
* **Edición y Eliminación:** Los administradores pueden editar la información de un empleado existente o inactivar su registro.
* **Adición:** Permite registrar nuevos empleados, asociados a un ID de tarjeta que exista en la Base de Datos, incluyendo su nombre y apellido.

### Registro de Asistencia
* **Visualización de Asistencia** En la sección de asistencia, se listan todos los registros de asistencia de los empleados, mostrando sus detalles. También es posible filtrar la información de los registros por ID, nombre, apellido, hora o fecha.
