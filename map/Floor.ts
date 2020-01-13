'use strict';

import { Tile } from './Tile';

export class Wall extends Tile {

  constructor(imageSize: number = 72, isWall: number = 0) {
    super(imageSize, isWall);
  }
}