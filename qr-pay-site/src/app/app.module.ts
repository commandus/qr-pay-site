import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneratorComponent } from './generator/generator.component';
import { InstallAndroidComponent } from './install-android/install-android.component';
import { AndroidDetailsComponent } from './android-details/android-details.component';
import { FooterComponent } from './footer/footer.component';
import { QrScanComponent } from './qr-scan/qr-scan.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GeneratorComponent,
    InstallAndroidComponent,
    AndroidDetailsComponent,
    FooterComponent,
    QrScanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
