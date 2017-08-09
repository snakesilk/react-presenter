# Snakesilk React Presenter

A React component suitable for bundling games with React created using Snakesilk.

The component will facilitate the following behaviors:
* Add the game renderer to the DOM.
* Resize render to its DOM node parent.
* Provide pause and resume game state with an overlay.
* Provide and handle full screen toggle.


<img src="http://i.imgur.com/yHwNbqw.png" width="500" alt="Overlay active">
Screenshot showing active overlay.


## Quickstart.

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

## Props

### `game` *Game*
Instance of a Snakesilk Game object and is the game instance to attach to.

### `aspectRatio` *Number*
The aspect ratio given as a decimal number to render the game canvas in. Typical aspect ratios written like 4:3, 16:9 are fully synonymous with 4/3, 16/9 etc. Defaults to 16/9.

### `maxResolution` *Object*
Maximum resolution to draw game canvas for when the canvas becomes bigger than what performance allows to render. Given as an object with the following shape where each number is number of pixels.
```js
{
  x: 1280,
  y: 720,
}
```
Defaults to 1280x720 pixels.

### `fillWindow` *Bool*
Flag determining if the game render area fills the browser window by default or is contained in its parent element. Defaults to **false**.
