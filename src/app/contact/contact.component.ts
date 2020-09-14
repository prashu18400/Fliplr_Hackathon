import { Component, OnInit } from '@angular/core';
import { Contacts } from '../classes/contacts';
import { freeApiCont } from '../services/freeApiContacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lstcomments: Contacts[];
  constructor(private _freeapi: freeApiCont) { }
  ngOnInit() {
    this._freeapi.getcontacts()
      .subscribe(
        data => {
          this.lstcomments = data.data.contacts.regional;
          console.log(this.lstcomments);
        }
      );
  }


}
