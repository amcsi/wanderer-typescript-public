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
    this.characterList = [];
    this.generateStartingPosition();
    console.log(5, this.generateCondition(0));
    console.log(5, this.generateCondition(1));
    console.log(5, this.generateCondition(2));
    console.log(5, this.generateCondition(3));
    console.log(5, this.generateCondition(4));

  }

  getCharacterList(): Character[] {
    return this.characterList;
  }

  getLevel(): number {
    return this.level;
  }

  generateStartingPosition(numberOfCharactersToGenerate: number = 5): void {
    for (let i: number = 0; i < numberOfCharactersToGenerate; i++) {
      if (i === 0) {
        this.characterList.push(new Hero());
      }
      else if (i === 1) {
        this.generateRandomPosition();
        let condition = this.generateCondition(i);
        if (condition) {
          while (condition) {
            this.generateRandomPosition();
          }
          this.characterList.push(new Boss(this.xRandom, this.yRandom));
        } else {
          this.generateRandomPosition();
          let condition = this.generateCondition(i);
          if (condition) {
            while (condition) {
              this.generateRandomPosition();
            }
            this.characterList.push(new Skeleton(this.xRandom, this.yRandom));
          }
        }
      }
    }
  }

  generateRandomPosition(): void {
    this.xRandom = Math.floor(Math.random() * 10);
    this.yRandom = Math.floor(Math.random() * 10);
  }

  generateCondition(i: number): boolean {
    function counter(i: number): boolean {
      if (i === 1) {
        return (this.map.getLevelMap()[this.yRandom][this.xRandom] === 1);
      } else {
        return this.xRandom === this.characterList[i - 1].getXPosition() && this.yRandom === this.characterList[i - 1].getYPosition() || this.generateCondition(i - 1);
      }
    }
    return counter(i);
  }

  /*generateStartingPosition(numberOfCharactersToGenerate: number = 5): void {
    for (let i: number = 0; i < numberOfCharactersToGenerate; i++) {
      
      if (i === 0) {
        this.characterList.push(new Hero());
      }
      else if (i === 1) {
        this.generateRandomPosition();
        if ((this.xRandom === 0 && this.yRandom === 0) || (this.map.getLevelMap()[this.yRandom][this.xRandom] === 1)) {
          while ((this.xRandom === 0 && this.yRandom === 0) || (this.map.getLevelMap()[this.yRandom][this.xRandom] === 1)) {
            this.generateRandomPosition();
          }
          let newBoss: Character = new Boss(this.xRandom, this.yRandom);
          this.characterList.push(newBoss);
        } else {
          let newBoss: Character = new Boss(this.xRandom, this.yRandom);
          this.characterList.push(newBoss);
         // this.characterList.push(new Boss(this.xRandom, this.yRandom));
        }
      }
      else {
        console.log(i);
        this.generateRandomPosition();
        console.log(this.characterList[i-1]);
        if ((this.xRandom === this.characterList[i - 1].getXPosition() && this.yRandom === this.characterList[i - 1].getYPosition()) || (this.map.getLevelMap()[this.yRandom][this.xRandom] === 1)) {
          while ((this.xRandom === this.characterList[i - 1].getXPosition() && this.yRandom === this.characterList[i - 1].getYPosition()) || (this.map.getLevelMap()[this.yRandom][this.xRandom] === 1)) {
            this.generateRandomPosition();

          }
          this.characterList.push(new Skeleton(this.xRandom, this.yRandom));
        } else {
          this.characterList.push(new Skeleton(this.xRandom, this.yRandom));
        }
      }
    }
  }*/

}