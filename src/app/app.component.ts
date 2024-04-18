import { Component } from '@angular/core';
import { ARCARDE_COLOR } from './models/arcade';
import { Pictures } from './models/items';
import { Player, Players } from './models/players';
import { AudioService } from './services/audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public arcadePicture: string = Pictures.ARCADE;
  public randomPicture: string = Pictures.BOX;
  public allPlayers: Player[] = [];
  public players: Player[] = [];
  public currentSelectedPlayer?: Player;
  public nextSelectedPlayer?: Player;
  public coins: number = 0;
  public randomColor = "";
  public isLastPlayer: boolean = false;

  constructor(private audioService: AudioService) {
    this.randomColor = this.getRandomArcadeColor();
    this.initPlayers();
    this.loadImages();
  }

  private getRandomArcadeColor(): string {
    const number = ARCARDE_COLOR[this.getRandomNumber(ARCARDE_COLOR.length)];
    return `hue-rotate(${number}deg)`
  }

  private initPlayers(): void {
    this.allPlayers = Players;
    this.players = this.allPlayers.filter(p => {
      p.picture = this.getPlayerPicture(p.name);
      return p.isAvailable;
    });
  }

  public startGame(): void {
    this.playJoysticAnimation();

    if (!this.canContinue()) return;

    this.startNewSelection();
  }

  private canContinue(): boolean {
    if (this.isLastPlayer)
    {
      this.isLastPlayer = false;
      this.currentSelectedPlayer = this.nextSelectedPlayer;
      this.nextSelectedPlayer = undefined;
      return false;
    }
    if (!this.players.length || this.coins < 1)
    {
      this.gameOver();
      return false
    }
    return true;
  }

  private startNewSelection(): void {
    if (!this.currentSelectedPlayer) //In Game
      this.currentSelectedPlayer = this.getRandomPlayer();

    
    if (this.nextSelectedPlayer)
      this.currentSelectedPlayer = this.nextSelectedPlayer;

    if (!this.isLastPlayer)
      this.nextSelectedPlayer = this.getRandomPlayer();
  }

  private getRandomPlayer(): Player {
    const randomIndex = this.getRandomNumber(this.players.length);
    const player = this.players[randomIndex];
    this.removePlayer(player);
    if (!this.players.length)
      this.isLastPlayer = true;
    return player;
  }

  public switchPlayer(index: number): void {
    const player = this.allPlayers[index];
    this.allPlayers[index].isAvailable = !player.isAvailable;
    if (this.players.includes(player))
      this.players = this.players.filter(p => p != player);
    else
      this.players.push(player);
  }

  public addCoin(): void {
    this.audioService.insertCoin();
    setTimeout(() => this.coins++, 1500);
  }

  public switchAudio(): void {
    this.audioService.switchAudio();
  }

  public changeAudioVolume(up: boolean) {
    this.audioService.changeAudioVolume(up);
  }

  private playJoysticAnimation(): void {
    this.arcadePicture = Pictures.ARCADE_ON;
    setTimeout(() => this.arcadePicture = Pictures.ARCADE, 200);
  }

  private removePlayer(player: Player): void {
    this.players = this.players.filter(p => p != player);
    this.allPlayers[this.allPlayers.indexOf(player)].isAvailable = false;
  }

  private getPlayerPicture(player: string): string {
    return `assets/users/${player}.png`;
  }

  private getRandomNumber(max: number) {
     return Math.floor(Math.random() * max);
  }

  private gameOver(): void {
    this.coins = 0;
    this.isLastPlayer = false;
    this.audioService.playGameOver();
    this.currentSelectedPlayer = undefined;
    this.nextSelectedPlayer = undefined;
    this.initPlayers();
    this.randomPicture = Pictures.BOX;
  }

  private loadImages(): void {
    const box = new Image();
    box.src = Pictures.BOX;
    for (let player of this.allPlayers) {
      let img = new Image();
      img.onload = () => {
        console.log(`${img.src} loaded`)
      }
      img.src = this.getPlayerPicture(player.name);
    }
  }
  
}
