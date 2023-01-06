import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-conversation-popup',
  templateUrl: './new-conversation-popup.component.html',
  styleUrls: ['./new-conversation-popup.component.css']
})
export class NewConversationPopupComponent implements OnInit {
  private valueChangeTimeout: NodeJS.Timeout;

  constructor() { }

  ngOnInit(): void {
  }
  
  valueChange() {
    clearTimeout(this.valueChangeTimeout);
    this.valueChangeTimeout = setTimeout(() => {
      console.log("nigger");
    }, 1000)
  }

}
