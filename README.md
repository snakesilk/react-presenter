# Snakesilk React Presenter

A React component suitable for bundling games with React created using Snakesilk.

The component will facilitate the following behaviors:
* Add the game renderer to the DOM.
* Resize render to its DOM node parent.
* Provide pause and resume game state with an overlay.
* Provide and handle full screen toggle.

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
        <Presenter game={game}/>
      </div>
    );
  }
}

export default MyGame;
```
