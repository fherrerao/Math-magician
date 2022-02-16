import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div>
        <h1>Math Magician</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/calculator">Calculator</Link>
          <Link to="/quote">Quote</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
