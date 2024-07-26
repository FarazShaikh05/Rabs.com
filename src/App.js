import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Overview from './components/Overview';
import Service from './components/Service';
import Approach from './components/Approach';
import Reviews from './components/Reviews';
import Aboutus from './components/Aboutus';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Intrestedicon from './components/Intrestedicon';

function App() {
  const navItems = [
    { title: "Home", href: "Home" },
    { title: "Overview", href: "Overview" },
    { title: "Service", href: "Service" },
    { title: "Our Approach", href: "Approach" },
    { title: "Review", href: "Review" },
    { title: "About Us", href: "AboutUs" },
    { title: "FAQ", href: "FAQ" },
    { title: "Let's Talk +91 98336 36916", href: "Contact" }
  ];
  return (
    <div className="App">
      {/* <Header NavTitle1={"Home"}  NavTitle2={"Overview"} NavTitle3={"Service"} NavTitle4={"Our Approach"} NavTitle5={"Review"} NavTitle6={"About Us"} NavTitle7={"FAQ"} NavTitle8={"Let's Talk +91 98336 36916"}/> */}

      <Header navItems={navItems} />
      <Home/>
      <Overview/>
      <Service/>
      <Approach/>
      <Reviews/>
      <Aboutus/>
      <Faq/>
      <Footer/>
      <Intrestedicon/>
    </div>
  );
}

export default App;
