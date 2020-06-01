import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string;
  senha: string;

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login(){
    const {usuario, senha} = this
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(usuario + '@teste.com', senha)
    } catch(err) {
      console.dir(err)
      if(err.code === "auth/user-not-found"){
        console.log("Usuário não encontrado")
      }
    }
  }
}
