'use strict';
import { Game } from './Game';
// Acquire the rendering context
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
export const ctx = canvas.getContext('2d');

let game = new Game();
let hero = game.characterList[0];

// This function runs after the images are loaded
window.onload = () => {
  game.map.generateMap(game.getLevel());
  game.characterList.forEach(character => character.drawCharacter());
};

// Function to handle the key press events
function onKeyPress(event: any) {
  let whatHappens;
  switch (event.keyCode) {
    case 37:
      if (hero.posX > 0 && !game.map.getLevelMap()[hero.posY][hero.posX - 1]) {
        whatHappens = hero.decreaseXPosition();
        hero.setImage('hero-left');
      }
      break;
    case 38:
      if (hero.posY > 0 && !game.map.getLevelMap()[hero.posY - 1][hero.posX]) {
        whatHappens = hero.decreaseYPosition();
        hero.setImage('hero-up');
      }
      break;
    case 39:
      if ((hero.posX + 1) * 72 < canvas.width && !game.map.getLevelMap()[hero.posY][hero.posX + 1]) {
        whatHappens = hero.increaseXPosition();
        hero.setImage('hero-right');
      }
      break;
    case 40:
      if ((hero.posY + 1) * 72 < canvas.height && !game.map.getLevelMap()[hero.posY + 1][hero.posX]) {
        whatHappens = hero.increaseYPosition();
        hero.setImage('hero-down');
      }
      break;
  }
  whatHappens;
  game.map.generateMap(game.getLevel());
  hero.drawCharacter();

}

// Listen on pressing the keys
document.body.addEventListener('keydown', onKeyPress);