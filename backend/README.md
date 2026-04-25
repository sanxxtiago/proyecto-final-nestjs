# PetHealth Backend

API REST desarrollada con NestJS para la gestión de la clínica veterinaria PetHealth.

## Requisitos

- Node.js >= 18
- npm >= 9
- PostgreSQL >= 14

## Instalación

```bash
npm install
```

## Configuración

1. Crear la base de datos en PostgreSQL ejecutando el script:

```bash
psql -U postgres -f Base_De_Datos.sql
```

2. Copiar `.env.template` a `.env` y completar las variables:

```bash
cp .env.template .env
```

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_contraseña
DB_NAME=pethealth
PORT=3000
```

## Ejecución

```bash
# desarrollo
npm run start:dev

# producción
npm run build
npm run start:prod
```

## Endpoints disponibles

| Método | Ruta              | Descripción                  |
|--------|-------------------|------------------------------|
| POST   | /usuarios         | Crear usuario                |
| GET    | /usuarios         | Listar usuarios              |
| GET    | /usuarios/:id     | Obtener usuario por ID       |
| PATCH  | /usuarios/:id     | Actualizar usuario           |
| DELETE | /usuarios/:id     | Eliminar usuario             |
| POST   | /veterinarios     | Crear veterinario            |
| GET    | /veterinarios     | Listar veterinarios          |
| GET    | /veterinarios/:id | Obtener veterinario por ID   |
| PATCH  | /veterinarios/:id | Actualizar veterinario       |
| DELETE | /veterinarios/:id | Eliminar veterinario         |
| POST   | /duenos           | Crear dueño                  |
| GET    | /duenos           | Listar dueños                |
| GET    | /duenos/:id       | Obtener dueño por ID         |
| PATCH  | /duenos/:id       | Actualizar dueño             |
| DELETE | /duenos/:id       | Eliminar dueño               |
| POST   | /mascotas         | Crear mascota                |
| GET    | /mascotas         | Listar mascotas              |
| GET    | /mascotas/:id     | Obtener mascota por ID       |
| PATCH  | /mascotas/:id     | Actualizar mascota           |
| DELETE | /mascotas/:id     | Eliminar mascota             |
| POST   | /citas            | Crear cita                   |
| GET    | /citas            | Listar citas                 |
| GET    | /citas/:id        | Obtener cita por ID          |
| PATCH  | /citas/:id        | Actualizar cita              |
| DELETE | /citas/:id        | Eliminar cita                |

## Notas

- Las contraseñas se almacenan cifradas con bcrypt.
- La validación de datos se aplica globalmente mediante `ValidationPipe`.