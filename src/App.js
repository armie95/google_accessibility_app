import './App.css';
import Screen from './components/Screen';
import PathPage from './components/Pages/PathPage';
import TakeMeHomePage from './components/Pages/TakeMeHomePage';
import HomePage from './components/Pages/HomePage';

function App() {
  return (
    <div className="App">
   {/* I will need to add a router here.. */}
  <Screen>
    <HomePage/>
    <TakeMeHomePage/>
    <PathPage/>
    <PathPage/>
  </Screen>
    </div>
  );
}

export default App;
