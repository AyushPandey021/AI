import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

console.log("API KEY:", process.env.OPENAI_API_KEY);

export default client;