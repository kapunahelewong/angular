// #docplaster

// #docregion component
import { Component, Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class Logger {
  writeCount(count: number) {
    console.log(count);
  }
}

@Component({
  selector: 'hello-world-di',
  template: `<h2>Hello World: Dependency Injection</h2>
              <button (click)="onLogMe()">Log me!</button>
              <p>Be sure to open the console to view the output!</p>`
})
export class HelloWorldDependencyInjectionComponent  {
  count = 0;

  constructor(private logger: Logger) {
  }

  onLogMe(){
    this.logger.writeCount(this.count);
    this.count++;
  }
}
// #enddocregion component
