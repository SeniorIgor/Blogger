import { FC, memo } from 'react';
import Image from 'next/image';

import { HeroProps } from './Hero.types';

import styles from './Hero.module.scss';

const Hero: FC<HeroProps> = () => {
  return (
    <section className={styles.root}>
      <div className={styles.image}>
        <Image src="/images/app/author.png" alt="An image showing blogger" width={300} height={300} />
      </div>
      <h1>Hi, I&apos;m Igor</h1>
      <p>I blog about web development - especially frontend frameworks like Angular or React.</p>
    </section>
  );
};

export default memo(Hero);
