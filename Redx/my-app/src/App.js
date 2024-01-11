import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Counter from './Redux/Counter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Counter/>} />
      </Routes>
    </div>
  );
}

export default App;
