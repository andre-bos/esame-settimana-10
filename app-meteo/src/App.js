import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from './pages/Results';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/results/:cityname" element={<Results />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
