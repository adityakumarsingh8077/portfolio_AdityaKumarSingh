import "./app.scss"
import Test from "./test.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallax from "./components/parallax/Parallax.jsx";
import Services from "./components/services/Services.jsx";
// import Sidebar from "./components/sidebar/Sidebar.jsx";
const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>  
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
 
    {/* <Test/> */}




    
      </div>;
};

export default App;
