"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { startGame, resetGame, EGameStatus } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  #spGetReady;
  #spGameOver;
  #spMedal;
  #spFinalScore;
  #spHighScore;
  #highScore;
  #isMuted;

  constructor(aSpcvs, aSPI){
    this.#highScore = 0;
    this.#isMuted = false;

    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 270);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;
    this.#spGameScore.hidden = true;

    // "Get Ready" text (infoText index 0)
    this.#spGetReady = new TSprite(aSpcvs, aSPI.infoText, 190, 150);
    this.#spGetReady.index = 0;
    this.#spGetReady.hidden = true;

    // Game Over billboard
    this.#spGameOver = new TSprite(aSpcvs, aSPI.gameOver, 180, 120);
    this.#spGameOver.hidden = true;

    // Medal (positioned on top of the billboard)
    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 200, 175);
    this.#spMedal.hidden = true;

    // Score boards (hidden until game over)
    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 330, 175);
    this.#spFinalScore.visible = false;
    this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 330, 205);
    this.#spHighScore.visible = false;
  }

  incGameScore(aScore){
    this.#spGameScore.value += aScore;
  }

  setSoundMute(aIsMuted){
    this.#isMuted = aIsMuted;
    if(this.#sfRunning){
      if(aIsMuted){
        this.#sfRunning.stop();
      }else if(EGameStatus.state === EGameStatus.gaming){
        this.#sfRunning.play();
      }
    }
  }

  stopSound(){
    if(this.#sfRunning){
      this.#sfRunning.stop();
    }
  }

  showGameOver(){
    // Hide in-game UI
    this.#spGetReady.hidden = true;
    this.#spGameScore.hidden = true;

    // Show game over billboard and play button
    this.#spGameOver.hidden = false;
    this.#spPlayBtn.hidden = false;

    // High score logic
    if(this.#spGameScore.value > this.#highScore){
      this.#highScore = this.#spGameScore.value;
    }

    // Show final score and high score
    this.#spFinalScore.value = this.#spGameScore.value;
    this.#spFinalScore.visible = true;
    this.#spHighScore.value = this.#highScore;
    this.#spHighScore.visible = true;

    // Medal logic based on score
    this.#spMedal.hidden = false;
    if(this.#spGameScore.value >= 10){
      this.#spMedal.index = 1; // Gold
    }else if(this.#spGameScore.value >= 5){
      this.#spMedal.index = 2; // Silver
    }else if(this.#spGameScore.value >= 3){
      this.#spMedal.index = 3; // Bronze
    }else{
      this.#spMedal.hidden = true; // No medal
    }
  }

  draw(){
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
    this.#spGetReady.draw();
    this.#spGameOver.draw();
    this.#spMedal.draw();
    this.#spFinalScore.draw();
    this.#spHighScore.draw();
  }

  countDown(){
    this.#spCountDown.value--;
    if(this.#spCountDown.value > 0){
      setTimeout(this.countDown.bind(this), 1000);
    }else{
      this.#spCountDown.visible = false;
      this.#spGetReady.hidden = true;
      this.#sfRunning = new TSoundFile(fnRunning);
      if(!this.#isMuted){
        this.#sfRunning.play();
      }
      startGame();
    }
  }

  spPlayBtnClick(){
    console.log("Click!");

    // If restarting after game over, reset the world first
    if(EGameStatus.state === EGameStatus.heroIsDead){
      resetGame();
      this.#spGameScore.value = 0;
      this.#spGameOver.hidden = true;
      this.#spMedal.hidden = true;
    }

    // Always hide score boards until game over
    this.#spFinalScore.visible = false;
    this.#spHighScore.visible = false;

    this.#spPlayBtn.hidden = true;
    this.#spTitle.hidden = true;
    this.#spGetReady.hidden = false;
    this.#spGameScore.hidden = false;
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;
    this.#sfCountDown = new TSoundFile(fnCountDown);
    if(!this.#isMuted){
      this.#sfCountDown.play();
    }
    setTimeout(this.countDown.bind(this), 1000);
  }

}
