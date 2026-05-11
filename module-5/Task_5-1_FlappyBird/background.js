"use strict";
import { TSprite } from "libSprite";

export class TBackground{
  #spriteBackground;
  #spriteGround;

  constructor(aSpcvs, aSPI){
    this.#spriteBackground = new TSprite(aSpcvs,aSPI.background,0,0);
    const groundPosY = aSPI.background.height - aSPI.ground.height;
    this.#spriteGround = new TSprite(aSpcvs, aSPI.ground, 0, groundPosY);
  }

  setDayNight(aIsDay){
    // Index 0 = Day, Index 1 = Night
    this.#spriteBackground.index = aIsDay ? 0 : 1;
  }

  drawBackground(){
    this.#spriteBackground.draw();
  }

  drawGround(){
    this.#spriteGround.draw();
  }

  animate(){
    const x = this.#spriteGround.x + (this.#spriteGround.width / 2);
    if(x < 5){
      this.#spriteGround.x = 0;  
    }else{
      this.#spriteGround.x--;
    }
  }
}
