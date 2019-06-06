import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  name:string ;
  pwd:string;

  submit(nome : HTMLInputElement, pwd : HTMLInputElement ){
     this.http
       this.http.post(environment.urlServer + '/register',
    {
      username : nome.value,
      password : pwd.value
    }
    ).subscribe((data)=> {console.log(data)} );
  }



  }
