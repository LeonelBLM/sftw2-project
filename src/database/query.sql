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

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    edad INT,
    correo_electronico VARCHAR(30) NOT NULL

);
SELECT * FROM clientes;

CREATE TABLE camiones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(30) NOT NULL,
    modelo VARCHAR(30) NOT NULL,
    placa VARCHAR(30) NOT NULL,
    año INT
);
SELECT * FROM camiones;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    correo_electronico VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255) NOT NULL
);
SELECT * FROM usuarios;