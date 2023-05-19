import { MessageAuthorPipe } from './message-author.pipe';

describe('MessageAuthorPipe', () => {
  it('create an instance', () => {
    const pipe = new MessageAuthorPipe();
    expect(pipe).toBeTruthy();
  });
});
