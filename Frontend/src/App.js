import logo from './logo.svg';
import './App.css';
import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';

import StartJourney from './components/StartJourney';


function App() {
  return (
    <div className="App">
      
    <Navbar/>  
      <AppRouter/>
      
     
    </div>
  );
}

export default App;
