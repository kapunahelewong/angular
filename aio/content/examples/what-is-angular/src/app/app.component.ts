import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<hello-world></hello-world>
             <hello-world-template></hello-world-template>
             <hello-world-ngif></hello-world-ngif>
             <hello-world-di></hello-world-di>`
})
export class AppComponent { }
