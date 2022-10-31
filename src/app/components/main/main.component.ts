import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AccountService } from 'src/app/core/services/account.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  checkSignIn(): boolean {
    let result
    
    this.accountService.user$.pipe(
      map(user => {
        return user ? true : false;
      })
    ).subscribe(response => {
      result = response;
    });
    
    return result;
  }
}
