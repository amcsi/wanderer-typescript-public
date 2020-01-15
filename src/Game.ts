'use strict';
import { Map } from '../map/Map';
import { Hero } from '../characters/Hero';
import { Boss } from '../characters/Boss';
import { Skeleton } from '../characters/Skeleton';
import { Character } from '../characters/Character';

export class Game {
  level: number;
  map: Map;
  characterList: Character[];

  xRandom: number;
  yRandom: number;

  constructor() {
    this.level = 1;
    this.map = new Map(this.level);
    this.map.generateMap(this.level);
    this.characterList = [];
    this.generateAllCharacterStartingPosition();
  }

  getCharacterList(): Character[] {
    return this.characterList;
  }

  getLevel(): number {
    return this.level;
  }

  generateAllCharacterStartingPosition(numberOfCharactersToGenerate: number = 5): void {
    for (let i: number = 0; i < numberOfCharactersToGenerate; i++) {
      if (i === 0) {
        this.characterList.push(new Hero());
      }
      else if (i === 1) {
        this.generateRandomPosition();
        while (this.xRandom === this.characterList[0].getXPosition() && this.yRandom === this.characterList[0].getYPosition() || this.map.getLevelMap()[this.yRandom][this.xRandom] === 1) {
          this.generateRandomPosition();
        }
        this.characterList.push(new Boss(this.xRandom, this.yRandom));
      } else if (i === 2) {
        this.generateRandomPosition();
        while (this.xRandom === this.characterList[0].getXPosition() && this.yRandom === this.characterList[0].getYPosition() || this.map.getLevelMap()[this.yRandom][this.xRandom] === 1 || this.xRandom === this.characterList[1].getXPosition() && this.yRandom === this.characterList[1].getYPosition()) {
          this.generateRandomPosition();
        }
        this.characterList.push(new Skeleton(this.xRandom, this.yRandom, true)); // giving the first skeleton the key
      }
      else if (i === 3) {
        this.generateRandomPosition();
        while (this.xRandom === this.characterList[0].getXPosition() && this.yRandom === this.characterList[0].getYPosition() || this.map.getLevelMap()[this.yRandom][this.xRandom] === 1 || this.xRandom === this.characterList[1].getXPosition() && this.yRandom === this.characterList[1].getYPosition() || this.xRandom === this.characterList[2].getXPosition() && this.yRandom === this.characterList[2].getYPosition()) {
          this.generateRandomPosition();
        }
        this.characterList.push(new Skeleton(this.xRandom, this.yRandom));
      }
      else if (i === 4) {
        this.generateRandomPosition();
        while (this.xRandom === this.characterList[0].getXPosition() && this.yRandom === this.characterList[0].getYPosition() || this.map.getLevelMap()[this.yRandom][this.xRandom] === 1 || this.xRandom === this.characterList[1].getXPosition() && this.yRandom === this.characterList[1].getYPosition() || this.xRandom === this.characterList[2].getXPosition() && this.yRandom === this.characterList[2].getYPosition() || this.xRandom === this.characterList[3].getXPosition() && this.yRandom === this.characterList[3].getYPosition()) {
          this.generateRandomPosition();
        }
        this.characterList.push(new Skeleton(this.xRandom, this.yRandom));
      }
    }
  }

  generateRandomPosition(): void {
    this.xRandom = Math.floor(Math.random() * 10);
    this.yRandom = Math.floor(Math.random() * 10);
  }

 moveToRandomPosition() {
    for (let i: number = 1; i < this.characterList.length; i++) {
      let x = this.characterList[i].getXPosition();
      let y = this.characterList[i].getYPosition();
      console.log('current tiles', x , y);

      let availableTiles: number[][] = [];
      let tilesToCheckBase: number[][] = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]];
      let tilesToChek: number[][] = [];
      console.log('sorrounding tiles', tilesToCheckBase);

      for (let j: number = 0; j < tilesToCheckBase.length; j++) {
        console.log(tilesToCheckBase[j][0]);
        console.log(tilesToCheckBase[j][1]);
        console.log('wall check', this.map.getLevelMap()[tilesToCheckBase[j][1]][tilesToCheckBase[j][0]]);
        console.log('wall check2',!(this.map.getLevelMap()[tilesToCheckBase[j][1]][tilesToCheckBase[j][0]]));
        console.log('FUTOK');
        if (!(this.map.getLevelMap()[tilesToCheckBase[j][1]][tilesToCheckBase[j][0]]) && tilesToCheckBase[j][0] > 0 && tilesToCheckBase[j][0] < 9 && tilesToCheckBase[j][1] > 0 && tilesToCheckBase[j][1] < 9) {
          tilesToChek.push(tilesToCheckBase[j]);
        }
      }
      console.log('filtered tiles to check', tilesToChek);
      for (let k: number = i + 1; k < this.characterList.length; k++) {
        let xOther: number = this.characterList[k].getXPosition();
        let yOther: number = this.characterList[k].getXPosition();
        console.log('xOther,yOther', xOther,yOther);
        for (let m: number = 0; m < tilesToChek.length; m++) {
          if (xOther !== tilesToChek[m][0] && yOther !== tilesToChek[m][1]) {
            availableTiles.push(tilesToChek[m]);
          }
        }
      }
      console.log('available tiles', availableTiles);
      let randomlyChosenTile: number[] = availableTiles[Math.floor(Math.random() * availableTiles.length + 1)];
      console.log('randomly chosen file', randomlyChosenTile);
      this.characterList[i].setXPosition(randomlyChosenTile[0]);
      this.characterList[i].setYPosition(randomlyChosenTile[1]);
    }
  }
}