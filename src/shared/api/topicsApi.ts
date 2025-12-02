import axios from "axios";

const API_BASE = "http://localhost:3001/api";

export const getTopicsByLanguage = async (languageSlug: string) => {
  const response = await axios.get(`${API_BASE}/topics/${languageSlug}`);
  return response.data;
};