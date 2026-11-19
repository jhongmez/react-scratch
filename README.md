# Vite Básico - React

Proyecto desarrollado como parte del curso **React.js: Fundamentos del Lenguaje y Hooks Básicos** de [Platzi](https://platzi.com), en el cual me certifiqué. Es una aplicación de práctica que simula un listado de propiedades inmobiliarias, construida para aprender y aplicar los conceptos básicos de React.

Originalmente escrito en JavaScript, el proyecto fue migrado a **TypeScript** como ejercicio adicional de aprendizaje.

## Conceptos aplicados

- Componentes funcionales y composición de componentes
- Hooks: `useState` y `useEffect`
- Manejo de estados de carga y error (loading / error states)
- Filtrado de datos mediante funciones utilitarias
- Tipado estático con TypeScript (`types`, interfaces de props)
- Organización de carpetas por dominio (`components`, `data`, `types`, `utils`)

## Estructura del proyecto

```
src/
├── assets/                  # Imágenes y recursos estáticos
├── components/
│   ├── layout/               # Header y componentes de estructura
│   ├── properties/           # PropertyCard, PropertyList
│   └── ui/                   # Hero, SearchBar
├── data/                     # Datos de ejemplo (properties.ts)
├── types/                    # Definiciones de tipos (propertyType.ts)
├── utils/                    # Funciones utilitarias (filterProperties.ts)
├── App.tsx
└── main.tsx
```

## Tecnologías

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Bun](https://bun.sh/) como gestor de paquetes y runtime
- ESLint

## Requisitos previos

Tener instalado [Bun](https://bun.sh/) en tu sistema:

```bash
curl -fsSL https://bun.sh/install | bash
```

## Instalación

Clona el repositorio e instala las dependencias con Bun:

```bash
bun install
```

## Comandos disponibles

| Comando        | Descripción                                      |
| -------------- | ------------------------------------------------- |
| `bun dev`     | Inicia el servidor de desarrollo con hot reload   |
| `bun run build` | Genera el build de producción                   |
| `bun run preview` | Previsualiza el build de producción            |
| `bun run lint`  | Ejecuta ESLint sobre el proyecto                  |

## Ejecutar el proyecto

```bash
bun dev
```

Esto levantará el servidor de desarrollo en `http://localhost:5173` (puerto por defecto de Vite).

## Créditos

Proyecto realizado siguiendo el curso de [Platzi](https://platzi.com) sobre fundamentos de React.js.
