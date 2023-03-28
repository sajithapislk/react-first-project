import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import NavBar from './Components/NavBar';
import NoMatch from './Components/NoMatch';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;