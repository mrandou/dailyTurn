import { Component, OnInit } from '@angular/core';
import { Pictures } from './models/items';
import { Player, Players, SQUADS } from './models/players';
import { ArcadeService } from './services/arcade.service';
import { AudioService } from './services/audio.service';
import { SelectionService } from './services/selection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public arcadePicture: string = Pictures.ARCADE;
  public randomPicture: string = Pictures.BOX;
  public allPlayers: Player[] = [];
  public players: Player[] = [];
  public currentSelectedPlayer?: Player;
  public nextSelectedPlayer?: Player;
  public coins: number = 0;
  public randomColor = '';
  public isLastPlayer: boolean = false;
  public squads = SQUADS;

  constructor(
    private audioService: AudioService,
    private selectionService: SelectionService,
    private arcadeService: ArcadeService
  ) {}

  /** Initialization */

  ngOnInit(): void {
    this.randomColor = this.arcadeService.getRandomArcadeColor();
    this.initPlayers();
  }

  private initPlayers(): void {
    this.allPlayers = Players;
    this.players = this.selectionService.initializePlayers();
  }

  public addCoin(): void {
    this.audioService.insertCoin();
    setTimeout(() => this.coins++, 1500);
  }

  /** Game */

  public startGame(): void {
    this.playJoysticAnimation();

    if (!this.canContinue()) return;

    this.newSelection();
  }

  private canContinue(): boolean {
    if (this.isLastPlayer) {
      this.isLastPlayer = false;
      this.currentSelectedPlayer = this.nextSelectedPlayer;
      this.nextSelectedPlayer = undefined;
      return false;
    }
    if (!this.players.length || this.coins < 1) {
      this.gameOver();
      return false;
    }
    return true;
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

  /** Player selection */

  private newSelection(): void {
    if (!this.currentSelectedPlayer)
      //In Game
      this.currentSelectedPlayer = this.getRandomPlayer();

    if (this.nextSelectedPlayer)
      this.currentSelectedPlayer = this.nextSelectedPlayer;

    if (!this.isLastPlayer) this.nextSelectedPlayer = this.getRandomPlayer();
  }

  public switchPlayer(index: number): void {
    const player = this.allPlayers[index];
    this.allPlayers[index].isAvailable = !player.isAvailable;
    if (this.players.includes(player))
      this.players = this.players.filter((p) => p != player);
    else this.players.push(player);
  }

  public selectSquad(squadNb: number): void {
    this.players = this.selectionService.selectPlayersFromSquad(squadNb);
    this.allPlayers.filter((p) => (p.isAvailable = this.players.includes(p)));
  }

  private getRandomPlayer(): Player {
    const player = this.selectionService.getRandomPlayer(this.players);
    this.removePlayer(player);
    if (!this.players.length) this.isLastPlayer = true;
    return player;
  }

  private removePlayer(player: Player): void {
    this.players = this.players.filter((p) => p != player);
    this.allPlayers[this.allPlayers.indexOf(player)].isAvailable = false;
  }

  /** Animation */

  public switchAudio(): void {
    this.audioService.switchAudio();
  }

  public changeAudioVolume(up: boolean) {
    this.audioService.changeAudioVolume(up);
  }

  private playJoysticAnimation(): void {
    this.arcadePicture = Pictures.ARCADE_ON;
    setTimeout(() => (this.arcadePicture = Pictures.ARCADE), 200);
  }
}
