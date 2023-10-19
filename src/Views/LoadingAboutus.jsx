import LoadingAnim from "../Components/Loading/LoadingAnim"
import React, { useState, useEffect } from 'react';

export default function LoadingAboutUs() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);

        }, 10000);
    
        return () => clearTimeout(timeoutId);
      }, []);

    return(
        //<LoadingAnim/>
    <div className="App" >
      {loading ? (<LoadingAnim/>):null}
    </div>
    );
}