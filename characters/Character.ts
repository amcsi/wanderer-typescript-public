'use strict';
import { ctx } from '../src/index';
import { Map } from '../map/Map';
import { Hero } from './Hero';
import { Boss } from './Boss';
import { Skeleton } from './Skeleton';

export class Character {
  level: number;
  image: HTMLImageElement;
  imageReference: string;
  posX: number;
  posY: number;
  hp: number;
  dp: number;
  sp: number;

  constructor(imageReference: string, posX: number = 0, posY: number = 0) {
    this.level = 1;
    this.posX = posX;
    this.posY = posY;
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
  setXPosition(pos: number): void {
    this.posX = pos;
  }

  setYPosition(pos: number): void {
    this.posY = pos;
  }

  decreaseXPosition(): void {
    this.posX -= 1;
  }

  increaseXPosition(): void {
    this.posX += 1;
  }

  decreaseYPosition(): void {
    this.posY -= 1;
  }

  increaseYPosition(): void {
    this.posY += 1;
  }

  setImage(ref: string) {
    this.imageReference = ref;
    this.image = document.getElementById(ref) as HTMLImageElement;
  }

  drawCharacter(): void {
    ctx.drawImage(this.image, this.posX * 72, this.posY * 72);
  }

  getHp(): number {
    return this.hp;
  }
  getDp(): number {
    return this.dp;
  }
  getSp(): number {
    return this.sp;
  }
  getLevel() {
    return this.level;
  }

  d6(): number {
    return Math.floor(Math.random() * 7);
  }

}