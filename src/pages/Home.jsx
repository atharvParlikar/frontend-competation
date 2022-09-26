import Navbar from "../components/Navbar";
import { Github, Instagram, Twitter, GeoAlt } from "react-bootstrap-icons";
import "../App.css";
import { ReactComponent as Javascript } from "../logos/javascript.svg";
import { ReactComponent as Python } from "../logos/python.svg";
import { ReactComponent as Typescript } from "../logos/typescript-icon.svg";
import { ReactComponent as NodeJS } from "../logos/nodejs.svg";
import { ReactComponent as HTML } from "../logos/html-5.svg";
import { ReactComponent as Css3 } from "../logos/css-3.svg";
import { ReactComponent as ReactIcon } from "../logos/react.svg";
import { ReactComponent as NextIcon } from "../logos/nextjs-icon.svg";
import { ReactComponent as Go } from "../logos/go.svg";
import { ReactComponent as Flask } from "../logos/flask.svg";
import { ReactComponent as Express } from "../logos/express.svg";
import { ReactComponent as Programmer } from "../logos/programmer.svg";

const Home = () => {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="hero">
          <div className="socials-nav">
            <Github
              onClick={() =>
                window.open("https://github.com/atharvParlikar", "_blank")
              }
              className="icons"
            />
            <Twitter
              onClick={() =>
                window.open("https://twitter.com/atharvParlikar1", "_blank")
              }
              className="icons twitter"
            />
            <Instagram
              onClick={() =>
                window.open(
                  "https://www.instagram.com/atharvparlikar01",
                  "_blank"
                )
              }
              className="icons"
            />
          </div>
          <div className="main-content">
            <div className="title">
              <div className="title-container">
                <h1>Atharv Parlikar</h1>
                <div
                  className="location"
                  onClick={() => {
                    window.open(
                      "https://goo.gl/maps/nQbPZC5VZS2EQsEL6",
                      "_blank"
                    );
                  }}
                >
                  <GeoAlt className="geo-icon" />
                  <p>Nagpur, Maharashtra, India.</p>
                </div>
                <p className="description">
                  Hii, i am a freshmen year Computer Science student based in
                  Nagpur (for next 3 years atleast). I know web technologies
                  like HTML, CSS, JavaScript, ReactJS but i'm more interested in
                  recreational programming :)
                  <br />
                  very fond of low level programming languages like c, rust.
                  <br />
                  Interested in ML but maths is hard 🥲
                </p>
              </div>
            </div>
            <div className="hero-img">
              <img src="./atharv.jpeg" alt="dev image" />
            </div>
          </div>
        </div>
        <div className="skills">
          <div className="skills_">
            <h1>Skills</h1>
            <div className="languages">
              <h3>languages</h3>
              <div className="icons">
                <Javascript className="icon" />
                <Typescript className="icon" />
                <Python className="icon" />
                <Go className="icon" />
              </div>
            </div>
            <div className="languages">
              <h3>frontend</h3>
              <div className="icons">
                <HTML className="icon" />
                <Css3 className="icon" />
                <ReactIcon className="icon" />
                <NextIcon className="icon" />
              </div>
            </div>
            <div className="languages">
              <h3>backend</h3>
              <div className="icons">
                <NodeJS className="icon" />
                <Express className="icon" />
                <Flask className="icon" />
                <Go className="icon" />
              </div>
            </div>
          </div>
          <Programmer />
        </div>
      </div>
    </div>
  );
};

export default Home;
