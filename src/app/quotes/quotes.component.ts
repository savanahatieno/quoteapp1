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
      'Annah',
      '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
      new Date(2021, 1, 26)
    ),
    new Quote(
      'Annah',
      '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
      new Date(2021, 1, 26)
    ),
    new Quote(
      'Annah',
      '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
      new Date(2021, 1, 26)
    ),
    new Quote(
      'Annah',
      '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
      new Date(2021, 1, 26)
    ),
    new Quote(
      'Annah',
      '"The greatest glory in living lies not in never falling, but in rising every time we fall." -Nelson Mandela',
      new Date(2021, 1, 26)
    ),
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.postDate) - <any>new Date(a.postDate);
    });
  }  
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
