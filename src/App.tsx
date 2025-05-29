import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./Pages/Login";
import Forms from "./Pages/Forms";
import Informations from "./Pages/Informations";
import Header from "./Pages/Header";
import PrivateRoute from "./PrivateRoute";
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function App() {

  useEffect(() => {
    
    import('aos').then(AOS => {
      AOS.init({
        duration: 500, 
        once: true, 
      });
    });
  }, []);

  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/form"
            element={<PrivateRoute><Forms /></PrivateRoute>}
          />
          <Route
            path="/informacoes"
            element={<PrivateRoute><Informations /></PrivateRoute>}
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}