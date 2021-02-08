// #docplaster

// #docregion component
import { Component } from '@angular/core';

@Component({
    selector: 'hello-world-ngif',
    template: `<h2>Hello World: ngIf!</h2>
                <button (click)="onEditClick()">Click me!</button>
                <div *ngIf="canEdit; else noEdit">
                        <p>You can edit the following paragraph.</p>
                    </div>
                <ng-template #noEdit>
                <p>The following paragraph is read only. Try clicking the button!</p>
                </ng-template>
                <p [contentEditable]="canEdit">{{ message }}</p>
                `
  })
  export class HelloWorldNgIfComponent {
    message = 'I\'m read only!';
    canEdit = false;
  
    onEditClick(){
      this.canEdit = !this.canEdit;
      if (this.canEdit) {
        this.message = 'You can edit me!';
      } else {
        this.message = 'I\'m read only!';
      }
  
    }
  }

// #enddocregion component
