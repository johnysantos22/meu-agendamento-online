import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Função para login
export const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/login", { email, password });
    return response.data;
  } catch (error) {
    console.error("Erro no login:", error);
    throw error;
  }
};

// Função para cadastro
export const register = async (name: string, email: string, password: string) => {
  try {
    const response = await api.post("/register", { name, email, password });
    return response.data;
  } catch (error) {
    console.error("Erro no cadastro:", error);
    throw error;
  }
};

// Função para acessar rota protegida
export const accessProtected = async (token: string) => {
    try {
      const response = await api.get("/protected", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao acessar rota protegida:", error);
      throw error;
    }
  };
  

export default api;