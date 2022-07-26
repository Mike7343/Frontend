import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { ConsultaService, Datos, InsertDB } from 'src/app/servicio/consulta.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  lista: Datos[] = [];
  data: InsertDB={};

  constructor(private route: Router, private Ruta: ActivatedRoute, private consulta: ConsultaService) { }

  ngOnInit(): void {
    this.ejecutaConsulta();
  }

  ejecutaConsulta() {
    this.consulta.consultaBdusuario().subscribe(
      res => {
        console.log(res)
        this.lista = res;
      }
    );
  }

}
