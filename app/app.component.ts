import { Component } from '@angular/core';
import { UserInfoComponent } from './user-info.component';
import { DialogService } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'my-app',
  template: `
    <div class="example-wrapper">
      <button (click)="openDialogForm()" class="k-button k-button-icontext k-primary">
        <span class="k-icon k-i-form-element"></span> User form
      </button>
    </div>

    <div kendoDialogContainer></div>
  `
})
export class AppComponent {
    constructor( private dialogService: DialogService ) {}

    public openDialogForm() {
        const dialogRef = this.dialogService.open({
            content: UserInfoComponent,
        });

        const userInfo = dialogRef.content.instance;
            userInfo.name = 'admin';
            userInfo.age = 42;

        dialogRef.result.subscribe(r => {
            console.log(r);
            if (r.primary) {
                console.log(`Form: ${JSON.stringify(userInfo.formGroup.value)}`);
            }
        });
    }
}
