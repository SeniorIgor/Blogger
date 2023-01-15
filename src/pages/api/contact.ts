import { NextApiHandler } from 'next';

import { collections } from '@/src/constants';
import { connectToDatabase } from '@/src/lib/mongodb';
import { MessageDocument } from '@/src/models';
import { APIResponse } from '@/src/types';

interface PostRequest {
  email: string;
  name: string;
  message: string;
}

const postHandler: NextApiHandler<APIResponse> = async (req, res) => {
  try {
    const { email, name, message } = req.body as PostRequest;

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    if (!name || name.trim() === '') {
      res.status(422).json({ message: 'Invalid name.' });
      return;
    }

    if (!message || message.trim() === '') {
      res.status(422).json({ message: 'Invalid message.' });
      return;
    }

    const { db } = await connectToDatabase();

    await db.collection<MessageDocument>(collections.messages).insertOne({ email, name, message });

    res.status(201).json({ message: 'Successfully stored message!' });
  } catch (err) {
    res.status(500).json({ message: 'Server not available!' });
  }
};

const handler: NextApiHandler<APIResponse> = async (req, res) => {
  switch (req.method) {
    case 'POST':
      await postHandler(req, res);
      break;

    default:
      res.status(500).json({ message: `The ${req.method} method is not supported!` });
  }
};

export default handler;
