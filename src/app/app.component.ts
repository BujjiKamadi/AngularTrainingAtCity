import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpMethodsService } from './services/http-methods.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpMethodsService]
})
export class AppComponent {
  title = 'AngularTrainingAtCity';

  constructor(
    private httpService: HttpMethodsService,
    private http: HttpClient
  ) {
    console.log(environment.production);
    this.httpService.getUsersFromGitHub().subscribe( data => {
      console.log('getUsersFromGitHub ', data);
    });
    this.httpService.getEmployees1().subscribe( data => {
      console.log('getEmployees1 ', data);
    });
    this.getJsonData();
    // this.getW3schoolsData();
  }

  getJsonData() {
    this.http.get('/localServer').subscribe(data => {
      console.log('json data ', data);
    });
  }
  // getW3schoolsData() {
  //   this.http.get('/css_colors.asp').subscribe(data => {
  //     console.log('w3schools data ', data);
  //   });
  // }
}
