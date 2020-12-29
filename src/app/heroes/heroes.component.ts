import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import{FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {


heroes = HEROES;
selectedHero: Hero;

 onSelect(hero: Hero, event): void {
   this.selectedHero = hero;
   alert(event +"  -   "+ hero.name);
  }

 private prawdafalsz:boolean = false;
 sprawdzwartosc(event){
   this.prawdafalsz = !this.prawdafalsz;
 };

 private sprawdztotu: boolean=false;

 sprawdzto(event){
   this.sprawdztotu =!this.sprawdztotu;
   console.log(this.sprawdztotu);
   if(this.sprawdztotu==true){
     alert(event+ '  - TRUE');
   }
   else{alert(event+'  - FALSE');}
 }

 //tulisteczka extra
 skillsForm: FormGroup;

  constructor(private fb:FormBuilder) { 
  this.skillsForm = this.fb.group({
   name: '',
   skills: this.fb.array([]),
  })
  }

  ngOnInit() {
  }

}














  
