import React, { Component } from "react";
import NavBar from "./NavBar";
import Header from "../components/sections/Header";
import About from "../components/sections/About";
import Development from "../components/sections/Development";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: "laptop"
    };
  }

  componentDidMount() {
    this.reportWindowSize();
    window.addEventListener("resize", this.reportWindowSize);
  }

  reportWindowSize = () => {
    if (window.innerWidth < 780) {
      this.setState({ screen: "mobile" });
    } else {
      this.setState({ screen: "laptop" });
    }
  };
  render() {
    return (
      <div className="spa-theme">
        <NavBar screen={this.state.screen} />
        <Header />
        <About />
        <Development />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
