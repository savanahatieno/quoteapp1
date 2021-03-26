import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css'],
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quote(0, '', '');
  @Output() addQuote = new EventEmitter<Quote>();
  constructor() {}

  ngOnInit(): void {}
}
