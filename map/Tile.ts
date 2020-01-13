'use strict';

export class Tile {
  imagePath: HTMLImageElement;
  imageSize: number;
  isWall: number;

  constructor(imageSize: number = 72, isWall: number) {
    this.imageSize = imageSize;
    this.isWall = isWall;
    if (isWall) {
      this.imagePath = document.getElementById('wall') as HTMLImageElement;
    } else {
      this.imagePath = document.getElementById('floor') as HTMLImageElement;
    }
  }

  getPath(): HTMLImageElement {
    return this.imagePath;
  }

  getImageSize(): number {
    return this.imageSize;
  }

  isTileAWall(): number {
    return this.isWall;
  }
}