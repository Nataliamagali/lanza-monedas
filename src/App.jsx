// src/App.js
import React, { useEffect } from 'react';
import { fiveHeads } from './utils'; 

function App() {
    useEffect(() => {
        fiveHeads()
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="App">
            <h1>Proyecto de Lanzamientos de Monedas</h1>
           
        </div>
    );
}

export default App;
