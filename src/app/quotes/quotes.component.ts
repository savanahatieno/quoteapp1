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
      '"Life is too short to spend it at war with yourself"',
      'Jake Pricely',
      new Date(2021, 1, 26)
    ),
    new Quote(
      'Ann Wangi',
      '"A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing."',
      'George Show',
      new Date(2020, 2, 26)
    ),
    new Quote(
      'Reddington',
      '"If you are working on something that you really care about, you dont have to be pushed."',
      'Paul',
      new Date(2005, 9, 14)
    ),
    new Quote(
      'Raymond',
      '"The way to get started is to quit talking and begin doing."',
      'Keen',
      new Date(2000, 5, 26)
    ),
    new Quote(
      'Lucille',
      '"If life were predictable it would cease to be life, and be without flavor."',
      'Joseph',
      new Date(1993, 2, 12)
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
