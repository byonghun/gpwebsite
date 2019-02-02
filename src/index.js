import React, {Component} from "react";
import ReactDOM from 'react-dom';
import {Header} from './Components/Header';
import {Body} from './Components/Body';
import {Footer} from './Components/Footer';

class App extends Component {
  state={
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight
  }

  componentDidMount() {
    window.addEventListener("resize", this.windowResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.windowResize)
  }

  windowResize = ({currentTarget: {innerWidth, innerHeight}}) => {
    if(innerWidth !== this.state.innerWidth ||
      innerHeight !== this.state.innerHeight) {
      this.setState({innerWidth, innerHeight})
    }
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <Header
          width={this.state.innerWidth}
        />
        <Body
          width={this.state.innerWidth * .90}
          height={this.state.innerHeight - 170} // this height will be removed as we add onto the body
        />
        <Footer
          width={this.props.width}
        />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("App"));
