import React, { Component } from "react";
import PropTypes from "prop-types";
import FullScreen from "react-fullscreen";
import Overlay from "./Overlay";
import Video from "./Video";

class SnakesilkPresenter extends Component {
  static propTypes = {
    aspectRatio: PropTypes.any,
    fillWindow: PropTypes.bool.isRequired,
    maxResolution: PropTypes.any,
  };

  static defaultProps = {
    fill: true,
  };

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
    const { aspectRatio, fillWindow, game, maxResolution } = this.props;
    const { isFullScreen } = this.state;

    return (
      <div
        className="snakesilk-screen"
        style={{
          height: "100%",
          position: fillWindow ? "absolute" : "relative",
          width: "100%",
        }}
      >
        <FullScreen enabled={isFullScreen} onChange={this.toggleFullScreen}>
          <Overlay
            game={game}
            isFullScreen={isFullScreen}
            onFullScreenChange={this.toggleFullScreen}
          />
          <Video
            aspectRatio={aspectRatio}
            maxResolution={maxResolution}
            game={game}
          />
        </FullScreen>
      </div>
    );
  }
}

export default SnakesilkPresenter;
