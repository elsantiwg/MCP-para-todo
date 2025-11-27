[![MseeP Badge](https://mseep.net/pr/elsantiwg-mcp-para-todo-badge.jpg)](https://mseep.ai/app/elsantiwg-mcp-para-todo)

# 🌐 MCP para Todo - Servidor de Herramientas para Modelos de Lenguaje

**Servidor educativo MCP (Model Context Protocol) que conecta modelos de lenguaje como ChatGPT con herramientas externas en tiempo real. Desarrollado en TypeScript con arquitectura modular extensible.**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![MCP](https://img.shields.io/badge/MCP-Protocol-orange.svg)](https://modelcontextprotocol.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 📖 ¿Qué es MCP?

**Model Context Protocol (MCP)** es un estándar emergente que permite a los modelos de lenguaje interactuar de manera segura y estructurada con herramientas externas, APIs y sistemas.

### 💡 Valor del Proyecto
- **Conexión IA-Mundo Real:** Bridge entre LLMs y funcionalidades externas
- **Arquitectura Modular:** Fácil extensión con nuevas herramientas
- **Protocolo Estándar:** Compatible con cualquier cliente MCP

## 🛠️ Herramientas Implementadas

| Herramienta | Descripción | Entrada | Ejemplo |
|-------------|-------------|---------|---------|
| `get_weather` | Clima actual por ciudad | `{ "city": "Bogotá" }` | Temperatura, humedad, condiciones |
| `word_definition` | Definiciones y sinónimos | `{ "word": "innovación" }` | Significado, ejemplos, sinónimos |
| `evaluate_math` | Evaluación de expresiones | `{ "expression": "2^8 + sqrt(81)" }` | Resultado numérico |


### **Stack Tecnológico**
- **Lenguaje:** TypeScript 5.0+
- **Runtime:** Node.js 18+
- **Protocolo:** MCP (Model Context Protocol)
- **APIs Externas:** OpenWeather, DictionaryAPI

## ⚡ Instalación y Uso

### **Prerrequisitos**
```bash
node --version  # ≥ 18.0.0
npm --version   # ≥ 9.0.0
```
# 1. Clonar repositorio
```
git clone https://github.com/elsantiwg/MCP-para-todo.git
cd MCP-para-todo
```
# 2. Instalar dependencias
```
npm install
```

# 3. Configurar variables de entorno
```
cp .env.example .env
```
# Editar .env con tus API keys

# 4. Ejecutar en desarrollo
```
npm run dev
```
# Configuración .env
```
OPENWEATHER_API_KEY=tu_api_key_aca
DICTIONARY_API_URL=https://api.dictionaryapi.dev/api/v2
```
### 🔌 Integración con Clientes MCP
## Ejemplo de Conexión
```
// Cliente MCP se conecta al servidor
const client = new MCPClient('ws://localhost:3000');
```

// Uso de herramientas desde el modelo
```
const weather = await client.callTool('get_weather', { city: 'Madrid' });
const calculation = await client.callTool('evaluate_math', { expression: 'sin(π/2)' });
```
### 🧩 Extensión del Sistema
## Crear Nueva Herramienta
```
// src/tools/nueva-herramienta.ts
export const nuevaHerramienta: ToolHandler = {
  name: "mi_herramienta",
  description: "Descripción de la funcionalidad",
  inputSchema: {
    type: "object",
    properties: {
      parametro: { type: "string" }
    }
  },
  handler: async ({ parametro }) => {
    // Lógica de la herramienta
    return { resultado: "éxito" };
  }
};
```
## Registro en el Servidor
```
// En src/tools/index.ts
export const tools = [
  weatherTool,
  dictionaryTool, 
  mathTool,
  nuevaHerramienta  // ← Nueva herramienta agregada
];
```
### 🚀 Casos de Uso
# Asistentes Inteligentes
# Agentes conversacionales con capacidades reales

# Bots de customer service con acceso a datos en tiempo real

# Asistentes personales con contexto del mundo real

Automatización
Procesamiento de datos con capacidades de cálculo

Integración con sistemas empresariales

Workflows automatizados con razonamiento de IA

### 📊 Roadmap
Más herramientas: Traducción, noticias, conversión de monedas

Autenticación: Sistema de seguridad para herramientas sensibles

Monitoring: Dashboard de uso y métricas

Deployment: Contenedores Docker y configuración cloud

👨‍💻 Autor
Kevin Santiago Prieto Guerrero

GitHub: @elsantiwg

LinkedIn: Kevin Prieto

Portafolio: https://elsantiwg.trendio.com.co

📄 Licencia
Este proyecto está bajo la Licencia MIT. Ver LICENSE para detalles.
