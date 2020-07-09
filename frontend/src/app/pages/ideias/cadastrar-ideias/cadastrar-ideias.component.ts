import { IList } from './../../../interfaces/IList';
import { IIdea } from './../../../interfaces/IIdea';
import { IdeiaService } from './../ideia.service';
import { IdeiaClasse } from './../../../classes/IdeiaClass';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cadastrar-ideias',
  templateUrl: './cadastrar-ideias.component.html',
  styleUrls: ['./cadastrar-ideias.component.css']
})
export class CadastrarIdeiasComponent implements OnInit {
  check = faCheckDouble;

  idea: IIdea = { title: '' };
  logo: string;
  list: IList;
  isEditingTitle: boolean;

  constructor(
    private route: ActivatedRoute,
    private service: IdeiaService
  ) { }

  ngOnInit(): void {
    this.isEditingTitle = false;
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.service.getIdea(id).subscribe((idea: IIdea) => {
        this.idea = idea;
        console.log('idea', idea);
      });
    } else {
      this.idea = {
        description: '',
        title: 'Insira um título...'
      }
    }
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
  }

}
