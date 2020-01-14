'use strict';

import { Character } from './Character';

export class Boss extends Character {
  constructor(posX: number, posY: number) {
    super('boss', posX, posY);
    this.hp = 2 * this.getLevel() * this.d6() + this.d6();
    this.dp = this.getLevel()*this.d6()/2 + this.d6();
    this.sp = this.getLevel()*this.d6() + this.getLevel() ;
  }

}