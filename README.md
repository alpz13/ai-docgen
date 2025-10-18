# 🧠 AI Code Documentation Generator

Este proyecto usa **Node.js + TypeScript** y **OpenAI** para analizar el historial de Git y generar documentación técnica automática del código.

## 🚀 Características iniciales (MVP)
- Extrae commits de un repositorio Git.
- Analiza los mensajes de commit.
- Genera embeddings y los usa como contexto para generar documentación.
- Crea un documento `architecture.md` con la descripción técnica.

---

## 🧩 Requisitos
- Node.js 18+
- Cuenta de OpenAI (API key)

---

## ⚙️ Instalación
```bash
git clone https://github.com/<tu-usuario>/ai-docgen.git
cd ai-docgen
npm install
cp .env.example .env
```

---

## Estructura principal del proyecto
```bash
ai-docgen/
├── src/
│   ├── ingestors/
│   │   └── gitIngestor.ts
│   ├── ai/
│   │   ├── embeddings.ts
│   │   └── docGenerator.ts
│   ├── utils/
│   │   └── fileUtils.ts
│   ├── index.ts
│   └── config.ts
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Configuraciónenv
Crea un archivo `.env` basado en `.env.example` y añade tu clave de API de Open

```bash
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 🚴‍♂️ Ejecucion
```bash
npm run start
```