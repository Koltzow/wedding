import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
  <header class={style.header}>
    <nav>
      <Link activeClassName={style.active} href="/">
        Hjem
      </Link>
      <Link activeClassName={style.active} href="/historie">
        Vår historie
      </Link>
      <Link activeClassName={style.active} href="/praktisk">
        Praktisk
      </Link>
    </nav>
  </header>
);

export default Header;
