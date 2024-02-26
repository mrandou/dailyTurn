import { Component } from '@angular/core';
import { Player, PlayersNames } from './models/players';
import { AudioService } from './services/audio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public arcadePicture: string = "assets/arcade-1.png";
  public randomPicture: string = "assets/item-box.gif";
  public selectedPicture?: string;
  public allPlayers: Player[] = [];
  public players: Player[] = [];
  private gameOn: boolean = false
  private selectedPlayer?: Player;;
  public coins: number = 0;

  constructor(private audioService: AudioService) {
    this.initPlayers();
  }

  private initPlayers(): void {
    this.allPlayers = [];
    PlayersNames.forEach(name => {
      this.allPlayers.push({ name, isAvailable: true, isOut: false });
    })
    this.players = this.allPlayers;
  }

  public startGame(): void {
    this.playJoysticAnimation();
    if (this.gameOn)
      return;
    if (!this.players.length || this.coins < 1)
    {
      this.gameOver()
      return ;
    }
    if (this.selectedPlayer)
      this.removePlayer(this.selectedPlayer)
    this.selectedPicture = "";
    this.gameOn = true;
    if (this.players.length === 1)
    {
      this.selectedPlayer = this.players[0];
      this.selectedPicture = this.getPlayerPicture(this.selectedPlayer.name);
      this.audioService.playSurprise();
      this.removePlayer(this.selectedPlayer)
      this.gameOn = false;
      return ;
    }
    this.playRandomSelectionAnimation();
    setTimeout(() => {
      this.gameOn = false;
      const randomIndex = this.getRandomNumber(this.players.length - 1);
      this.selectedPlayer = this.players[randomIndex];
      this.selectedPicture = this.getPlayerPicture(this.selectedPlayer.name);
    }, 3800);
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

  private playJoysticAnimation(): void {
    this.arcadePicture = "assets/arcade-2.png";
    setTimeout(() => this.arcadePicture = "assets/arcade-1.png", 200);
  }

  private playRandomSelectionAnimation(): void {
    let index = 0;
    this.audioService.playSelection();
    const interval = setInterval(() => {
      if (!this.gameOn)
        clearInterval(interval);
      this.randomPicture = this.getPlayerPicture(this.players[index].name);
      index++;
      if (index >= this.players.length)
        index = 0;
    }, 50);
  }

  private removePlayer(player: Player): void {
    this.players = this.players.filter(p => p != player);
    this.allPlayers[this.allPlayers.indexOf(player)].isOut = true;
  }

  private getPlayerPicture(player: string): string {
    return `assets/users/${player}.png`;
  }

  private getRandomNumber(max: number) {
     return Math.floor(Math.random() * max);
  }

  private gameOver(): void {
    this.coins = 0;
    this.audioService.playGameOver();
    this.initPlayers();
    this.selectedPlayer = undefined;
    this.selectedPicture = ""
    this.gameOn = false;
    this.randomPicture = "assets/item-box.gif"
  }

}
