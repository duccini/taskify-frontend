import api from "../api/axios";

interface AuthData {
  username: string;
  password: string;
}

export async function registerUser(data: AuthData): Promise<void> {
  try {
    await api.post("/auth/register", data);
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || "Erro ao registrar usuário"
    );
  }
}

export async function loginUser(data: AuthData): Promise<void> {
  try {
    const response = await api.post("/auth/login", data);
    const accessToken = response.data.accessToken;

    localStorage.setItem("taskifyAccessToken", accessToken);
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Erro ao fazer login");
  }
}
