/*'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillRect(10, 10, 100, 100);
*/
'use strict';
import { Map } from '../map/Map';
import { Character } from '../characters/Character';

// Acquire the rendering context
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
export const ctx = canvas.getContext('2d');


let theHero = new Character('hero-down');
let map = new Map(1);


// This function runs after the images are loaded
window.onload = () => {
  // Drawing a floor tile &hero's starting position
  map.generateMap(1);
  theHero.drawCharacter();
};

// Function to handle the key press events
function onKeyPress(event: any) {
  // Handle arrow keys
  let whatHappens;
  switch (event.keyCode) {
    case 37:
      if (theHero.posX > 0 && !map.getLevelMap()[theHero.posY][theHero.posX - 1]) {
        whatHappens = theHero.decreaseXPosition();
      }
      break;
    case 38:
      if (theHero.posY > 0 && !map.getLevelMap()[theHero.posY - 1][theHero.posX]) {
        whatHappens = theHero.decreaseYPosition();
      }
      break;
    case 39:
      if ((theHero.posX + 1) * 72 < canvas.width && !map.getLevelMap()[theHero.posY][theHero.posX + 1]) {
        whatHappens = theHero.increaseXPosition();
      }

      break;
    case 40:
      if ((theHero.posY + 1) * 72 < canvas.height && !map.getLevelMap()[theHero.posY + 1][theHero.posX]) {
        whatHappens = theHero.increaseYPosition();
      }

      break;
  }
  whatHappens;
  map.generateMap(1);
  theHero.drawCharacter();

}

// Listen on pressing the keys
document.body.addEventListener('keydown', onKeyPress);