import {
  Auth,
  GoogleAuthProvider,
  authState,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';

import { Injectable } from '@angular/core';
import { LoginData } from '../interfaces/login-data.interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  get userState() {
    return authState(this.auth)
  }

  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  // async sendEmailVerification() {
  //   const user = this.auth.currentUser;
  //   if (user) {
  //     try {
  //       await sendEmailVerification(user); // Envía el correo de verificación
  //       console.log('Correo de verificación enviado');
  //       // Puedes mostrar un mensaje al usuario indicando que se ha enviado el correo de verificación.
  //     } catch (error) {
  //       console.error('Error al enviar el correo de verificación:', error);
  //       // Maneja cualquier error que pueda ocurrir al enviar el correo de verificación.
  //     }
  //   }
  // }

}
