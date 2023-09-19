import './App.css'
import Navbar from './Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Inquiries from './pages/Inquiries'
import { Route, Routes} from "react-router-dom"

function App() {
  return(
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />} />
          <Route path="inquiries" element={<Inquiries />} />
        </Routes>
      </div>
    </>
  )
}
 
export default App;
 