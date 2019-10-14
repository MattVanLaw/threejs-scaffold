import React, {useEffect} from 'react';

import init from './three';

import './App.css';

const App = () => {
  useEffect(() => {
    init();
  }, []);

  return (
    <div id="scene-container">
      {/* waaah */}
    </div>
  );
};

export default App;
