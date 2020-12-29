import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  FormControl } from '@angular/forms';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{FormGroup, Validators, FormArray } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
declare var $: any;

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

// dane do pola citizenship
   categories = [
    {id: 1, name: 'Kraków'},
    {id: 2, name: 'Warszawa'},
    {id: 3, name: 'Rzeszów'},
    {id: 4, name: 'Poznań'},
    {id: 5, name: 'Wrocław'},
    {id: 6, name: 'Krosno'},
    {id: 7, name: 'Bytom', disabled: true},
    {id: 8, name: 'Katowice'},
  ];
// dane zaznaczone w citizenship
  selected = [

    {id: 5, name: 'Wrocław'},
    {id: 6, name: 'Krosno'}

  ];
// dane do pola assign role
  categories2 = [
    {id: 1, name: 'Perform'},
    {id: 2, name: 'Edit something'},
    {id: 3, name: 'Educate', disabled: true},
  ];
// dane zaznaczone w polu assign role
  selected2 = [
    {id: 1, name: 'Perform'}
  ];
   

  getSelectedValue(){
    console.log(this.selected);
  }

delete(){ alert("delete"); }
setpassword(){ alert("SET PASSWORD");}


private prawdafalsz:boolean = false;

sprawdzwartosc(event){
  this.prawdafalsz = !this.prawdafalsz;
};

       public toggles : boolean = false;
       public toggles2: boolean =  false;
       public toggles3: boolean = false;
       public toggles4: boolean = false;
       functionx1(){
         this.toggles = !this.toggles;
       }
       functionx2(){
         this.toggles2=!this.toggles2;
       }
       functionx3(){
        this.toggles3=!this.toggles3;
      }
      functionx4(){
        this.toggles4=!this.toggles4;
      }

//funkcja po kliknieciu niebieskiego save 
updateForm(){

  //validacja formularzy

let dataurodz = document.querySelector('#datepicker');
 let sprawdzajform = false;

  if(!this.name.value.length){
    $("div#nameval").html("wprowadz imie");
    $("input#name").css('background-color','rgb(255, 81, 81)');
    sprawdzajform = false;
  }else{
    $("div#nameval").remove();
    $("input#name").css('background-color','rgb(110, 255, 110)');
    sprawdzajform = true;
   
  }

  if(!this.lastname.value.length){
    $("div#lastnameval").html("wprowadz nazwisko");
    $("input#lastname").css('background-color','rgb(255, 81, 81)');
    sprawdzajform = false;
  }else{
    $("div#lastnameval").remove();
    $("input#lastname").css('background-color','rgb(110, 255, 110)');
    sprawdzajform = true;
  }

  if(!this.birthdate.value.length){
    $("div#birthdayval").html("wprowadz date");
    $("input#datepicker").css('background-color','rgb(255, 81, 81)');
    sprawdzajform = false;
  }else{
    $("div#birthdayval").remove();
    $("input#datepicker").css('background-color','rgb(110, 255, 110)');
    sprawdzajform = true;
  }


  if(!this.facebook.value.length){
    $("div#facebook").html("wprowadz link facebooka");
    $("input#facebook").css('background-color','rgb(255, 81, 81)');
    sprawdzajform = false;
  }else{
    $("div#facebook").remove();
    $("input#facebook").css('background-color','rgb(110, 255, 110)');
    sprawdzajform = true;
  }

  if(!this.instagram.value.length){
    $("div#instagram").html("wprowadz link instagrama");
    $("input#instagram").css('background-color','rgb(255, 81, 81)');
    sprawdzajform = false;
  }else{
    $("div#instagram").remove();
    $("input#instagram").css('background-color','rgb(110, 255, 110)');
    sprawdzajform = true;
  }

  if(!this.twitter.value.length){
    $("div#twitter").html("wprowadz link twittera");
    $("input#twitter").css('background-color','rgb(255, 81, 81)');
    sprawdzajform = false;
  }else{
    $("div#twitter").remove();
    $("input#twitter").css('background-color','rgb(110, 255, 110)');
    sprawdzajform = true;
  }

  if(!this.email.value.length){
    $("div#emailval").html("wprowadz poprawny email");
    $("input#email").css('background-color','rgb(255, 81, 81)');
    sprawdzajform = false;
  }else{
    $("div#emailval").remove();
    $("input#email").css('background-color','rgb(110, 255, 110)');
    sprawdzajform = true;
  }
//koniec walidacji formularzy
if(sprawdzajform == true){
  alert("Dodano: "+this.name.value+"-"+this.lastname.value+"-"+this.birthdate.value+"-"+this.instagram.value+"-"+this.twitter.value+"-"+this.email.value+"-"+this.facebook.value);
}else { alert("WYPEŁNIJ WSZYSTKIE POLA FORMULARZA !!");}

}; //koniec funkcji updateForm



//tworzenie instancji FormGroup dla formlarzy
form= new FormGroup({});
name =  new FormControl('', [Validators.required, Validators.minLength(3)]);
lastname = new FormControl('', [Validators.required, Validators.minLength(3)]);
birthdate = new FormControl('',[Validators.required, Validators.minLength(3)]);
facebook =  new FormControl('', [Validators.required, Validators.minLength(3)]);
instagram = new FormControl('', [Validators.required, Validators.minLength(3)]);
twitter = new FormControl('', [Validators.required, Validators.minLength(3)]);
email = new FormControl('', [Validators.required, Validators.email]);


// poczatek modala okienka
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  open(content) {
    this.modalService.open(content);
  }
// koniec modala okienka

  clickMethod(name: string) {
    if(confirm("Are you sure to delete "+name)) {
      console.log("Implement delete functionality here");
    }
  }


  onItemSelect(...args: [item: any]) {
   // console.log(item);
  }
onSelectAll(items: any) {
  console.log(items);
}

 ngOnInit() {

  $(document).ready(function() {
// ustawienia kalendarzyka
    $( "#datepicker" ).datepicker({
      dateFormat: 'dd/mm/yy',
      changeYear: true,
      changeMonth: true,
      yearRange: "1920:2020",
        });

$('input').click(function(){
  this.value = '';
  this.placeholder = '';
});
});


  }//koniec ngOnInit

}
