import './App.css';
import Screen from "./components/Screen"
import Clock from './components/Clock';
import TakeMeHomeCard from './components/TakeMeHomeCard';
import HomePathCard from './components/HomePathCard';
import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
   {/* I will need to add a router here.. */}
   <HomePathCard/>
    </div>
  );
}

export default App;
