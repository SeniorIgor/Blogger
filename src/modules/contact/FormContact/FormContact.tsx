import { ChangeEventHandler, FC, memo, useCallback } from 'react';

import { useForm, useMutate } from '@/src/hooks';
import { sendContact } from '@/src/services';
import { Message } from '@/src/types';

import { notification } from './FormContact.data';
import { FormContactProps } from './FormContact.types';
import { formSettings } from './FormContact.utils';

import styles from './FormContact.module.scss';

const FormContact: FC<FormContactProps> = () => {
  const { formState, changeField, handleSubmit, resetForm } = useForm<Message>(formSettings);

  const { onMutate } = useMutate({
    notification,
    requestHandler: sendContact,
    onSuccess: (data) => {
      if (data) {
        resetForm(formSettings);
      }
    },
  });

  const handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(
    (event) => {
      const { name, value } = event.target;

      changeField(name as keyof Message, value);
    },
    [changeField],
  );

  const submitConfirm = useCallback(async (value: Message) => onMutate(value), [onMutate]);

  return (
    <section className={styles.root}>
      <h1>How can I help you?</h1>

      <form className={styles.form} onSubmit={handleSubmit(submitConfirm)}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" value={formState.values.email} onChange={handleChange} />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" value={formState.values.name} onChange={handleChange} />
          </div>
        </div>

        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows={5} value={formState.values.message} onChange={handleChange} />
        </div>

        <div className={styles.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default memo(FormContact);
