import { Types } from 'mongoose';

import { IList } from './IList';

export interface IIdea {
  // _id?: Types.ObjectId;
  _id?: string;
  title: string;
  description?: string;
  logo?: string;
  list?: Array<IList>;
}
