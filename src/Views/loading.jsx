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

    /*
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
            setMessage(true);

        }, 10000);
    
        return () => clearTimeout(timeoutId);
      }, []);*/

    function handleAnimation(){
        const timeoutId = setTimeout(() => {
            setLoading(false);
            setMessage(true);

        }, 10000);
    
        return () => clearTimeout(timeoutId);
    }

    function handleButton(){
        setButton(false);
        setLoading(true);
        handleAnimation();
    }

    return(
        //<LoadingAnim/>
    <div className="App" >
      {button ? (<Button type="primary" size="Large" onClick={handleButton} style={{backgroundColor: "white", color: "black"}}> Start </Button>):null}
      {loading ? (<LoadingAnim/>):null}
      {message ? (<h1 style={{color: "white", fontWeight: "8"}}>{mes}</h1>):null}
    </div>
    );
}