'use strict';

import { Tile } from './Tile';

export class Wall extends Tile {

  constructor(imageSize: number = 72, isWall: number = 1) {
    super(imageSize, isWall);
  }
}