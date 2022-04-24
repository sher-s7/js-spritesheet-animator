# js-spritesheet-animator

# Usage
```js
import animateSpritesheet, { METHODS } from "./animateSpritesheet.js";
const spritesheet = document.getElementById("spritesheet");
const path = "./spritesheet.png";
const mobile_path = "./spritesheet_small.png";
const sprite_width = 500;
const sprite_height = 500;
const sprite_width_mobile = 300;
const sprite_height_mobile = 300;
const sprites_per_line = 7;
const number_of_sprites = 47;
const method = METHODS.auto;

const settings = {
  path,
  mobile_path,
  method,
  sprite_width,
  sprite_height,
  sprite_width_mobile,
  sprite_height_mobile,
  sprites_per_line,
  number_of_sprites,
};

const animation = animateSpritesheet(spritesheet, settings);
```

## `animateSpritesheet`
| Parameter  | Default              | Type          | Description                                             |
|------------|----------------------|---------------|---------------------------------------------------------|
| `element`  | null                 | `HTMLElement` | The target element you want to display the animation in |
| `settings` | see `settings` below | `Object`      | Settings for initializing the animation                 |

### `settings`
| Field                  | Default  | Type                | Description                                                                                     |
|------------------------|----------|---------------------|-------------------------------------------------------------------------------------------------|
| `path`                 | null     | `string`            | Path to the spritesheet                                                                         |
| `mobile_path`          | null     | `string (optional)` | Path to the mobile version of the spritesheet (should be the same spritesheet, but scaled down) |
| `method`               | `"auto"` | `string`            | `"auto"`: autoplay the animation<br>`"onScroll"`: animate on scroll                             |
| `sprite_width`         | null     | `number`            | Width of an individual sprite                                                                   |
| `sprite_height`        | null     | `number`            | Height of an individual sprite                                                                  |
| `sprite_width_mobile`  | null     | `number`            | Width of an individual sprite in the mobile spritesheet (if provided)                           |
| `sprite_height_mobile` | null     | `number`            | Height of an individual sprite in the mobile spritesheet (if provided)                          |
| `sprites_per_line`     | null     | `number`            | Number of sprites in each line of the spritesheet                                               |
| `number_of_sprites`    | null     | `number`            | Total number of sprites in the spritesheet                                                      |
| `fps`                  | 24       | `number`            | Frames per second of the animation                                                              |
| `onScrollSensitivity`  | 0.1      | `number`            | Number greater than 0. Increase this if you want the animation to play faster on scroll         |
