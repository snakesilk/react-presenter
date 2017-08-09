# Snakesilk React Presenter

A React component suitable for bundling games with React created using Snakesilk.

The component will facilitate the following behaviors:
* Add the game renderer to the DOM.
* Resize render to its DOM node parent.
* Provide pause and resume game state with an overlay.
* Provide and handle full screen toggle.


<img src="http://i.imgur.com/yHwNbqw.png" width="500" alt="Overlay active">
Screenshot showing active overlay.


## Usage

* Install.
```bash
yarn add @snakesilk/react-presenter
```

* Require component.
```js
import Presenter from '@snakesilk/react-presenter';
```

* Setup game and render.
```jsx
import React, { Component } from "react";
import { Game } from "@snakesilk/engine";
import Screen from "@snakesilk/react-presenter";

// Setup a game instance.
const game = new Game();

class MyGame extends Component {
  render() {
    return (
      <div className="MyGame">
        <Presenter
          game={game}
          aspectRatio={16/9}
          maxResolution={{x: 1280, y: 720}}
        />
      </div>
    );
  }
}

export default MyGame;
```
