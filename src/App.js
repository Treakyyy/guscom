import './App.css';
import Header from './UI/Header';
import {HashRouter, Routes} from 'react-router-dom'


function App() {


  return (
    <HashRouter basename='/'>

      <div className="App">
        <Routes>
          <Header/>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
