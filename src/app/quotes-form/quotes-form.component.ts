import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css'],
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quote('', '', new Date);
  @Output() addQuote = new EventEmitter<Quote>();
  submitQuote() {
    this.addQuote.emit({ ...this.newQuote });
  }
  constructor() {}

  ngOnInit(): void {}
}
