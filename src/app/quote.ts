export class Quote {
  upVotes: number;
  downVotes: number;
  id!: number;
  completeDate!: Date;
  constructor(
    public name: string,
    public quote: string,
    public author: string,
    public postDate: Date
  ) {
    this.upVotes = 0;
    this.downVotes = 0;
  }
}

