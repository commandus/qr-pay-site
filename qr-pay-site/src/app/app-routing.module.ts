import { QrScanComponent } from './qr-scan/qr-scan.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { InstallAndroidComponent } from './install-android/install-android.component';
import { GeneratorComponent } from './generator/generator.component';
import { AndroidDetailsComponent } from './android-details/android-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'generator', component: GeneratorComponent},
  { path: 'qr-scan', component: QrScanComponent},
  { path: 'install-android', component: InstallAndroidComponent},
  { path: 'android-app', component: AndroidDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
