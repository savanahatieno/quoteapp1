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
      1,
      'Rick Falkvinge',
      'Bitcoin will do to banks what email did to the postal industry'
    ),
  ];
  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote);
  }
  upVote(index: number) {
    this.quotes[index].upVotes += 1;
  }
  downVote(index: number) {
    this.quotes[index].downVotes += 1;
  }
  deleteQuote(index: number) {
    this.quotes.splice(index, 1);
  }
  constructor() {}

  ngOnInit(): void {}
}
