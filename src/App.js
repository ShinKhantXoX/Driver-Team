import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import LandingPage from './pages/Landing';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path={"/faq"} element={<Faq />} />
        <Route path={"/privacy"} element={<Privacy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
