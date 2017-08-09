import React, { Component } from "react";
import PropTypes from "prop-types";
import { Game } from "@snakesilk/engine";

class Video extends Component {
  static propTypes = {
    game: PropTypes.instanceOf(Game),
    maxResolution: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }),
    aspectRatio: PropTypes.number.isRequired,
  };

  static defaultProps = {
    maxResolution: {
      x: 1280,
      y: 720,
    },
    aspectRatio: 16 / 9,
  };

  constructor(props) {
    super(props);

    this.updateScreen = this.updateScreen.bind(this);
  }

  componentDidMount() {
    this.node.appendChild(this.props.game.renderer.domElement);
    this.updateScreen();

    window.addEventListener("resize", this.updateScreen);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateScreen);
  }

  updateScreen() {
    const { game, maxResolution, aspectRatio } = this.props;

    const bounds = {
      height: this.node.clientHeight,
      width: this.node.clientWidth,
    };

    const size = {
      w: bounds.height * aspectRatio,
      h: bounds.width / aspectRatio,
    };

    if (size.h > bounds.height) {
      size.h = bounds.height;
    } else {
      size.w = bounds.width;
    }

    game.setResolution(
      Math.min(maxResolution.x, size.w),
      Math.min(maxResolution.y, size.h)
    );

    Object.assign(game.renderer.domElement.style, {
      height: size.h + "px",
      width: size.w + "px",
    });

    game.adjustAspectRatio();
  }

  render() {
    return (
      <div
        className="Video"
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
        ref={node => {
          this.node = node;
        }}
      />
    );
  }
}

export default Video;
