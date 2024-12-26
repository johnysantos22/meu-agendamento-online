import React from "react";
import imagem from "./assets/logo.svg";
import { useState } from "react";

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre Login e Cadastro

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        {/* Imagem */}
        <div className="flex justify-center">
          <img src={imagem} alt="Logo" className="w-32 h-32 rounded-full" />
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold underline text-center">
          {isLogin ? "Login" : "Cadastro"} - Agendamento Online
        </h1>

        {/* Formulário */}
        <form className="mt-4 space-y-4">
          {!isLogin && (
            <div>
              <input
                type="text"
                placeholder="Nome"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Botão de Enviar */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            {isLogin ? "Entrar" : "Cadastrar"}
          </button>
        </form>

        {/* Alternar entre Login e Cadastro */}
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
