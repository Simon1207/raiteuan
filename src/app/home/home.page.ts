import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl , Validators } from '@angular/forms';
import {Storage} from '@ionic/storage';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public storage: Storage, public alertCtrl: AlertController, public navCtrl: NavController) {
    let usuario = localStorage.getItem('registros').split(',');
    console.log(usuario);
    this.loginForm = this.formBuilder.group({
      usuario: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ])),
      contraseña: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ])),
  });



}

OnInit() {}

async logIn(){
  let usuario = localStorage.getItem('registros').split(',');
  let usuarioValido = this.loginForm.value.usuario;
  console.log(usuario);
  let foundUsuario = usuario.find((element) => {
    return element === usuarioValido;
  });
  console.log(foundUsuario);

  let contraseña = localStorage.getItem('registros').split(',');
  let contraseñaValida = this.loginForm.value.contraseña;
  let foundContraseña = contraseña.find((element) => {
    return element ===  contraseñaValida;
  });
  console.log(foundContraseña);

  if (usuarioValido === foundUsuario && contraseñaValida === foundContraseña){
    this.navCtrl.navigateForward('/perfil');
  const alert = await this.alertCtrl.create({
    header: 'Acceso correcto',
    message: `Bienvenido: ${usuarioValido}`,
    buttons: ['OK']
  });

  await alert.present();
  } else {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: `Usuario / Contraseña Invalido`,
      buttons: ['OK']
    });
  
    await alert.present();
  }
}

}
