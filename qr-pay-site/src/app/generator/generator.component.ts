import { SettingsService } from './../settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generator',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css']
})
export class GeneratorComponent implements OnInit {

  constructor(
    public settings: SettingsService
  ) { }

  ngOnInit(): void {
  }

}
