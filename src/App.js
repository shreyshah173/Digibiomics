// src/App.js
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ChatButton from './components/ChatButton';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div className="fixed bottom-4 right-8">
        <ChatButton />
      </div>
      <Footer />
    </>
  );
}

export default App;
