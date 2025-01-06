import React from 'react';

type Appointment = {
  id: number;
  service: string;
  date: string;
  time: string;
};

const appointments: Appointment[] = [
  { id: 1, service: 'Consulta de Agendamento', date: '2025-01-10', time: '10:00' },
  { id: 2, service: 'Serviço de Suporte', date: '2025-02-15', time: '14:00' }
];

export const MyAppointments: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Meus Agendamentos</h1>
      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div key={appointment.id} className="border p-4 rounded-md">
            <p><strong>Serviço:</strong> {appointment.service}</p>
            <p><strong>Data:</strong> {appointment.date}</p>
            <p><strong>Horário:</strong> {appointment.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyAppointments;
