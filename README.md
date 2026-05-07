# Ejercicio 2: Enumeraciones en TypeScript

Este proyecto es parte de la evaluación de la unidad curricular **Programación con Node.js**. El objetivo principal es demostrar el uso y la implementación de enumeraciones (`enum`) en TypeScript para gestionar constantes de manera tipada y segura.

## Información del Estudiante

- **Nombre:** Samuel Jimenez
- **Cédula de Identidad:** 31.192.094
- **Universidad:** UNETI (Universidad Nacional Experimental de las Telecomunicaciones e Informática)
- **Materia:** Programación III

## Descripción del Ejercicio

El programa implementa un catálogo de películas utilizando:
- **Enums:** Para definir géneros de películas y países de origen.
- **Interfaces:** Para definir la estructura estricta del objeto `Pelicula`.
- **Arrays:** Para almacenar y listar las películas registradas.

Al ejecutarse, el programa muestra la información en la terminal y abre automáticamente una interfaz visual (`index.html`) para una mejor presentación de los resultados.

## Cómo Ejecutar el Proyecto

### Requisitos Previos

Asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (Versión recomendada: v18 o superior)
- [NPM](https://www.npmjs.com/) (Viene incluido con Node.js)

### Instalación

1. Clona o descarga este repositorio.
2. Abre una terminal en la carpeta raíz del proyecto.
3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

### Ejecución

Para ejecutar el programa (el script usa `ts-node` internamente):
```bash
npm run dev
```
*Nota: Este comando es un atajo para `ts-node src/app.ts`. (comando utilizado para ejecutar el proyecto durante su realización) Se recomienda usar `npm run dev` para asegurar que se utilicen las dependencias instaladas en el proyecto.*

También puedes compilar el código a JavaScript:
```bash
npm run build
```

Y ejecutar la versión compilada:
```bash
npm start
```

---
*Evaluación 1 - Trayecto 3, Módulo 1*
