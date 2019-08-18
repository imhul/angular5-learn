import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';

  constructor(_http: HttpClient) {
    _http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(res => {
      console.info("_http.get -> result: ", res)
    })
  }
}
