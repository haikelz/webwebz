import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './components/About';
import Works from './components/Works';
import Skills from './components/Skills';

const App = () => {
  return (
  <div className='app'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/works' element={<Works />}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
