import React, { Component } from "react";
import PropTypes from "prop-types";
import { Game, Mouse } from "@snakesilk/engine";
import Button from "./Button";

import PlayIcon from "./image/play.svg";
import FullScreenIcon from "./image/fullscreen.svg";
import DeFullScreenIcon from "./image/defullscreen.svg";

class Overlay extends Component {
  static propTypes = {
    game: PropTypes.instanceOf(Game).isRequired,
    isFullScreen: PropTypes.bool.isRequired,
    onFullScreenChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.timer = null;

    this.state = {
      isPaused: true,
    };

    this.pause = this.pause.bind(this);
    this.resume = this.resume.bind(this);
    this.sluggishPause = Mouse.sluggish(this.pause, 20);
  }

  componentDidMount() {
    window.addEventListener("blur", this.pause);
    this.node.addEventListener("mousemove", this.sluggishPause);
  }

  componentWillUnmount() {
    window.removeEventListener("blur", this.pause);
    this.node.removeEventListener("mousemove", this.sluggishPause);
  }

  pause() {
    this.props.game.pause();
    this.setState({ isPaused: true });
  }

  resume() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.node.removeEventListener("mousemove", this.sluggishPause);
      this.node.addEventListener("mousemove", this.sluggishPause);
    }, 1000);
    this.props.game.resume();
    this.setState({ isPaused: false });
  }

  render() {
    const { isFullScreen, onFullScreenChange } = this.props;
    const { isPaused } = this.state;

    return (
      <div
        className="Overlay"
        style={{
          background: "rgba(0, 0, 0, 0.75)",
          display: "flex",
          flexFlow: "column",
          height: "100%",
          justifyContent: "space-around",
          opacity: isPaused ? 1 : 0,
          position: "absolute",
          transition: "opacity 0.3s",
          width: "100%",
        }}
        ref={node => (this.node = node)}
      >
        <div className="control">
          <section
            className="actions"
            style={{
              pointerEvents: isPaused ? "initial" : "none",
              textAlign: "center",
            }}
          >
            <Button onClick={this.resume} icon={PlayIcon}>
              Resume
            </Button>

            {isFullScreen
              ? <Button
                  onClick={() => onFullScreenChange(false)}
                  icon={DeFullScreenIcon}
                >
                  Shrink
                </Button>
              : <Button
                  onClick={() => onFullScreenChange(true)}
                  icon={FullScreenIcon}
                >
                  Fullscreen
                </Button>}
          </section>
        </div>
      </div>
    );
  }
}

export default Overlay;
