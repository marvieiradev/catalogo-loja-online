# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Sequencia de Instalação

Instalação Inicial (Vite + React + Javascript)

```
npm create vite@latest
```

Instalação do react-router-dom

```
npm i react-router-dom
```

Instalação do TailwindCSS

```
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

Instalação do react-dialog e sheets para criação de um menu lateral

```
npm install @radix-ui/react-dialog
```

Instalação do lucide-react para os ícones

```
npm install lucide-react
```

Função utilitária para mesclar eficientemente classes CSS do Tailwind em JS sem conflitos de estilo

```
npm i tailwind-merge
npm i class-variance-authority
npm i clsx
```
