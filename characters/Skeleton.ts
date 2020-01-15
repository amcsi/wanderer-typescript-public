'use strict';

import { Character } from './Character';

export class Skeleton extends Character {
  key: boolean;
  constructor(posX: number, posY: number, key: boolean = false) {
    super('skeleton', posX, posY);
    this.key = key;
    this.hp = 2 * this.getLevel() * this.d6();
    this.dp = this.getLevel() / 2 * this.d6();
    this.sp = this.getLevel() * this.d6();
  }

}