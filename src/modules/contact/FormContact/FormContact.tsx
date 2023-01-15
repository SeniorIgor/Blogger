import { FC, memo } from 'react';

import { FormContactProps } from './FormContact.types';

import styles from './FormContact.module.scss';

const FormContact: FC<FormContactProps> = () => {
  return (
    <section className={styles.root}>
      <h1>How can I help you?</h1>
      <form className={styles.form}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required />
          </div>
        </div>

        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows={5} />
        </div>

        <div className={styles.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default memo(FormContact);
