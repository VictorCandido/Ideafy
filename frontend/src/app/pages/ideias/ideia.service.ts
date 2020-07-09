import { IIdea } from './../../interfaces/IIdea';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdeiaService {
  private readonly apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

    public getAllIdeas() {
      return this.http.get(`${this.apiUrl}/findAll`);
    }

    public getIdea(id: string) {
      return this.http.get(`${this.apiUrl}/find/${id}`);
    }

    public createIdea(idea: IIdea) {
      return this.http.post(`${this.apiUrl}/store`, idea);
    }

    public updateIdea(idea: IIdea) {
      return this.http.put(`${this.apiUrl}/update/${idea._id}`, idea);
    }

    public deleteIdea(id: string) {
      return this.http.delete(`${this.apiUrl}/delete/${id}`);
    }
}
