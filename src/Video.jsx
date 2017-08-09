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
    this.props.game.attachToElement(this.node);
    this.updateScreen();

    window.addEventListener("resize", this.updateScreen);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateScreen);
  }

  updateScreen() {
    const { game, maxResolution, aspectRatio } = this.props;

    const bounds = {
      height: this.node.parentNode.clientHeight,
      width: this.node.parentNode.clientWidth,
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

    Object.assign(this.node.style, {
      height: size.h + "px",
      width: size.w + "px",
    });

    game.adjustAspectRatio();
    game.setResolution(
      Math.min(maxResolution.x, size.w),
      Math.min(maxResolution.y, size.h)
    );

    Object.assign(game.renderer.domElement.style, {
      height: "100%",
      width: "100%",
    });
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
      >
        <div
          className="screen"
          ref={node => {
            this.node = node;
          }}
        />
      </div>
    );
  }
}

export default Video;
