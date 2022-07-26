import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Accordion
      </Link>
      <Link href="/search" className="item">
        Search
      </Link>
      <Link href="/dropdown" className="item">
        Dropdown
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
      <Link href="/count" className="item">
        Count
      </Link>
      <Link href="/todo" className="item">
        Todo
      </Link>
      <Link href="/getuser" className="item">
        Get User
      </Link>
    </div>
  );
};

export default Header;
