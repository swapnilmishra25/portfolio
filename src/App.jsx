import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Paytm from './pages/Paytm';
import Codepen from './pages/Codepen';
import Backroads from './pages/Backroads';
import Portfolio from './pages/Portfolio';

function App() {
   return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/projects' element = {<Paytm/>}/>
            <Route path='/contact' element = {<Contact/>}/>
            <Route path = '/codepen' element = {<Codepen/>}/>
            <Route path = '/backroads' element = {<Backroads/>}/>
            <Route path = '/portfolio' element = {<Portfolio/>}/>
        </Routes>
      </BrowserRouter>
    
   )
}

export default App
