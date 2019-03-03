import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';


import { Observable, of, BehaviorSubject } from 'rxjs';
import { switchMap, first, tap } from 'rxjs/operators';

export interface User {
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

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

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  isLoggedIn() {
    return this.afAuth.authState.pipe(first());
  }

  userIsLoggedIn() {
    this.isLoggedIn().pipe(
      tap(user => {
        if (user) {
        } else {
        }
      })
    ).subscribe();
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

  getUserDetails(uid) {
    console.log(uid);
    const userRef = this.db.collection('users').doc(uid);
    userRef.get()
      .toPromise()
      .then(res => {
        const { name, email, phone } = res.data();
        const user = {
          name,
          email,
          phone
        };

        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      })
      .catch(err => console.log(err));
  }

  getCurrentUserDetails() {
    let userData = {};
    const userDocRef = this.db.collection('users').doc(this.afAuth.auth.currentUser.uid).get();
    userDocRef.subscribe(doc => {
      userData = doc.data();
    });

    return userData;
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
