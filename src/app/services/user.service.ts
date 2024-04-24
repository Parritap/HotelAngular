import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/iuser';
import { catchError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  //Create a promise that will send a request to the server to POST some user data. 

  constructor(private http: HttpClient) { }

  createUser(user: IUser) : Observable<IUser>{
    console.log(user);
    return this.http.post<IUser> ('http://localhost:5000/api/post/user', user)
    .pipe(
      catchError(
        (error: any): Observable<IUser> => {
          console.error(error);
          throw error;
        }
      )
    );
}}
