import './App.css';
import { useState } from 'react';
import Navigation from './components/Navbar'
import CardsContainer from './components/CardsContainer';
import Form from './components/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [CGPhone, setCGPhone] = useState(9492146431)

  return (
    <Router>
      <div className="App">
        <Navigation setCGPhone={setCGPhone} />
        <Routes>
          <Route path="/home" element={<CardsContainer CGPhone={CGPhone} />} />
          <Route path="/add-request" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
