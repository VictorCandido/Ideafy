import { IList } from './IList';

export interface IIdea {
  idIdea: number;
  title: string;
  description: string;
  logo: string;
  list: Array<IList>;
}
