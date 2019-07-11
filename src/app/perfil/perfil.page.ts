import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  argumento = null;
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.argumento = this.activateRoute.snapshot.paramMap.get('usuario');
    // console.log('este es el argumento pasado' + this.argumento);
  }

}
