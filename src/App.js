import logo from './logo.svg';
import './App.css';
import Loading from './Views/loading';
import MainPage from './Views/MainPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {
  const [showComponent1, setShowComponent1] = useState(false);
  useEffect(() => {
    // Navegar a MainPage después de la animación
    const timeoutId = setTimeout(() => {
      setShowComponent1(true);
    }, 10000); // Ajusta el tiempo según la duración de tu animación

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="App">
      {/*showComponent1 ? 
      (<MainPage/>):
      (<Loading/>)
  */}
    {<MainPage/>}
    </div>
  );
}

export default App;
