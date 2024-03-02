import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero'
import Aboutme from './components/Aboutme/Aboutme';
import './App.css';
import './app.scss';
//import Preloader from './components/Preloader/Preloader';

function App() {
  document.title="krnts.";


  return (
  <div>
     <NavBar/>
    <section id="Homepage">
   
    <Hero/>
    </section>
   
    <section id = "About me"><Aboutme/></section>
    {/* <section id= "Blogs">Parallax</section>
    <section id = "Works">Portfolio</section>
    <section id = "Contact">Contact</section>   */}
  </div>

   );
}

export default App;
