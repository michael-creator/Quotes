import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {id:1, name:'What you do not want done to yourself, do not do to others.',description:''},
    {id:2,name:'Happiness is not something ready-made. It comes from your own actions.',description:''},
    {id:3,name:'Its a helluva start, being able to recognize what makes you happy.',description:''},
    {id:4,name:'It is more fitting for a man to laugh at life than to lament over it.',description:''},
    {id:5,name:'The two enemies of human happiness are pain and boredom.',description:''},
 
  ];

}
