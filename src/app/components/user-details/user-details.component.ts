import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.less'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private _activatedRouteSnapshot: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    // const id = this._activatedRouteSnapshot.snapshot.params['id'];
    // if (!GuidHelper.isGuid(id)) {
    //   this._router.navigateByUrl(ComponentRoute.main);
    // }
  }
}
