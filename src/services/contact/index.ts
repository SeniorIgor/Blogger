import axios from 'axios';

import { Message, Response } from '@/src/types';
import { formatError } from '@/src/utils';

interface SubscribeNewsletterResponse {
  message: string;
}

export const sendContact = async (body: Message): Promise<Response<SubscribeNewsletterResponse>> => {
  try {
    const { data, status, headers } = await axios.post<SubscribeNewsletterResponse>('/api/contact', body, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (status > 300) {
      return { error: data.message };
    }

    return { data, status, headers };
  } catch (e) {
    return { error: formatError(e) };
  }
};
