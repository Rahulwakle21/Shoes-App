import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeHead from './Pagess/HOMECompo/HomeHead/HomeHead';
import Footer from './component/FooterComp/Footer';
import NavBar from './component/NavBarComp/NavBar';
import MenHead from './Pagess/MENCompo/MenHead';
import WomenHead from './Pagess/WomenCompo/WomenHead';
import ShoeDetailsWomen from './Pagess/ShoeDetails/ShoeDetailsWomen';
import SHoeDetailsMen from './Pagess/ShoeDetails/SHoeDetailsMen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<HomeHead/>}/>
          <Route path='/men' element={<MenHead/>}/>
          <Route path='/women' element={<WomenHead/>}/>
          <Route path='/shoedetails' element={<ShoeDetailsWomen/>}/>
          <Route path='/shoedetailsmen' element={<SHoeDetailsMen/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
