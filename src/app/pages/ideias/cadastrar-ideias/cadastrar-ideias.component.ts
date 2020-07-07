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

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

}
