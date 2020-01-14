'use strict';

import { Character } from './Character';

export class Hero extends Character {
  constructor(imageReference: string = 'hero-down') {
    super(imageReference);
    this.posX = 0;
    this.posY = 0;
    this.hp = 20 + 6 * this.d6();
    this.dp = 2 + this.d6();
    this.sp = 5 + this.d6();
  }

}