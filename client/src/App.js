import './App.css';
import Login from './Components/Users/login';
import Register from './Components/Users/register'
import Questions from './Components/Main/questions'
//import NavBar from './Components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/questions" element={<Questions />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
