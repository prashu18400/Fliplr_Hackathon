import { Component, OnInit } from '@angular/core';
import { Comments } from '../classes/comments';
import { freeApiService } from '../services/freeapi.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  lstcomments: Comments[];
  heros = ["prashu"];
  constructor(private _freeapi: freeApiService) { }
  ngOnInit() {
    this._freeapi.getcomments()
      .subscribe(
        data => {
          this.lstcomments = data.data.notifications;
          console.log(this.lstcomments);
        }
      );
  }
}
