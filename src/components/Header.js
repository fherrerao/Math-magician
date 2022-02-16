import { Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="container">
      <div className="header">
        <h1>Math Magician</h1>
        <nav className="nav">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/calculator">Calculator</Link>
          <Link className="link" to="/quote">Quote</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
