import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

export class HelloWorldBean {
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient,
    private basicAuthservice : BasicAuthenticationService
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("welcome data service");
  }

  executeHelloWorldVariableService(name){
    let basicAuthHeaderString = this.basicAuthservice.getAuthenticatedToken();
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
    {headers});
    //console.log("welcome data service");
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = 'navonil'
  //   let password = '1234'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username+':'+password);
  //   return basicAuthHeaderString;
  // }
}
