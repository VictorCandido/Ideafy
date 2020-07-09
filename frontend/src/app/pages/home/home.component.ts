import { IIdea } from './../../interfaces/IIdea';
import { IdeiaService } from './../ideias/ideia.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faPlus = faPlus;
  ideas: Array<IIdea>;

  constructor(
    private router: Router,
    private service: IdeiaService
  ) { }

  ngOnInit(): void {
    this.service.getAllIdeas().subscribe((ideasArray: IIdea[]) => {
      this.ideas = ideasArray;
    });
  }

  createNew() {
    this.router.navigate(['/ideia/cadastrar-ideia']);
  }

  editIdeia(id) {
    this.router.navigate(['/ideia/editar-ideia', id]);
  }

}
