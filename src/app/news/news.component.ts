import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  News = [["https://colorlib.com/preview/theme/covid/images/hero_1.jpg", "30,Jul 2020", "How Coronavirus very Contiguous"], ["https://colorlib.com/preview/theme/covid/images/hero_2.jpg", "30,Jul 2020", "How Coronavirus very Contiguous"], ["https://colorlib.com/preview/theme/covid/images/hero_1.jpg", "30,Jul 2020", "How Coronavirus very Contiguous"]]

}
