import axios from 'axios';
import { ToolHandler } from '../types';

export const dictionaryTool: ToolHandler = async (input) => {
  const word = input?.word;

  if (!word) {
    throw new Error('❌ Debes proporcionar una palabra en el campo "word".');
  }

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`;

  try {
    const response = await axios.get(url);
    const data = response.data[0];

    const meanings = data.meanings.map((meaning: any) => ({
      parteDeLaOracion: meaning.partOfSpeech,
      definiciones: meaning.definitions.map((def: any) => ({
        definicion: def.definition,
        ejemplo: def.example || null,
        sinonimos: def.synonyms || [],
      })),
    }));

    return {
      palabra: data.word,
      pronunciacion: data.phonetic || null,
      origen: data.origin || null,
      significados: meanings,
    };
  } catch (error: any) {
    console.error('📕 Error buscando definición:', error.message);
    throw new Error('No se pudo encontrar la definición de la palabra.');
  }
};
