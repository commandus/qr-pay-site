import { SettingsService } from './../settings.service';
import { Component, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';

import jsQR, { QRCode } from 'jsqr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.component.html',
  styleUrls: ['./qr-scan.component.css']
})
export class QrScanComponent implements OnInit, OnDestroy {
  @ViewChild('video', { static: true }) videoElement!: ElementRef;
  @ViewChild('canvas', { static: true }) canvasElement!: ElementRef;

  successMessage = '';
  errorMessage = '';

  devices: MediaDeviceInfo[] = [];
  stream!: MediaStream;
  
  constructor(
    private router: Router,
    private settingsService: SettingsService
  ) {

  }
  
  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.stopStream();
  }
  
  async setStreamFromDevice(deviceId: string) {
    this.stopStream();
    const constraints: MediaStreamConstraints = {
      audio: false,
      video: {
        deviceId: { exact: deviceId }
      }
    };
    const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
    this.gotStream(mediaStream);
  }

  private stopStream(): void {
    if (this.stream) {
      this.stream.getTracks().forEach(function (track) {
        track.stop();
      });
    }
  }
  
  private gotStream(localStream: MediaStream): void {
    this.successMessage = 'Наведите камеру на статический QR код';
    this.videoElement.nativeElement.srcObject = localStream;
    this.stream = localStream;
    this.checkImage();
}

  async init() {
    this.devices = [];
    let devices: MediaDeviceInfo[] = await navigator.mediaDevices.enumerateDevices()
    for (let i = 0; i !== devices.length; ++i) {
      let deviceInfo = devices[i];
      if (deviceInfo.kind === "videoinput") {
        this.devices.push(deviceInfo);
      }
    }
    if (this.devices.length > 0) {
      this.setStreamFromDevice(this.devices[0].deviceId);
    }
  }

  public cancel(): void {
    this.stopStream();
    this.router.navigateByUrl('/');
  }

  private checkImage(): void {
    const width = this.videoElement.nativeElement.clientWidth;
    const height = this.videoElement.nativeElement.clientHeight;
    this.canvasElement.nativeElement.width = width;
    this.canvasElement.nativeElement.height = height;

    const ctx = this.canvasElement.nativeElement.getContext('2d') as CanvasRenderingContext2D;

    ctx.drawImage(this.videoElement.nativeElement, 0, 0, width, height)
    const imageData = ctx.getImageData(0, 0, width, height)
    const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "dontInvert" })

    if (code) {
      this.settingsService.qrdata = code.data;
      this.router.navigateByUrl('/');
    } else {
      setTimeout(() => { this.checkImage(); }, 100)
    }
  }

}
