import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const getGeminiResponse = async (messages) => {
  try {
    const contents = messages.map((msg) => ({
      role: msg.role === "assistant" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents,
    });

    return response.candidates[0].content.parts[0].text;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export default getGeminiResponse;
