//import './App.css';
import Login from './Components/Users/login';
import Register from './Components/Users/register'
//import NavBar from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
