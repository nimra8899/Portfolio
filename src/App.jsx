import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
import Tech from './components/Tech'
import Projects from './components/Projects'
import './App.css';
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className='h-auto w-full bg-gray-900   selection:bg-cyan-300 selection:text-cyan-900'> 

      <div className='container px-3 mx-auto'>
        <Navbar></Navbar>
        <Hero></Hero>
        <About></About>
      
        <Tech></Tech>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      
    </div>
  );
}

export default App;
