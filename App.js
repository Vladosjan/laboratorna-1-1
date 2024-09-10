import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import Car from './components/Car';
import Home from './components/Home'; 
import AirBus from './components/AirBus'; 
import People from './components/people'; 
import BohzaAlexei from './components/Bohza';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld/> 
        <Car></Car> 
        <Home></Home> 
        <AirBus></AirBus> 
        <People></People> 
        <BohzaAlexei></BohzaAlexei>
      </header>
    </div>
  );
}

export default App;
