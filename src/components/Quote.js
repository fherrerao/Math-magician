import './quote.css';

const quot = 'Mathematicians have tried in vain to this day to discover some order in the sequence of prime numbers, and we have reason to believe that it is a mystery into which the human mind will never penetrate.';
const author = '–  Leonhard Euler.';

const Quote = () => (
  <div className="block-container">
    <blockquote className="block">
      <h3>
        {quot}
      </h3>
      <h2>{author}</h2>
    </blockquote>
  </div>
);
export default Quote;
