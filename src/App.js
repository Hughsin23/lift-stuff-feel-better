import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import LandingPage from './components/Landing/Landing'
import Search from "./components/Search/Search"

function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
