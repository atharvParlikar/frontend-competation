import "./style.css";
import cpp from "./cpplogo.jpg";
import bitcoin from "./opengraph.png";

const Projects = () => {
  return (
    <div className="dev">
      <div className="container">
        <h1 style={{ marginBottom: "15%", marginTop: "5%" }}>Projects</h1>

        <div className="projects">
          <div
            className="project"
            onClick={() => {
              window.open(
                "https://www.github.com/atharvparlikar/autocompile-cpp"
              );
            }}
          >
            <div
              className="image"
              style={{
                backgroundColor: "#262C3A",
              }}
            >
              <img src={cpp} alt="" />
            </div>
            <div className="description">
              <h2>c++ autocompiler</h2>
              <p>
                This is just a simple script i wrote for myself, because i was
                tired of compiling c++ code again and again. this script watches
                your file and look for changes as soon as there is a change (its
                only when you save the file) it compiles the file.
              </p>
            </div>
          </div>

          <div
            className="project"
            onClick={() => {
              window.open("https://github.com/atharvParlikar/crypto-tracker");
            }}
          >
            <div
              className="image"
              style={{
                backgroundColor: "white",
                borderRadius: "10px 0 0 10px",
              }}
            >
              <img src={bitcoin} alt="" />
            </div>

            <div className="description">
              <h2>crypto tracker</h2>
              <p>
                This is a frontend client that uses a crypto api to fetch data
                about top 10 most traded cryptocurrencies and shows a detailed
                analysis about each of them.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => (window.location.href = "/")}
          style={{
            marginTop: "7%",
            borderRadius: "10px",
            padding: "15px 30px",
            marginBottom: "5%",
            backgroundColor: "#262C3A",
            color: "white",
            fontSize: "16px",
            border: "2px solid black",
          }}
        >
          Back Home
        </button>
      </div>
    </div>
  );
};

export default Projects;
