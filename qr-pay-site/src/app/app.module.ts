import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneratorComponent } from './generator/generator.component';
import { InstallAndroidComponent } from './install-android/install-android.component';
import { AndroidDetailsComponent } from './android-details/android-details.component';
import { FooterComponent } from './footer/footer.component';
import { QrScanComponent } from './qr-scan/qr-scan.component';

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
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
