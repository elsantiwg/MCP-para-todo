import axios from 'axios';
import { ToolHandler } from '../types';

export const weatherTool: ToolHandler = async (input) => {
  const city = input?.city || 'Madrid';
  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    throw new Error('❌ Falta la clave WEATHER_API_KEY en el archivo .env');
  }

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(city)}&lang=es`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    return {
      ciudad: data.location.name,
      pais: data.location.country,
      temperatura: data.current.temp_c,
      condicion: data.current.condition.text,
      humedad: data.current.humidity,
      viento_kph: data.current.wind_kph,
    };
  } catch (error: any) {
    console.error('🌩️ Error consultando el clima:', error.message);
    throw new Error('No se pudo obtener el clima. Verifica el nombre de la ciudad o la clave de API.');
  }
};
