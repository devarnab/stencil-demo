import { Component, OnInit } from '@angular/core';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss'],
})
export class Comp3Component implements OnInit {
  rand: string;
  constructor(private dummyService: DummyService) {}

  ngOnInit(): void {
    this.rand = this.dummyService.showRandom();
  }
}
