import React, { Component } from "react";
import PropTypes from "prop-types";
import FullScreen from "react-full-screen";
import Overlay from "./Overlay";
import Video from "./Video";

class SnakesilkPresenter extends Component {
  static propTypes = {
    aspectRatio: PropTypes.any,
    fillWindow: PropTypes.bool.isRequired,
    maxResolution: PropTypes.any,
    videoOverlay: PropTypes.node,
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
        className="SnakesilkPresenter"
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
          >
            {this.props.children}
          </Overlay>

          <Video
            aspectRatio={aspectRatio}
            maxResolution={maxResolution}
            game={game}
          >
            {this.props.videoOverlay}
          </Video>
        </FullScreen>
      </div>
    );
  }
}

export default SnakesilkPresenter;
