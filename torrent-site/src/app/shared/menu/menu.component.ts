import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 @Output() selectedPage: EventEmitter<string> = new EventEmitter();
 @Input() currentPage: string = '';
 @Output() NavBarClose: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  menuSwitch()
  {
    this.selectedPage.emit(this.currentPage);
  }

  close()
  {
    this.NavBarClose.emit(true);
  }
}
