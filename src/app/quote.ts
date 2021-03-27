export class Quote {
  upVotes: number;
  downVotes: number;
  constructor(
    public name: string,
    public quote: string,
    public postDate: Date
  ) {
    this.upVotes = 0;
    this.downVotes = 0;
  }
}
