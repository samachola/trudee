import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';


import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userRef: any;
  user: Observable<any>;
  signedIn: any;

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFirestore
  ) {
    this.userRef = this.db.collection('users');

    this.user = this.afAuth.authState.pipe(switchMap(user => {
      if (user) {
        return this.db.collection(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    }));
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  emailSignup(userData) {

    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
        .then(user => {
          resolve(user);
        }, err => reject(err));
    });
  }

  emailSignIn(user) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          resolve(res);
        })
        .catch(err => reject(err));
    });
  }

  /**
   * Add new user details
   *
   * @param uid - userId
   * @param data - user details
   */
  newUser(uid, data) {
    return this.userRef.doc(uid).set({
      ...data
    });
  }

  userSignOut() {
    return this.afAuth.auth.signOut();
  }
}
