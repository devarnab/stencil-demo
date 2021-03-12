import { Component, OnInit } from '@angular/core';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
  providers: [DummyService],
})
export class Comp1Component implements OnInit {
  rand: string;
  constructor(private dummyService: DummyService) {}

  ngOnInit(): void {
    this.rand = this.dummyService.showRandom();
  }
}
