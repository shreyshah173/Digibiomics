import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
