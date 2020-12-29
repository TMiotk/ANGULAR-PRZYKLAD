import { Component } from '@angular/core';
import { AnimationDurations } from '@angular/material/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent {
  title = 'angular-zadanie';
  nazwajakas = 'jakas nazwa';
  listajakas = ["Script","Props","Scenes","Money","Stunt"];

  ngOnInit() {

    $(document).ready(function() {
    });}


}
