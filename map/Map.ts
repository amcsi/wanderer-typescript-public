'use strict';

import { Tile } from './Tile';
import { ctx } from '../src/index';

export class Map {
  mapMatrix: number[][];
  level: number;

  constructor(level: number) {
    this.level = level;
    this.generateMap(level);
  }

  getLevelNumber(): number {
    return this.level;
  }

  getLevelMap(level: number) { // 0 == floor, 1 == wall
    switch (level) {
      case 1:
        this.mapMatrix = [
          [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 1, 0, 1, 1, 0],
          [0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
          [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
          [1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
          [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
          [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
          [0, 0, 0, 0, 0, 1, 1, 0, 1, 0],
          [0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
          [0, 0, 0, 1, 0, 1, 1, 0, 0, 0]
        ];
        break;
      case 2:
        //valamilyentérkép
        break;
    }
  }

  generateMap(level: number) {
    this.getLevelMap(level);
    for (let j: number = 0; j < this.mapMatrix.length; j++) {
      for (let i: number = 0; i < this.mapMatrix[j].length; i++) {
        if (this.mapMatrix[j][i]) {
          let tile = new Tile(72, this.mapMatrix[i][j]);
          ctx.drawImage(tile.getPath(), j * tile.getImageSize(), i * tile.getImageSize());
        } else {
          let tile = new Tile(72, this.mapMatrix[i][j]);
          ctx.drawImage(tile.getPath(), j * tile.getImageSize(), i * tile.getImageSize());
        }
      }
    }
  }

}

