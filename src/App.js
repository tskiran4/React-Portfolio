import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero'
import './App.css';
import './app.scss';
import Test from './Test';

function App() {
  return (
  <div>
    <section id="Homepage"><NavBar/>
    <Hero/>
    </section>
   
    {/* <section>Parallax</section> */}
  
    {/* <section id = "About me">Services</section>
    <section id= "Blogs">Parallax</section>
    <section id = "Works">Portfolio</section>
    <section id = "Contact">Contact</section>   */}
  </div>

  );
}

export default App;
