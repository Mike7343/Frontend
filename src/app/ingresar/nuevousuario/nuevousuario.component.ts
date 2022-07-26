import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { ConsultaService, Datos, InsertDB } from 'src/app/servicio/consulta.service';

@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevousuarioComponent implements OnInit {

  lista: Datos[] = [];
  data: InsertDB={};

  constructor(private route: Router, private Ruta: ActivatedRoute, private consulta: ConsultaService) { }

  ngOnInit(): void {
  }

  EjecutaPostDB() {
    console.log(this.data)
    this.consulta.URLpostDBusuario(this.data).subscribe(
      res => {
        console.log(res)
        this.lista = res
        this.route.navigateByUrl('/paginaprincipal/perfil');
      }
    );
  }

}
