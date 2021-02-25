import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.scss'],
})
export class Tab1Component implements OnInit {

  categoria$
  constructor(public service : CategoriaService) { }

  ngOnInit() {
    this.getCategorie();
  }

  getCategorie(){
    this.service.getDatos().subscribe((data:any) =>{
      console.log(data);
      this.categoria$ = data;},
    (error) =>{console.log(error);})
  }
}
