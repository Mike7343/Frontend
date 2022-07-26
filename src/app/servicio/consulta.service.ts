import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  urlpostusuario='http://localhost:3000/curriculum/postusuario';
  urlgetusuario='http://localhost:3000/curriculum/getusuario';

  constructor(private http:HttpClient) {
    console.log("Servicio Corriendo");
   }

   URLpostDBusuario(Inse:InsertDB):Observable<any>{
    console.log("Servicio",Inse.Nombre)
    return this.http.post
    (this.urlpostusuario,Inse);
  }
  consultaBdusuario():Observable<any>{
    return this.http.get(this.urlgetusuario);
  }














}

export interface Datos{
  Nombre?: string;
  Apellido?: string;
  Fecha_Nacimiento?: number;
  CURP?: string;
  id_Divisiones?: number;
  id_pais?: number;
  id_estado?: number;
  id_municipio?: number;
  id_cp?: number;
  id_colonia?: number;
  
}


export interface InsertDB{
    Nombre?: string;
    Apellido?: string;
    Fecha_Nacimiento?: number;
    CURP?: string;
    id_Divisiones?: number;
    id_pais?: number;
    id_estado?: number;
    id_municipio?: number;
    id_cp?: number;
    id_colonia?: number;
    
  }