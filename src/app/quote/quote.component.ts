import { Component, OnInit} from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,'What you do not want done to yourself, do not do to others.',' Confucius',new Date(2019,8,18)),
    new Quote(2,'Happiness is not something ready-made. It comes from your own actions.','Dalai Lama',new Date(2019,8,18)),
    new Quote(3,'Its a helluva start, being able to recognize what makes you happy.',' Lucille Ball',new Date(2019,8,18)),
    new Quote(4,'It is more fitting for a man to laugh at life than to lament over it.','Seneca',new Date(2019,8,18)),
    new Quote(5,'The two enemies of human happiness are pain and boredom.','Arthur Schopenhauer',new Date(2019,8,18)),
  ];
    toggleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
  
    addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id = quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
    }
    deleteQuote(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
  
        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }
  constructor() { }

  ngOnInit() {
  }

}
