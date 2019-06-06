import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from '../../environments/environment.prod';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  name : string;
  pwd : string;
  onSubmit(username : HTMLInputElement, password : HTMLInputElement){
    this.name = username.value;
    this.pwd = password.value;
       this.http.post(environment.urlServer + '/login',
    {
      username : username.value,
      password : password.value
    }
    ).subscribe((data)=> {if (data.toString()=="1"){localStorage.setItem("Loggato","true")}
    else localStorage.setItem("Loggato","false")} );


  }

}
