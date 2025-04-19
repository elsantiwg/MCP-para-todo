import { evaluate } from 'mathjs';
import { ToolHandler } from '../types';

export const mathTool: ToolHandler = async (input) => {
  const expression = input?.expression;

  if (!expression) {
    throw new Error('❌ Debes proporcionar una expresión matemática en "expression".');
  }

  try {
    const result = evaluate(expression);
    return {
      expresion: expression,
      resultado: result,
    };
  } catch (error: any) {
    console.error('🧮 Error evaluando expresión:', error.message);
    throw new Error('No se pudo evaluar la expresión matemática.');
  }
};
