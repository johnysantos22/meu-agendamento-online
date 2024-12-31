import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold underline text-center">Login - Agendamento Online</h1>
        <form className="mt-4 space-y-4">
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
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
