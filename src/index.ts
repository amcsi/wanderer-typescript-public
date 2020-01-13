/*'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillRect(10, 10, 100, 100);
*/
'use strict';
import { Map } from '../map/Map';
import { Character } from '../characters/Character';
import {Hero} from '../characters/Hero';

// Acquire the rendering context
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
export const ctx = canvas.getContext('2d');

let map = new Map(1);
let hero = new Hero('hero-down');

// This function runs after the images are loaded
window.onload = () => {
  // Drawing a floor tile & hero's starting position
  map.generateMap(1);
  hero.drawCharacter();
};

// Function to handle the key press events
function onKeyPress(event: any) {
  // Handle arrow keys
  let whatHappens;
  switch (event.keyCode) {
    case 37:
      if (hero.posX > 0 && !map.getLevelMap()[hero.posY][hero.posX - 1]) {
        whatHappens = hero.decreaseXPosition();
        hero.setImage('hero-left');
      }
      break;
    case 38:
      if (hero.posY > 0 && !map.getLevelMap()[hero.posY - 1][hero.posX]) {
        whatHappens = hero.decreaseYPosition();
        hero.setImage('hero-up');
      }
      break;
    case 39:
      if ((hero.posX + 1) * 72 < canvas.width && !map.getLevelMap()[hero.posY][hero.posX + 1]) {
        whatHappens = hero.increaseXPosition();
        hero.setImage('hero-right');
      }
      break;
    case 40:
      if ((hero.posY + 1) * 72 < canvas.height && !map.getLevelMap()[hero.posY + 1][hero.posX]) {
        whatHappens = hero.increaseYPosition();
        hero.setImage('hero-down');
      }
      break;
  }
  whatHappens;
  map.generateMap(1);
  hero.drawCharacter();

}

// Listen on pressing the keys
document.body.addEventListener('keydown', onKeyPress);