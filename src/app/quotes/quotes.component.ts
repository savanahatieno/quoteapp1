import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      'Lucile Myers',
      '"Life is too short to spend it at war with yourself."',
      'Jake Pricely',
      new Date(2021, 4, 26)
    ),
    new Quote(
      'Ann Wangui',
      '"If your working on something that your really care about, you dont have to be pushed."',
      'Clement Ross',
      new Date(2020, 10, 29)
    ),
    new Quote(
      'Annah',
      '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
      'Nelson Mandela',
      new Date(2009, 4, 26)
    ),
    new Quote(
      'Annah',
      '"You learn more from failure that from success."',
      'Lesly Brook',
      new Date(1958, 1, 2)
    ),
    new Quote(
      'John',
      '"If life were predictable it would cease to be life, and be without flavor."',
      'Raymond Reddington',
      new Date(1941, 9, 09)
    ),
  ];
  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    // quote.id = quoteLength + 1;
    quote.postDate = new Date(quote.postDate);
    this.quotes.unshift(quote);
  }
  upVote(index: number) {
    this.quotes[index].upVotes += 1;
  }
  downVote(index: number) {
    this.quotes[index].downVotes += 1;
  }
  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete this quote?`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
