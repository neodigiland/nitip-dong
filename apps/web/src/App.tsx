import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Location from './pages/Location'
import DeliveryMethod from './pages/DeliveryMethod'
import Pricing from './pages/Pricing'
import About from './pages/About'
import FAQ from './pages/FAQ'
import AdminReview from './pages/AdminReview'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display flex flex-col overflow-x-hidden transition-colors duration-200">
        <Navbar />
        <main className="flex-grow pt-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location" element={<Location />} />
            <Route path="/delivery-method" element={<DeliveryMethod />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/admin/review" element={<AdminReview />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

