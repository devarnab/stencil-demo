import { Injectable } from '@angular/core';

@Injectable()
export class DummyService {
  myRandom: number;
  constructor() {
    this.myRandom = Math.random() * 100;
  }
  showRandom(): string {
    return this.myRandom.toFixed(2);
  }
}
