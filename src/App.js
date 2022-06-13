import './App.css';
import Navigation from './components/Navbar'
import CardsContainer from './components/CardsContainer';
import Form from './components/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/home" element={<CardsContainer />} />
          <Route path="/add-request" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
