'use strict';

import { Character } from './Character';

export class Skeleton extends Character {
  constructor(posX: number, posY: number) {
    super('skeleton', posX, posY);
    this.hp = 2 * this.getLevel() * this.d6();
    this.dp = this.getLevel() / 2 * this.d6();
    this.sp = this.getLevel() * this.d6();
  }

}