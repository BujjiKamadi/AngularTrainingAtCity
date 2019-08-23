import { Component, OnInit } from '@angular/core';
import { HttpMethodsService } from '../services/http-methods.service';

@Component({
  selector: 'app-spy-on',
  templateUrl: './spy-on.component.html',
  styleUrls: ['./spy-on.component.scss'],
  providers: [HttpMethodsService]
})
export class SpyOnComponent implements OnInit {

  constructor(
    private HttpService: HttpMethodsService
  ) { }

  ngOnInit() {
    this.getEmps();
  }

  getEmps() {
    this.HttpService.getEmployees().subscribe(data => {
      console.log(data);
    });
  }
}
