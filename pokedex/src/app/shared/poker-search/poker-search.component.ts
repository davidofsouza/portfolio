import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poker-search',
  templateUrl: './poker-search.component.html',
  styleUrls: ['./poker-search.component.scss']
})
export class PokerSearchComponent implements OnInit {
  @Output() public emitSearch: EventEmitter<string> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  public search(value: string){
    this.emitSearch.emit(value)
  }
}
