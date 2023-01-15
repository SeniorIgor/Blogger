import { ObjectId } from 'mongodb';

export default class Message {
  constructor(public name: string, public email: string, public message: string, public _id?: ObjectId) {}
}
