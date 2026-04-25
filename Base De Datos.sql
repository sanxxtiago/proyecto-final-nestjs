-- Base de datos: pethealth

CREATE TABLE usuario (
    id          SERIAL PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    correo      VARCHAR(100) NOT NULL UNIQUE,
    contrasena  VARCHAR(255) NOT NULL,
    rol         VARCHAR(20)  NOT NULL CHECK (rol IN ('veterinario', 'dueno'))
);

-- Especialización 1:1 de usuario
CREATE TABLE veterinario (
    id                SERIAL PRIMARY KEY,
    especialidad_medica VARCHAR(100) NOT NULL,
    usuario_id        INTEGER NOT NULL UNIQUE REFERENCES usuario(id) ON DELETE CASCADE
);

-- Especialización 1:1 de usuario
CREATE TABLE dueno (
    id                   SERIAL PRIMARY KEY,
    direccion_residencia VARCHAR(150) NOT NULL,
    usuario_id           INTEGER NOT NULL UNIQUE REFERENCES usuario(id) ON DELETE CASCADE
);

CREATE TABLE mascota (
    id       SERIAL PRIMARY KEY,
    nombre   VARCHAR(80)  NOT NULL,
    especie  VARCHAR(50)  NOT NULL,
    raza     VARCHAR(80)  NOT NULL,
    dueno_id INTEGER NOT NULL REFERENCES dueno(id) ON DELETE CASCADE
);

CREATE TABLE cita (
    id               SERIAL PRIMARY KEY,
    fecha_cita       DATE         NOT NULL,
    motivo_consulta  VARCHAR(255) NOT NULL,
    mascota_id       INTEGER NOT NULL REFERENCES mascota(id) ON DELETE CASCADE,
    veterinario_id   INTEGER NOT NULL REFERENCES veterinario(id) ON DELETE CASCADE
);
