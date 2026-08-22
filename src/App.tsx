import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Waitlist from './components/Waitlist';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Waitlist />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
