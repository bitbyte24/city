import React from 'react';

const App: React.FC = () => {
    const handleClick = () => {
        alert('App Started');
    };

    return (
        <div>
            <h1>Welcome to My React App</h1>
            <button onClick={handleClick}>Start App</button>
        </div>
    );
};

export default App;