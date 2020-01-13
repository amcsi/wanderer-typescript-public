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

// This function runs after the images are loaded
window.onload = () => {
  // Drawing a floor tile &hero's starting position
  (new Map(1));
  (new Character('hero-down').drawCharacter());

};

// Function to handle the key press events
function onKeyPress(event: any) {
  // Handle arrow keys
  switch (event.keyCode) {
    case 37:
      alert('left');
      break;
    case 38:
      alert('up');
      break;
    case 39:
      alert('right');
      break;
    case 40:
      alert('down');
      break;
  }
}

// Listen on pressing the keys
document.body.addEventListener('keydown', onKeyPress);