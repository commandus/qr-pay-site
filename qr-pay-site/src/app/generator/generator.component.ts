import { toCanvas } from 'qrcode';
import { SettingsService } from './../settings.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QrSbp } from './../model/qrsbp';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {
  @ViewChild('canvas', { static: true }) elCanvas!: ElementRef;
  public formGroup: FormGroup;
  public url = '';

  constructor(
    private formBuilder: FormBuilder,
    public settings: SettingsService
  ) {
    this.formGroup = this.formBuilder.group({
      sum: [0,
        [ Validators.required ]
      ]
    });
  }

  ngOnInit(): void {
    this.url = this.settings.qrdata;
    this.drawQRCode();
  }

  drawQRCode(): void {
    let u = 'https://play.google.com/store/apps/details?id=com.commandus.qrcodepaymentgenerator';
    if (this.url.length !== 0)
      u = this.url;
    const width = this.elCanvas.nativeElement.clientWidth;
    const height = window.innerHeight;
    const d = width > height ? height : width;
    this.elCanvas.nativeElement.width = d;
    this.elCanvas.nativeElement.height = d;
    toCanvas(this.elCanvas.nativeElement, u);
  }

  updateSum(): void {
    let q = new QrSbp(this.url);
    q.setSum(this.formGroup.getRawValue().sum);
    this.url = q.url;
    this.drawQRCode();
  }

}
