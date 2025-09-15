import Navbar from './components/Navbar';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
