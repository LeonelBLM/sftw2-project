CREATE DATABASE transporte;
USE transporte;
CREATE TABLE empleados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    edad INT,
    correo_electronico VARCHAR(30) NOT NULL

);
SELECT * FROM empleados;