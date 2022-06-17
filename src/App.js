import './App.css';
import 'animate.css'
import { useState, useEffect } from 'react';
import Navigation from './components/Navbar'
import CardsContainer from './components/CardsContainer';
import Form from './components/Form';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  const [CGPhone, setCGPhone] = useState(9492146431)
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (user) { console.log(user) }
  }, [user])

  return (
    <Router>
      <div className="App">
        <Navigation CGPhone={CGPhone} setCGPhone={setCGPhone} user={user} />
        <Routes>
          <Route path="/" element={<CardsContainer CGPhone={CGPhone} />} />
          <Route path="/add-request" element={<Form />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
