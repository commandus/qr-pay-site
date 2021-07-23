import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-install-android',
  templateUrl: './install-android.component.html',
  styleUrls: ['./install-android.component.css']
})
export class InstallAndroidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadAndroid(): void {
    console.log(1);
    window.open("https://play.google.com/store/apps/details?id=com.commandus.qrcodepaymentgenerator");
  }
}
