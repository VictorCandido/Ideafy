import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-cadastrar-ideias',
  templateUrl: './cadastrar-ideias.component.html',
  styleUrls: ['./cadastrar-ideias.component.css']
})
export class CadastrarIdeiasComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
  }

}
