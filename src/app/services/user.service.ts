import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUser(): Observable<any> {
    return this.http.get('https://run.mocky.io/v3/8e5d16a6-3434-4ed1-a3f5-20bf16aac7ba');
  }
}
