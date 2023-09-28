CREATE DATABASE transport-mgmt;

use transport-mgmt;

CREATE TABLE camion (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(255) NOT NULL,
    descripcion VARCHAR(400) NOT NULL,
    modelo INT(4) NOT NULL,
    placa VARCHAR(7) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

describe camion;