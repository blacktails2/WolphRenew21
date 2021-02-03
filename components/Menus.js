import Link from 'next/link';

const Menus = () => (
  <styledMenus>
    <Link href='/'>
      <a><img src='../logotype.svg' alt='Wolph.designのホームに戻る'/></a>
    </Link>
    <Link href='/'>
      <a>Works</a>
    </Link>
    <Link href='/about'>
      <a>About</a>
    </Link>
    <Link href='/blog'>
      <a>Blog</a>
    </Link>
  </styledMenus>
);

export default Menus
