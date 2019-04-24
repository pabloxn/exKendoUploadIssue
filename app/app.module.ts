import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { UploadModule } from '@progress/kendo-angular-upload';
import { DialogModule } from '@progress/kendo-angular-dialog';

@NgModule({
    bootstrap:       [ AppComponent ],
    declarations:    [ UserInfoComponent, AppComponent ],
    // Register the component that will be created dynamically
    entryComponents: [ UserInfoComponent ],
    imports: [
      DialogModule,
      BrowserModule,
      BrowserAnimationsModule,
      ButtonsModule,
      ReactiveFormsModule,
      UploadModule,
      HttpClientModule,
    ]
})
export class AppModule {}
