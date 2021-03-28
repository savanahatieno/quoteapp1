import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css'],
})
export class QuoteDetailComponent implements OnInit {
  downVote!: number;
  upVote!: number;
  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() {
    this.upVote = 0;
    this.downVote = 0;
  }
  voteUp() {
    this.upVote += 1;
  }
  voteDown() {
    this.downVote += 1;
  }

  ngOnInit(): void {}
}
