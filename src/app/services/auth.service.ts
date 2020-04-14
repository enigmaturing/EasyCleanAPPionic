import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login/client', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token); // decode token to show the users email on nav.component.html
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register/client', model);
  }

  // Reads from the JWT-Token the roles the logged in user belongs to
  // and then returns true if the allowedRoles passed as a parameter
  // are contained in the JWT-Token
  roleMatch(allowedRoles): boolean {
    const userRoles = this.decodedToken.role as Array<string>;
    let isMatch = false;
    // loop through roles we are checking
    allowedRoles.forEach(element => {
      if (userRoles.includes(element)) {
        isMatch = true;
        return; // return from this loop iteration
      }
    });
    return isMatch; // return from method with value of isMatch
  }
}
