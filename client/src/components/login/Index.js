import React from "react";
import "../../App.css";
import Login from './Login'; 
import Register from './Register'
import './style.css'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div style={{backgroundImage: `url("https://ae01.alicdn.com/kf/HTB1dtX6LYvpK1RjSZPiq6zmwXXaP/Newborn-Baby-Party-Theme-Photography-Background-Flower-Wall-Backdrop-Wedding-Photo-Studio-Vinyl-tlo-fotograficzne.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100vw", height: "100vh"}} className="App">
         <div className="footer">
        <p className="footer-note">Don’t have a wedding planner? Don’t worry, Bride<span className="line-through">zilla</span> got you covered. This app will make sure you don’t miss any step to have the wedding of your dream.</p>
      </div>
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login onLogin={this.props.onLogin} containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register onLogin={this.props.onLogin} containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default Index;