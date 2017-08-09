import React, { Component } from "react";
import FullScreen from "react-fullscreen";
import Overlay from "./Overlay";
import Video from "./Video";

class SnakesilkScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFullScreen: false,
    };

    this.toggleFullScreen = this.toggleFullScreen.bind(this);
  }

  toggleFullScreen(isFullScreen) {
    this.setState({ isFullScreen });
  }

  render() {
    const { isFullScreen } = this.state;

    return (
      <div
        className="snakesilk-screen"
        style={{ height: "100%", width: "100%" }}
      >
        <FullScreen enabled={isFullScreen} onChange={this.toggleFullScreen}>
          <Overlay
            game={this.props.game}
            isFullScreen={isFullScreen}
            onFullScreenChange={this.toggleFullScreen}
          />
          <Video game={this.props.game} />
        </FullScreen>
      </div>
    );
  }
}

export default SnakesilkScreen;
