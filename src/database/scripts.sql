CREATE TABLE IF NOT EXISTS users (
    dni INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    primer_apellido VARCHAR(20) NOT NULL,
    segundo_apellido VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    contraseña VARCHAR(20) NOT NULL,
    fecha_nacimineto DATE NOT NULL,
    genero VARCHAR(10),
    telefono VARCHAR(12) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    rol_id INT NOT NULL,
    curso_id INT NULL,
    sede_id INT NOT NULL,
    tipo_doc_id INT NOT NULL,
    ciudad_departamento_id INT NOT NULL
)ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS roles (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    rol VARCHAR(20)
)ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS curso(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    curso VARCHAR(2) NOT NULL,
    jornada_id INT NOT NULL,
    user_id INT NOT NULL
)ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS jornada(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    jornada VARCHAR(20) NOT NULL 
)ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS materias(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre_materia VARCHAR(50) NOT NULL,
    user_id INT NOT NULL
)ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS periodo(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    periodo_academico VARCHAR(20) NOT NULL
)ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS tipo_documento(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(2) NOT NULL
)ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS municipio(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre_municipio VARCHAR(50),
    pais_id INT NOT NULL
)ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS departamento(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre_departamento VARCHAR(50)
)ENGINE = INNODB;


CREATE TABLE IF NOT EXISTS ciudad_departamento(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    municipio_id INT NOT NULL,
    departamento_id INT NOT NULL
)ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS pais(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    pais  VARCHAR(50)
)ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS asistencia(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    rubrica VARCHAR(50),
    fecha DATE,
    user_id INT NOT NULL,
    materia_id INT NOT NULL
)ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS observacion_periodo(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    observacion TEXT,
    user_id INT NOT NULL,
    periodo_id INT NOT NULL
)ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS sede(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    dane VARCHAR(50),
    nombres_sede VARCHAR(50),
    direccion VARCHAR(50),
    ciudad_departamento_id INT NOT NULL
)ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS institucion(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    dane VARCHAR(50),
    nit varchar(50),
    nombres_institucion VARCHAR(50),
    direccion VARCHAR(50),
    ciudad_departamento_id INT NOT NULL
)ENGINE = INNODB;

CREATE TABLE IF NOT EXISTS notas(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nota_1 INT NOT NULL,
    nota_2 INT NOT NULL,
    nota_3 INT NOT NULL, 
    user_id INT NOT NULL,
    materia_id INT NOT NULL,
    periodo_id INT NOT NULL
)ENGINE = INNODB;


CREATE TABLE IF NOT EXISTS acudientes (
    id INT NOT NULL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    primer_apellido VARCHAR(20) NOT NULL,
    segundo_apellido VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    contraseña VARCHAR(20) NOT NULL,
    fecha_nacimineto DATE NOT NULL,
    genero VARCHAR(10),
    telefono VARCHAR(12) NOT NULL,
    user_id INT
)ENGINE = INNODB;

---------------------RELACIONES ENTRE TABLAS--------------------

ALTER TABLE curso
ADD CONSTRAINT fk_user_id
FOREIGN KEY (user_id)
REFERENCES users(dni);


ALTER TABLE municipio
ADD CONSTRAINT fk_pais_id
FOREIGN KEY (pais_id)
REFERENCES pais(id);