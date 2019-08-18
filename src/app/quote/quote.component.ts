import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, name:'What you do not want done to yourself, do not do to others.',description:' Confucius'},
    {id:2,name:'Happiness is not something ready-made. It comes from your own actions.',description:'Dalai Lama'},
    {id:3,name:'Its a helluva start, being able to recognize what makes you happy.',description:' Lucille Ball'},
    {id:4,name:'It is more fitting for a man to laugh at life than to lament over it.',description:'Seneca'},
    {id:5,name:'The two enemies of human happiness are pain and boredom.',description:'Arthur Schopenhauer'},
 
  ];
  constructor() { }

  ngOnInit() {
  }

}
