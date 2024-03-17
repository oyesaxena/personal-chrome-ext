import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            Hello World {count}
            <button onClick={() => setCount(count + 1)}>press</button>
        </div>
    );
}

export default App;
