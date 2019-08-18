import { Component, OnInit, Input} from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    new Quote(1,'What you do not want done to yourself, do not do to others.','Confucius'),
    new Quote(2,'Happiness is not something ready-made. It comes from your own actions.','Dalai Lama'),
    new Quote(3,'Its a helluva start, being able to recognize what makes you happy.','Lucille Ball'),
    new Quote(4,'It is more fitting for a man to laugh at life than to lament over it.','Seneca'),
    new Quote(5,'The two enemies of human happiness are pain and boredom.','Arthur Schopenhauer'),
 
  ];

}
