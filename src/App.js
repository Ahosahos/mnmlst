import "./App.css";
import { Hamburger } from "./img/mdi_hamburger-menu";
import fb from "./img/facebook.png";
import insta from "./img/instagram.png";
import twitter from "./img/twitter.png";
import ws from "./img/whatsapp.png";
import introIcon from "./img/black-man-posing.png";

function App() {
  return (
    <>
      <header>
        <div className="mnmlst-logo">mnmlst.</div>
        <nav>
          <div>HOME</div>
          <div>PRODUCT</div>
          <div>STORE</div>
          <div>ABOUT US</div>
        </nav>
        <div>
          <Hamburger />
        </div>
      </header>
      <main className="intro">
        <div className="greetings">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean sed
          adipiscing diam donec. Cras ornare arcu dui vivamus arcu felis
          bibendum ut tristique. Aliquam faucibus purus in massa tempor nec
          feugiat nisl. Tortor id aliquet lectus proin nibh nisl condimentum.
          Diam maecenas sed enim ut. Vel elit scelerisque mauris pellentesque
          pulvinar pellentesque habitant morbi. Mattis enim ut tellus elementum.
          Ultricies lacus sed turpis tincidunt id aliquet risus. Arcu felis
          bibendum ut tristique et egestas. At tellus at urna condimentum mattis
          pellentesque id nibh.
        </div>
        <div className="intro-icon">
          <div className="less-is-more">less is more</div>
          <div className="circle"></div>
          <img src={introIcon} alt="icon" />
        </div>
      </main>
      <footer>
        <div className="contact">
          <div>
            <img src={fb} alt="facebook" />
          </div>
          <div>
            <img src={insta} alt="instagram" />
          </div>
          <div>
            <img src={twitter} alt="twitter" />
          </div>

          <div>
            <img src={ws} alt="whatsapp" />
          </div>
        </div>
        <div className="signature">Arlington Heights, IL</div>
      </footer>
    </>
  );
}

export default App;
