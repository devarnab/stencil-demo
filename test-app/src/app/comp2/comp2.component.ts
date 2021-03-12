import { Component, Host, OnInit } from '@angular/core';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component implements OnInit {
  rand: string;
  constructor(private dummyService: DummyService) {}

  ngOnInit(): void {
    this.rand = this.dummyService.showRandom();
  }
}
