'use strict';

import { Character } from './Character';

export class Skeleton extends Character {
  constructor(posX: number, posY: number) {
    super('skeleton', posX, posY);
  }

}