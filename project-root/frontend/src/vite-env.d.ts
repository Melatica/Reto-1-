/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  // agrega aquí otras variables que uses en .env
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
