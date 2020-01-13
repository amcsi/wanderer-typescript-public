'use strict';
import { ctx } from '../src/index';

export class Character {
  image: HTMLImageElement;
  identity: string;
  posX: number;
  posY: number;
  hp: number;
  dp: number;
  sp: number;


  constructor(identity: string) {
    this.identity = identity;
    this.posX = 0;
    this.posY = 0;
    switch (identity) {
      case 'hero-down':
        this.image = document.getElementById('hero-down') as HTMLImageElement;
        console.log(this.image, this.posX, this.posY);
        break;
         case 'hero-up':
            this.image = document.getElementById('hero-up') as HTMLImageElement;
            break;
          case 'hero-left':
            this.image = document.getElementById('hero-left') as HTMLImageElement;
            break;
          case 'hero-right':
            this.image = document.getElementById('hero-right') as HTMLImageElement;
            break;
      case 'skeleton':
        this.image = document.getElementById('skeleton') as HTMLImageElement;
        break;
      case 'boss':
        this.image = document.getElementById('boss') as HTMLImageElement;
        break;
    }
  }

  getXPosition(): number {
    return this.posX;
  }

  getYPosition(): number {
    return this.posY;
  }

  moveForwardX(): void {
    this.posX += 1;
  }
  moveBackwardX(): void {
    this.posX -= 1;
  }

  moveForwardY(): void {
    this.posY += 1;
  }
  moveBackwardY(): void {
    this.posY -= 1;
  }

  drawCharacter(): void {
    ctx.drawImage(this.image, this.posX, this.posY);
  }

}