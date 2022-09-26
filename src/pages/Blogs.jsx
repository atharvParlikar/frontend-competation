import "./blogs.css";

const Blogs = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="blogs">
          <h1
            style={{
              marginTop: "7%",
              marginBottom: "7%",
            }}
          >
            Really?
          </h1>
          <h3
            style={{
              width: "70%",
            }}
          >
            Come on guys you wanna see blog too the Home page took me 1:30 hr
            and you guys were super generous with 2 hrs of time, have some mercy
            a good portfolio takes anywhere from 2 weeks to months to make 🥲🤌
          </h3>
        </div>

        <button
          onClick={() => (window.location.href = "/")}
          style={{
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

export default Blogs;
