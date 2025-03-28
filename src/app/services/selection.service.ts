import { Injectable } from '@angular/core';
import { Pictures } from '../models/items';
import { Player, Players } from '../models/players';
import { getRandomNumber } from '../utils/random';

@Injectable({
  providedIn: 'root',
})
export class SelectionService {
  constructor() {
    this.loadImages();
  }

  public initializePlayers(): Player[] {
    return Players.filter((p) => {
      p.picture = this.getPlayerPicture(p.name);
      return p.isAvailable;
    });
  }

  public getRandomPlayer(currentPlayers: Player[]): Player {
    const randomIndex = getRandomNumber(currentPlayers.length);
    const player = currentPlayers[randomIndex];
    return player;
  }

  private getPlayerPicture(player: string): string {
    return `assets/users/${player}.png`;
  }

  private loadImages(): void {
    const box = new Image();
    box.src = Pictures.BOX;
    for (let player of Players) {
      let img = new Image();
      img.onload = () => {
        console.log(`${img.src} loaded`);
      };
      img.src = this.getPlayerPicture(player.name);
    }
  }
}
