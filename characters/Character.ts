'use strict';
import { ctx } from '../src/index';

export class Character {
  image: HTMLImageElement;
  imageReference: string;
  posX: number;
  posY: number;
  currentPosition: number[][];
  hp: number;
  dp: number;
  sp: number;


  constructor(imageReference: string) {
    this.imageReference = imageReference;
    switch (imageReference) {
      case 'hero-down':
        this.image = document.getElementById('hero-down') as HTMLImageElement;
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

  decreaseXPosition(): void{
    this.posX -= 1;
  }

  increaseXPosition(): void{
    this.posX += 1;
  }

  decreaseYPosition(): void{
    this.posY -= 1;
  }

  increaseYPosition(): void{
    this.posY += 1;
  }

  setImage(ref: string){
    this.imageReference = ref;
    this.image = document.getElementById(ref) as HTMLImageElement;
  }

  drawCharacter(): void {
    ctx.drawImage(this.image, this.posX*72, this.posY*72);
  }

}