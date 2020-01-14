'use strict';

import { Character } from './Character';

export class Hero extends Character {
  constructor(imageReference: string = 'hero-down') {
    super(imageReference);
    this.posX = 0;
    this.posY = 0;
  }

}