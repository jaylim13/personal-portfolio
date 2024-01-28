import './App.css'
import Navbar from './Navbar'
import General from './pages/General'
import Home from './pages/Home'
import Academic from './pages/Academic'
import Inquiries from './pages/Inquiries'
import Cooking from './pages/Cooking'
import Gym from './pages/Gym'
import Soccer from './pages/Soccer'
import Research from './pages/Research'
import { Route, Routes} from "react-router-dom"

function App() {
  return(
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="general" element={<General />} />
          <Route path="academic" element={<Academic />} />
          <Route path="inquiries" element={<Inquiries />} />
          <Route path="cooking" element={<Cooking />} />
          <Route path="gym" element={<Gym />} />
          <Route path="soccer" element={<Soccer />} />
          <Route path="research" element={<Research />} />
      
        </Routes>
      </div>
    </>
  )
}
 
export default App;
 