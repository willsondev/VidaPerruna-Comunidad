# VidaPerruana-Comunidad


Este proyecto es una aplicación React desarrollada con Vite, diseñada para la comunidad de Vida Perruana. Proporciona una configuración mínima para comenzar a trabajar con React en Vite, incluyendo HMR (Hot Module Replacement) y reglas de ESLint.

Demo: exploradorcanino.netlify.app

## Tecnologías Utilizadas

* **React:** Biblioteca de JavaScript para construir interfaces de usuario.
* **Vite:** Herramienta de construcción que ofrece una experiencia de desarrollo rápida y eficiente.
* **ESLint:** Herramienta para identificar y reportar patrones encontrados en ECMAScript/JavaScript, con el objetivo de hacer el código más consistente y evitar errores.

## Plugins de Vite

Actualmente, Vite ofrece dos plugins oficiales para React:

* **@vitejs/plugin-react:** Utiliza Babel para Fast Refresh, permitiendo actualizaciones rápidas de los componentes durante el desarrollo.
* **@vitejs/plugin-react-swc:** Utiliza SWC (Speedy Web Compiler) para Fast Refresh, ofreciendo un rendimiento aún más rápido.

## Expansión de la Configuración de ESLint

Para aplicaciones de producción, se recomienda utilizar TypeScript y habilitar reglas de lint que tengan en cuenta los tipos. Puedes explorar la plantilla de TypeScript en el repositorio de Vite para integrar TypeScript y `typescript-eslint` en tu proyecto:

* [Plantilla de TypeScript para React en Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)

## Instalación

1.  Clona el repositorio:

    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd VidaPerruana-Comunidad
    ```

2.  Instala las dependencias:

    ```bash
    npm install
    # o
    yarn install
    # o
    pnpm install
    ```

## Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev