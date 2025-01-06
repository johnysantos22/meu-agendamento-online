// Services.tsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Definindo a tipagem do serviço
interface Service {
  id: number;
  name: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([]); // Tipagem para o estado de services
  const navigate = useNavigate();

  useEffect(() => {
    // Simulação de fetch dos serviços
    setServices([
      { id: 1, name: 'Consulta de Agendamento' },
      { id: 2, name: 'Serviço de Suporte' },
    ]);
  }, []);

  const handleSelectService = (serviceId: number): void => {
    navigate(`/schedule/${serviceId}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold underline text-center text-blue-600">Escolha o Serviço</h1>
        <div className="mt-4 space-y-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleSelectService(service.id)}
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              {service.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
