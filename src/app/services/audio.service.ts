import { Injectable } from '@angular/core';
import { AmbiantMusic, Sounds } from '../models/sounds';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private selectionAudio: HTMLAudioElement;
  private ambiantAudio?: HTMLAudioElement;
  private isMuted: boolean = false;
  private volume: number = 0.025;

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
    this.ambiantAudio.volume = this.volume;
    this.ambiantAudio.play();
  }

  private loadAudio(audioUrl: string): HTMLAudioElement {
    const audio = new Audio();
    audio.src = audioUrl;
    audio.load();
    return audio;
  }

  public changeAudioVolume(up: boolean): void {
    up ? this.volume += 0.025
       : this.volume -= 0.025
    if (this.ambiantAudio)
      this.ambiantAudio.volume = this.volume;
  }

  public switchAudio() {
    this.isMuted = !this.isMuted;
    this.isMuted && this.ambiantAudio ? this.ambiantAudio.volume = 0 : this.ambiantAudio!.volume = this.volume / 2;
  }
}
