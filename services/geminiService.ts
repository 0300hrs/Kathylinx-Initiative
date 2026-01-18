
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiAdvice = async (topic: string, query: string) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are a compassionate and knowledgeable assistant for "EcoHealth", an NGO.
    EcoHealth focuses on: 
    1. Female Health (reproductive rights, hygiene, prenatal care)
    2. Mental Health (stress management, trauma, emotional well-being)
    3. Climate Awareness (sustainability, eco-anxiety, community action).
    
    Keep your tone professional yet empathetic. Always suggest consulting a professional for medical or psychological advice.
    The current context is: ${topic}.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: query,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
  }
};
