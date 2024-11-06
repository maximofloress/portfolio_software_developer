import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css';
import NavBar from './components/Navbar';
import CorredoresView from "./components/CorredoresView"
import RegistrarCorredorView from "./components/RegistrarCorredorView"

function App() {
  return (
    <div className='container'>
      <NavBar />
      <div className='row'>
        <div className='col-12'>
          <BrowserRouter>
              <Routes>
                <Route path='/corredores' element={<CorredoresView />} />
                <Route path='/registrar'  element={<RegistrarCorredorView />}/>
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
