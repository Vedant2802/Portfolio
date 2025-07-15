import openai from "../api/openAi";

export const handleSearch = async (query) => {
  const gptResults = await openai.chat.completions.create({
    messages: [{ role: "user", content: query }],
    model: "gpt-3.5-turbo",
  });
  return gptResults;
};
