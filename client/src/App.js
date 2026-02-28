import Login from './Components/Users/login';
import Register from './Components/Users/register'
import Questions from './Components/Main/questions'
//import NavBar from './Components/Header'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  function ProtectedRoute({ children }) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
    return isLoggedIn ? children : <Navigate to="/" replace />
  }
  
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/questions" element={
              <ProtectedRoute>
                <Questions />
              </ProtectedRoute>
            }/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
