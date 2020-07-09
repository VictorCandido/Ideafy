import { IList } from './IList';

export interface IIdea {
  _id?: number;
  title: string;
  description?: string;
  logo?: string;
  list?: Array<IList>;
}
