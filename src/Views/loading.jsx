import LoadingProjectAnim from "../Components/Loading/LoadingProjectAnim"
import LoadingAnim from "../Components/Loading/LoadingAnim"
import { Button} from 'antd';
import React, { useState, useEffect } from 'react';

export default function Loading() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(false);
    const [button, setButton] = useState(true);
    var mes = "";
    Math.floor(Math.random() * 2) == 1 ? mes = "SUCCESS": mes="ERROR";

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
            setMessage(true);

        }, 10000);
    
        return () => clearTimeout(timeoutId);
      }, []);

    function handleButton(){
        setButton(false);
        setLoading(true);
    }

    return(
        //<LoadingAnim/>
    <div className="App" >
      {button ? (<Button type="primary" size="Large" onClick={handleButton} > Start </Button>):null}
      {loading ? (<LoadingProjectAnim/>):null}
      {message ? (<h1 style={{color: "white"}}>{mes}</h1>):null}
    </div>
    );
} 

/*Borrar
const [showComponent1, setShowComponent1] = useState(false);
  useEffect(() => {
    // Navegar a MainPage después de la animación
    const timeoutId = setTimeout(() => {
      setShowComponent1(true);
    }, 10000); // Ajusta el tiempo según la duración de tu animación

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="App" style={{ background: showComponent1 ? 'white' : 'gray' }}>
      {showComponent1 ? 
      (<MainPage/>):
      (<Loading/>)
      }
    </div>
  );
*/ 