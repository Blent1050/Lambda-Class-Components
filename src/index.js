import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const disneyData = [
  { characterName: 'Mickey Mouse' },
  { characterName: 'Minnie Mouse' },
  { characterName: 'Donald Duck' },
  { characterName: 'Goofy' },
  { characterName: 'Pluto' }
];

function App() {
  return <div className="App" />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
