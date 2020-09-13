import { Component, OnInit } from '@angular/core';
import { Comments } from '../classes/comments';
import { freeApiService } from '../services/freeapi.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
