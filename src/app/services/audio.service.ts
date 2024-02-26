import { Injectable } from '@angular/core';
import { AmbiantMusic, Sounds } from '../models/sounds';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private selectionAudio: HTMLAudioElement;
  private ambiantAudio?: HTMLAudioElement;

  constructor() { 
    this.selectionAudio = this.loadAudio(Sounds.PLAYER_SELECTION);
  }

  public playSelection(): void {
    this.selectionAudio.play();
  }

  public insertCoin(): void {
    this.loadAudio(Sounds.COIN).play();
    if (!this.ambiantAudio || this.ambiantAudio.ended)
      this.playAmbiantMusic();
  }

  public playGameOver(): void {
    this.loadAudio(Sounds.GAME_OVER).play();
  }

  public playSurprise(): void {
    this.loadAudio(Sounds.SURPRISE).play();
  }

  private playAmbiantMusic(): void {
    const random = Math.floor(Math.random() * 3)
    this.ambiantAudio = this.loadAudio(Object.values(AmbiantMusic)[random]);
    //  TO DO -> play at stat, play random song, play all sounds, loop 
    this.ambiantAudio.volume = 0.05;
    this.ambiantAudio.play();
  }

  private loadAudio(audioUrl: string): HTMLAudioElement {
    const audio = new Audio();
    audio.src = audioUrl;
    audio.load();
    return audio;
  }
}
