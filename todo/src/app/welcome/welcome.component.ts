import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Welcome!!!'
  name = ''
  welcomeMessageFromService: string

  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit() {
    //console.log(this.message);
    this.name = this.route.snapshot.params['name'];
    //console.log(this.name);
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  getWelcomeMessageWithParameter() {
    //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldVariableService(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  handleSuccessfulResponse(response){
    // console.log(response);
    // console.log(response.message);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error){
    //this.welcomeMessageFromService = error; 
    this.welcomeMessageFromService = error.error.message;
  }

}
