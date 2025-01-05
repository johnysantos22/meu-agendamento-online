import React, { useState } from "react";
import imagem from "./assets/logo.svg";
import { login, register } from "./services/api";

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (isLogin) {
        const response = await login(email, password);
        alert(`Login realizado com sucesso: ${JSON.stringify(response)}`);
      } else {
        const response = await register(name, email, password);
        alert(`Cadastro realizado com sucesso: ${JSON.stringify(response)}`);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Ocorreu um erro. Verifique os dados e tente novamente.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="flex justify-center">
          <img src={imagem} alt="Logo" className="w-32 h-32 rounded-full" />
        </div>
        <h1 className="text-3xl font-bold underline text-center">
          {isLogin ? "Login" : "Cadastro"} - Agendamento Online
        </h1>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline"
          >
            {isLogin ? "Criar uma conta" : "Já tenho uma conta"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
