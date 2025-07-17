[![MseeP.ai Security Assessment Badge](https://mseep.net/pr/elsantiwg-mcp-para-todo-badge.jpg)](https://mseep.ai/app/elsantiwg-mcp-para-todo)

# 🌐 MCP para todo – Servidor modular con herramientas útiles

Este proyecto es un ejemplo de como se haria un mcp 
Un servidor educativo y funcional basado en **Model Context Protocol (MCP)** que permite a un modelo de lenguaje (como ChatGPT) **ejecutar herramientas útiles en tiempo real**: obtener el clima, hacer cálculos, consultar definiciones, traducir texto y más.

---

## 🤖 ¿Qué es MCP?

**MCP (Model Context Protocol)** es una arquitectura que permite que un modelo de lenguaje interactúe con herramientas externas mediante mensajes estructurados. Es el principio detrás de los "plugins" o "herramientas" que usa ChatGPT.

En lugar de que el modelo solo responda con texto, **puede llamar a funciones reales**: APIs, cálculos, bases de datos, automatización, etc.

### 📌 ¿Por qué es importante?

- Permite conectar **IA con el mundo real**.
- Ideal para crear asistentes inteligentes, interfaces de voz, bots autónomos, etc.
- Separa el razonamiento del modelo y la ejecución real de acciones.

---

## 🛠 Herramientas implementadas

| Herramienta   | Descripción                            | Entrada esperada              |
|---------------|----------------------------------------|-------------------------------|
| `weather`     | Obtiene el clima actual de una ciudad  | `{ "city": "Buenos Aires" }`  |
| `dictionary`  | Devuelve definiciones y sinónimos      | `{ "word": "freedom" }`       |
| `math`        | Evalúa una expresión matemática        | `{ "expression": "3 * (4+1)" }` |

---

## 🚀 Instalación local

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/MCP-para-todo.git
cd MCP-para-todo

Instala dependencias:
npm install

Crea un archivo .env basado en .env.example:
cp .env.example .env

Corre el servidor en modo desarrollo:
npm run dev

🧩 Agregar nuevas herramientas
Crea un archivo en src/tools/miHerramienta.ts

Exporta una función ToolHandler

Regístrala en src/mcp/server.ts


💡 Inspiración y usos futuros
Asistentes personales (con voz o chat)

Automatización de tareas

Herramientas de accesibilidad

Aprendizaje de arquitecturas LLM modernas