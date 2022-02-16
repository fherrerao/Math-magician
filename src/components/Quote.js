const quot = 'Mathematicians have tried in vain to this day to discover some order in the sequence of prime numbers, and we have reason to believe that it is a mystery into which the human mind will never penetrate.';
const author = '–  Leonhard Euler.';

const Quote = () => (
  <div>
    <blockquote>
      <h2>
        {quot}
        <span>{author}</span>
      </h2>
    </blockquote>
  </div>
);
export default Quote;
