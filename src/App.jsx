import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import ServicesPage from './pages/ServicesPage'
import GalleriePage from './pages/GalleriePage'
import KontaktPage from './pages/KontaktPage'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/galerie" element={<GalleriePage />} />
        <Route path="/kontakt" element={<KontaktPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
