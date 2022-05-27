import { Home } from './components/Pages/Home/Home';
import { AboutUS } from './components/Pages/AboutUS/AboutUS';
import { ContactUS } from './components/Pages/ContactUS/ContactUS';
import { Contador } from './components/Pages/Contador/Contador';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './components/Pages/NotFound/NotFound';
import { Header } from './components/Layout/Header/Header';
import { ModoDark } from './components/Pages/ModoDark/ModoDark';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUS' element={<AboutUS />} />
        <Route path='/contactUS' element={<ContactUS />} />
        <Route path='/contador' element={<Contador />} />
        <Route path='/modoDark' element={<ModoDark />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      
    </div>
  );
}

export default App;
