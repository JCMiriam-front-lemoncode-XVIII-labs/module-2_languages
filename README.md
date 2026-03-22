# 💻 Lenguages - LAB

Este repositorio contiene la resolución de los ejercicios propuestos en el `Módulo 2 - Lenguajes` desarrollados con **TypeScript**. Incluye:

- Tipado genérico
- Inmutabilidad
- Destructuring
- Rest / Spread operators
- Métodos de `Array.prototype`
- Clases y encapsulación
- Organización modular del código

El proyecto está planteado como una colección de ejercicios independientes, ejecutables desde terminal mediante scripts específicos.

▶️ Para comenzar, ejecutar `npm run install` desde la raíz del proyecto.

---

## ✨ Ejercios:

### 1️⃣ Array Operations

Funciones utilitarias inmutables para trabajar con arrays:

- `head`
- `tail`
- `last`
- `init`

📁 `src\exercises\exercise-01\index.ts`

🚀 Ejecutar usando `npm run exercise:01`

### 2️⃣ Concat

Funciones para concatenar arrays de forma inmutable:

- `concat`

📁 `src\exercises\exercise-02\index.ts`

🚀 Ejecutar usando `npm run exercise:02`

### 3️⃣ Clone & Merge

Funciones para clonar y combinar objetos de forma inmutable:

- `clone`
- `merge`

📁 `src\exercises\exercise-03\index.ts`

🚀 Ejecutar usando `npm run exercise:03`

### 4️⃣ Read Books

Búsqueda de libros por título a partir de un array de objetos tipados:

- `isBookRead`

📁 `src\exercises\exercise-04\index.ts`

🚀 Ejecutar usando `npm run exercise:04`

### 5️⃣ Slot Machine

Implementación de una máquina tragaperras utilizando clases, lógica aleatoria y constantes reutilizables.

📁 `src\exercises\exercise-05\index.ts`

🚀 Ejecutar usando `npm run exercise:05`

---

## 📁 Estructura del proyecto

```txt
src/
├── constants/ // Incluye los objetos y arrays utilizados en los ejercicios
│
└── exercises/
    ├── exercise-01/
    │   └── index.ts
    ├── exercise-02/
    │   └── index.ts
    ├── exercise-03/
    │   └── index.ts
    ├── exercise-04/
    │   └── index.ts
    └── exercise-05/
        └── index.ts
```
