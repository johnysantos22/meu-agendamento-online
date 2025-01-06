import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Schedule = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [editable, setEditable] = useState(true);
  const navigate = useNavigate();

  const handleConfirm = () => {
    const appointmentData = {
      serviceId,
      date,
      time,
    };

    console.log('Enviando dados do agendamento:', appointmentData);

    // Exemplo de envio para o backend
    // fetch('/api/agendamento', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(appointmentData),
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log('Agendamento confirmado:', data);
    //   alert('Agendamento confirmado!');
    //   navigate('/appointments');
    // });

    alert('Agendamento confirmado!');
    navigate('/appointments');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold underline text-center text-blue-600">Agendamento</h1>
        <h2 className="text-xl text-center text-gray-700 mt-4">
          Agendando: Serviço {serviceId}
        </h2>
        <form className="mt-4 space-y-4">
          <div>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {editable && (
            <button
              type="button"
              onClick={() => setEditable(false)}
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Editar
            </button>
          )}
          <button
            type="button"
            onClick={handleConfirm}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Schedule;
