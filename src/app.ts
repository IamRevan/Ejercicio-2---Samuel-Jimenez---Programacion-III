// ============================================================
// EJERCICIO 2: ENUMERACIONES EN TYPESCRIPT
// Materia: Programación con Node.js
// Estudiante: Samuel Jimenez | C.I. 31192094 | UNETI
// ============================================================

import { exec } from 'child_process';
import * as path from 'path';

// ── ENUM 1: Géneros de Películas ──────────────────────────────
// Constantes protegidas: evita errores de tipeo en el código
enum GeneroPelicula {
    ACCION          = "Acción",
    CIENCIA_FICCION = "Ciencia Ficción",
    DRAMA           = "Drama",
    COMEDIA         = "Comedia",
    TERROR          = "Terror"
}

// ── ENUM 2: País de Origen ────────────────────────────────────
enum PaisOrigen {
    ESTADOS_UNIDOS  = "Estados Unidos",
    ESPANA          = "España",
    REINO_UNIDO     = "Reino Unido",
    MEXICO          = "México",
    JAPON           = "Japón"
}

// ── INTERFACE: Contrato estricto del objeto Pelicula ──────────
interface Pelicula {
    titulo: string;
    genero: GeneroPelicula;
    pais:   PaisOrigen;
    año:    number;
}

// ── ARRAY de películas utilizando los enums ───────────────────
const peliculas: Pelicula[] = [
    {
        titulo: "Interstellar",
        genero: GeneroPelicula.CIENCIA_FICCION,
        pais:   PaisOrigen.ESTADOS_UNIDOS,
        año:    2014
    },
    {
        titulo: "El Laberinto del Fauno",
        genero: GeneroPelicula.DRAMA,
        pais:   PaisOrigen.ESPANA,
        año:    2006
    },
    {
        titulo: "Spirited Away",
        genero: GeneroPelicula.DRAMA,
        pais:   PaisOrigen.JAPON,
        año:    2001
    }
];

// ── SALIDA EN TERMINAL ────────────────────────────────────────
console.log("\n=== GÉNEROS DE PELÍCULAS DISPONIBLES ===");
Object.values(GeneroPelicula).forEach((g, i) => {
    console.log(`  ${i + 1}. ${g}`);
});

console.log("\n=== PAÍSES DE ORIGEN DISPONIBLES ===");
Object.values(PaisOrigen).forEach((p, i) => {
    console.log(`  ${i + 1}. ${p}`);
});

console.log("\n=== CATÁLOGO DE PELÍCULAS ===");
peliculas.forEach((p, i) => {
    console.log(`\n  Película ${i + 1}:`);
    console.log(`    🎬 Título: ${p.titulo}`);
    console.log(`    🎭 Género: ${p.genero}`);
    console.log(`    🌍 País:   ${p.pais}`);
    console.log(`    📅 Año:    ${p.año}`);
});
console.log("\n=============================\n");

// ── ABRIR INTERFAZ VISUAL AUTOMÁTICAMENTE ────────────────────
const htmlPath = path.resolve(__dirname, '..', 'index.html');
exec(`start "" "${htmlPath}"`, (error) => {
    if (error) {
        console.log(`💡 Abre manualmente la interfaz en: ${htmlPath}`);
    } else {
        console.log("🌐 Interfaz visual abierta en el navegador.\n");
    }
});
