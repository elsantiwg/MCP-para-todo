import express from 'express';
import { weatherTool } from '../tools/weather';
import { ToolHandler } from '../types';

const app = express();
app.use(express.json());

// Registro de herramientas disponibles
const tools: Record<string, ToolHandler> = {
  weather: weatherTool,
  // futuras herramientas: translate, dictionary, etc.
};

// Ruta principal MCP
app.post('/mcp', async (req, res) => {
  const { tool, input } = req.body;

  const handler = tools[tool];

  if (!handler) {
    return res.status(400).json({ error: `Herramienta "${tool}" no encontrada.` });
  }

  try {
    const result = await handler(input);
    res.json({ result });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export const startServer = (port = 3000) => {
  app.listen(port, () => {
    console.log(`🔌 MCP Server corriendo en http://localhost:${port}`);
  });
};
