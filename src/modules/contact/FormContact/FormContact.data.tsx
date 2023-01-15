import { GENERAL_ERROR } from '@/src/constants';
import { UseMutateNotification } from '@/src/hooks';

export const notification: UseMutateNotification = {
  success: () => ({
    title: 'Success!',
    message: 'Message send successfully!',
    status: 'success',
  }),
  error: (message) => ({
    title: 'Error!',
    message: message || GENERAL_ERROR,
    status: 'error',
  }),
  pending: () => ({
    title: 'Sending message...',
    message: 'Your message is on its way!',
    status: 'pending',
  }),
};
