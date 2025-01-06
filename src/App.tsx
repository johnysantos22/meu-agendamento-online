import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginCadastro from './pages/Login';
import Services from './pages/Services';
import Schedule from './pages/Schedule';
import Appointments from './pages/MyAppointments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginCadastro />} />
        <Route path="/services" element={<Services />} />
        <Route path="/schedule/:serviceId" element={<Schedule />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Router>
  );
}

export default App;
