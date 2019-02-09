import { Component } from '@angular/core';

@Component({
    selector: '.app-education',
    templateUrl: './education.component.html',
    styles: [`
    .verified{
        color: white;}
    `]
})

export class EducationComponent{

    name: String='Bilahari Goruputi';
    highestQualification: String='B tech';
    passyear:number= 2015;

    getName(){
        return this.name; 
    }

    allowNewEducation=false;
    educationStatus='not verified';
    education=['SSC','Intermediate'];
    educationName='';
    educationadded=false;
    constructor(){
        setTimeout(() => {
            this.allowNewEducation=true;
        },3000);
  
    }


    onAddEducation(){
        this.educationadded=true;
        this.education.push(this.educationName);
        this.educationStatus='Education Added! Name is:'+this.educationName;
    }
    onUpdateEducationName(){
        this.educationName=(<HTMLInputElement>event.target).value;
    }
    ngOnInit(){
        this.educationStatus=Math.random() > 0.5? 'verified':'not verified';
    }

    getColor(){
        return this.educationStatus==='verified' ? 'green':'red';
    }
    
}
