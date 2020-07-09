import { IIdea } from './../interfaces/IIdea';
import { IList } from '../interfaces/IList';

export class IdeiaClasse {
  private idea: IIdea;

  constructor() { }

  public getIdIdea(): number {
    return this.idea._id;
  }

  public getTitle(): string {
    return this.idea.title;
  }

  public setTitle(title: string): void {
    this.idea.title = title;
  }

  public getDescription(): string {
    return this.idea.description;
  }

  public setDescription(description: string): void {
    this.idea.description = description;
  }

  public getLogo(): string {
    return this.idea.logo;
  }

  public setLogo(logo: string): void {
    this.idea.logo = logo;
  }

  public getList(): IList[] {
    return this.idea.list;
  }

  public setList(list: IList[]): void {
    this.idea.list = list;
  }
}
