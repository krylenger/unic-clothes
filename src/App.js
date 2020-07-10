import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <HomePage />
      </div>
    </Router>
      
  );
}

export default App;
