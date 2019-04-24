import { Component, Input } from '@angular/core';
import { DialogRef, DialogContentBase } from '@progress/kendo-angular-dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'user-info',
  template: `
  <kendo-dialog-titlebar>
          <div style="font-size: 18px; line-height: 1.3em;">
            <span class="k-icon k-i-form-element"></span> User Form
          </div>
        </kendo-dialog-titlebar>
        <div class="container">
    <form [formGroup]="formGroup">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" [formControl]="formGroup.get('name')" required>
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input type="number" class="form-control" id="age" [formControl]="formGroup.get('age')">
      </div>
      <label class="k-form-field">
    <span>
      Word Template
      <span class="k-required k-field-info">Required</span>
    </span>
    <kendo-upload (upload)='uploadTemplate($event);' [autoUpload]="false" [multiple]='false' 
    [restrictions]="{allowedExtensions: ['.docx']}" >
    </kendo-upload>
  </label>
    </form>
</div>
    <kendo-dialog-actions>
        <button kendoButton (click)="onCancelAction()">Cancel</button>
        <button kendoButton (click)="onConfirmAction()" [primary]="true" [disabled]="!formGroup.valid">Submit</button>
    </kendo-dialog-actions>
  `
})
export class UserInfoComponent extends DialogContentBase {
    @Input() public age: number;
    @Input() public name: string;

    public formGroup: FormGroup = new FormGroup({
        age: new FormControl(this.age),
        name: new FormControl(this.name)
    });

    constructor(public dialog: DialogRef) {
        super(dialog);
    }
uploadTemplate(ev: any): void {
    ev.preventDefault();
}
    public onCancelAction(): void {
        this.dialog.close({text: 'Cancel'});
    }

    public onConfirmAction(): void {
        this.dialog.close({text: 'Submit', primary: true});
    }
}
