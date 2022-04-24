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

document.querySelector("form").addEventListener("change", (e) => {
  animation.setMethod(e.target.id);
});
