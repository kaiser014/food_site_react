import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MyNavbar from './component/Navbar/Navbar';
import TopHeader from './component/TopHeader/TopHeader';

function App() {
  return (
    <div>
      <TopHeader />
      <MyNavbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
    </div>
  );
}

export default App;
