import { FormSettings, requiredValidator } from '@/src/hooks';
import { Message } from '@/src/types';

export const formSettings: FormSettings<Message> = {
  email: {
    rules: {
      required: {
        validate: requiredValidator,
        message: 'error',
      },
    },
    value: '',
  },
  name: {
    rules: {
      required: {
        validate: requiredValidator,
        message: 'error',
      },
    },
    value: '',
  },
  message: {
    rules: {
      required: {
        validate: requiredValidator,
        message: 'error',
      },
    },
    value: '',
  },
};
