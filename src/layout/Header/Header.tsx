import { FC } from 'react';
import Link from 'next/link';

import { routes } from '@/src/constants';

import { navigation } from './Header.data';

import styles from './Header.module.scss';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href={routes.home}>Blogger</Link>
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.list}>
          {navigation.map(({ name, link }) => (
            <li className={styles.item}>
              <Link href={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
