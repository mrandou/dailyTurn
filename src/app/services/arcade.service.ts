import { Injectable } from '@angular/core';
import { ARCARDE_COLOR } from '../models/arcade';
import { getRandomNumber } from '../utils/random';

@Injectable({
  providedIn: 'root',
})
export class ArcadeService {
  constructor() {}

  public getRandomArcadeColor(): string {
    const colors = ARCARDE_COLOR[getRandomNumber(ARCARDE_COLOR.length)];
    this.changeBodyBackground(colors.background);
    return `hue-rotate(${colors.arcade}deg)`;
  }

  private changeBodyBackground(color: string): void {
    document.body.style.backgroundColor = color;
  }
}
