'use strict';

import { Character } from './Character';

export class Boss extends Character {
  constructor(posX: number, posY: number) {
    super('boss', posX, posY);
  }

}