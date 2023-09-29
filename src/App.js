import './App.css'
import Navbar from './Navbar'
import General from './pages/General'
import Home from './pages/Home'
import Academic from './pages/Academic'
import Inquiries from './pages/Inquiries'
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
        </Routes>
      </div>
    </>
  )
}
 
export default App;
 