import {  Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import CategorySlider from './components/Home/CategorySlider';
import CategoryPage from './components/Home/CategoryPage';
import Footer from './components/Footer';
import ProductCart from './components/ProductCart';
import Addcart from './components/Addcart';

function App() {

  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
          <Route path='/cart' element={<ProductCart/>} />
          <Route path="/" element={<CategorySlider />} exact />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path='/items' element= {<Addcart/>}/>
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
