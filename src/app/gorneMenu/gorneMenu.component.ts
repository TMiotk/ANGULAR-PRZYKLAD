import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gorneMenu',
  templateUrl: './gorneMenu.component.html',
  styleUrls: ['./gorneMenu.component.scss']
})
export class GorneMenuComponent implements OnInit {

  public show:boolean = false;
  public buttonName:any = 'Show';

  constructor() { }

  ngOnInit() {
  }


  toggle() {
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

}
