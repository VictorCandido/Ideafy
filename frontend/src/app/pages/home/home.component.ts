import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { HomeServiceService } from './home-service.service';
import { IRegisters } from 'src/app/interfaces/IRegisters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faPlus = faPlus;
  registers: Array<IRegisters>;

  constructor(
    private homeService: HomeServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registers = this.homeService.getRegisters();
  }

  createNew() {
    this.router.navigate(['/ideia/cadastrar-ideia']);
  }

  editIdeia(id) {
    this.router.navigate(['/ideia', id]);
  }

}