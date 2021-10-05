import '../styles/App.css';
import logo from '../assets/svg/logo.svg';
import Navbar from './header/Navbar';
import Banner from './homepage/Banner';

function App() {
  console.log(logo);
  const logoSettings = {
    logoImage: logo,
    logoTitle: "Back to top",
    logoLink: "/",
    logoAlt: "João Frade Music"
  }

  const navbar = [
    {
      navLinkContent: "ABOUT",
      navLinkSettings: {
        title: "Go to About",
        href: "#about"
      }
    },
    {
      navLinkContent: "TOUR",
      navLinkSettings: {
        title: "Check Tour Dates",
        href: "#tour"
      }
    }, {
      navLinkContent: "PRESS KIT",
      navLinkSettings: {
        title: "See Press Kit",
        href: "#presskit"
      }
    }, {
      navLinkContent: "CURRENT PROJECTS",
      navLinkSettings: {
        title: "Check my Current Projects",
        href: "#currentProjects"
      }
    }, {
      navLinkContent: "Contacts",
      navLinkSettings: {
        title: "Contacts",
        href: "#contacts"
      }
    }
  ]

  return (
    <div className="App">
      <Navbar logoSettings={logoSettings} navbar={navbar} />
      <Banner />
    </div>
  );
}

export default App;
