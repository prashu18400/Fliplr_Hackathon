import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MedCol } from '../classes/medcol';
import { MedColStu } from '../services/freemed';
import { medsta } from '../classes/medsta';
import { freeApiHos } from '../services/freehosp';
import { hospital } from '../classes/hosp';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent implements OnInit {

  constructor(private _freehos: freeApiHos) { };
  lstcomments: hospital[];

  ngOnInit() {

    this._freehos.gethos()
      .subscribe(
        data => {
          this.lstcomments = data.data.regional;
        }
      );
  }

}
