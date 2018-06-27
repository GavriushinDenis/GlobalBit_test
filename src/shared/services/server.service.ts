import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) {
  }

  baseUrl = 'https://globalbit.co.il/front-end-assignment';

  postLogin(body) {
    const url = this.baseUrl + '/login.php';
    return this.http.post(url, body);
  }

  postForgotPassword(body) {
    const url = this.baseUrl + '/forgot-password.php';
    return this.http.post(url, body);
  }
}


