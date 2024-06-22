import "./styles/About.css";
const About = () => {
  return (
    <>
      <div id="about">
        <h1 className="outfit font-616 cent">ABOUT ME</h1>
        <div className="about">
          <span className={`leftd `}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWEmRx5Uq2qFn-vQFgsjjdRIv6MxcbjTshNA&s"
              alt=""
              className="coder"
              style={{ backgroundColor: "white", mixBlendMode: "multiply" }}
            />
          </span>
          <span className={`rightd font-616 `}>
            I have a strong enthusiasm for developing top-notch software that
            enhances the well-being of those in my community. My expertise lies
            in crafting software solutions for diverse clients, including
            individuals, small businesses, and large enterprises. Imagine having
            a software expert readily accessible,what possibilities would you
            explore?
          </span>
        </div>
      </div>
    </>
  );
};
export default About;
