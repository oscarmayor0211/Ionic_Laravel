import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categorie : Categoria;
  constructor( public  http: HttpClient) { }

  getDatos(){
    let Url = URL_SERVICIOS;
    return this.http.get(Url);    
  }
}
