import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-conversation-popup',
  templateUrl: './new-conversation-popup.component.html',
  styleUrls: ['./new-conversation-popup.component.css']
})
export class NewConversationPopupComponent implements OnInit {
  private _valueChangeTimeout: NodeJS.Timeout;

  @Input() friends;

  constructor() { }

  ngOnInit(): void {
  }
  
  valueChange() {
    clearTimeout(this._valueChangeTimeout);
    this._valueChangeTimeout = setTimeout(() => {
      console.log("nigger");
    }, 1000)
  }

}
