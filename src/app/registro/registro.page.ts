import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl , Validators } from '@angular/forms';
import { THIS_EXPR, findReadVarNames } from '@angular/compiler/src/output/output_ast';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
//import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  bandera: string;
  formRegistro: FormGroup;
  arrRegistros: any = ['admin'];
  errorMessages = {
    'nombre' : [
      { type: 'required', message: 'Complete el campo'},
      { type: 'minLength', message: 'La cantidad minima son 5 caracteres'},
      { type: 'maxLength', message: 'La cantidad maxima son 10 caracteres'}
    ],
    'apellidos' : [
      { type: 'required', message: 'Complete el campo'},
      { type: 'minLength', message: 'La cantidad minima son 5 caracteres'},
      { type: 'maxLength', message: 'La cantidad maxima son 10 caracteres'}
    ],
    'matricula' : [
      { type: 'required', message: 'Complete el campo'},
      { type: 'minLength', message: 'La cantidad minima son 5 caracteres'},
      { type: 'maxLength', message: 'La cantidad maxima son 15 caracteres'}
    ],
    'usuario' : [
      { type: 'required', message: 'Complete el campo'},
      { type: 'minLength', message: 'La cantidad minima son 5 caracteres'},
      { type: 'maxLength', message: 'La cantidad maxima son 10 caracteres'}
    ],
    'contraseña' : [
      { type: 'required', message: 'Complete el campo'},
      { type: 'minLength', message: 'La cantidad minima son 5 caracteres'},
      { type: 'maxLength', message: 'La cantidad maxima son 10 caracteres'}
    ]
  }
  


  constructor(public formBuilderE: FormBuilder, public storage: Storage, public alertCtrl: AlertController) {
  //   this.sqlite.create({
  //     name: 'ex.db',
  //     location: 'default'
  //   })
  //   .then(
  //   (db: SQLiteObject) => {
  //     this.addHero(db).then(
  //       (res) => {
  //         console.log(res);
  //         this.printAllHeros(db);
  //       }
  //     );
  //   }
  // );

    this.formRegistro = this.formBuilderE.group({
      nombre: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ])),
      apellidos: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50),
      ])),
      matricula: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ])),
      usuario: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ])),
      contraseña: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]))
  });


}

  ngOnInit() {
   
  }

  // addHero(dbObj: SQLiteObject){
  //   const q = 'INSERT INTO heros (name) VALUES(?)';
  //   return dbObj.executeSql(q, ['Iron Man']).then(
  //     (res) => {
  //       return res;
  //     }
  //   );
  // }

  // printAllHeros(dbObj: SQLiteObject) {
  //   const q = 'SELECT name FROM heros';
  //   dbObj.executeSql(q, []).then( (res) => {
  //     for ( let i = 0; i < res.rows.length; i++) {
  //       console.log(res.rows.item(i));
  //       this.valor(res.rows.item(i));
  //     }
  //   });
  // }
  obtenerValor(valor: any) {
    console.log(valor.detail.value);
    this.bandera = valor.detail.value;
  }

  async presentAlert() {
    this.arrRegistros.push(this.formRegistro.value.nombre);
    this.arrRegistros.push(this.formRegistro.value.apellidos);
    this.arrRegistros.push(this.formRegistro.value.matricula);
    this.arrRegistros.push(this.formRegistro.value.usuario);
    this.arrRegistros.push(this.formRegistro.value.contraseña);

    localStorage.setItem('registros', this.arrRegistros);
    const alert = await this.alertCtrl.create({
      header: 'Mensaje',
      subHeader: 'Registro Exitoso',
      message: `Se ha registrado un nuevo usario de tipo: ${this.bandera === 'c' ? 'CONDUCTOR' : 'ESTUDIANTE'}`,
      buttons: ['OK']
    });

    await alert.present();
    console.log(localStorage.getItem('registros'));
  }

   registrar(){
     this.presentAlert();

   }


  }


