import { IdeiaClasse } from './../../../classes/IdeiaClass';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldControl } from '@angular/material/form-field';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cadastrar-ideias',
  templateUrl: './cadastrar-ideias.component.html',
  styleUrls: ['./cadastrar-ideias.component.css']
})
export class CadastrarIdeiasComponent implements OnInit {
  check = faCheckDouble;

  idea: IdeiaClasse;

  ideaTitle = 'Teste de título';
  ideaLogo: string;
  ideaDescription: string;
  isEditingTitle = false;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idea = new IdeiaClasse();
    console.log(this.route.snapshot.paramMap.get('id'));
  }

  editTitle() {
    this.isEditingTitle = true;

    setTimeout(() => {
      const editTitleTxt: HTMLElement = document.getElementById('editTitle');
      editTitleTxt.focus();

      editTitleTxt.addEventListener('keyup', event => {
        if (event.code === 'Enter') {
          this.saveTitle();
        }
      });
    }, 0);
  }

  saveTitle() {
    this.isEditingTitle = false;
    this.idea.setTitle(this.ideaTitle);
  }

  saveLogo() {
    this.idea.setLogo(this.ideaLogo);
  }

  saveDescription() {
    this.idea.setDescription(this.ideaDescription);
  }

}
