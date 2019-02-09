import { Component, OnInit } from '@angular/core';
import{recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:recipe[]=[
    new recipe('Test Recipe','This is a simple test recipe','https://natashaskitchen.com/wp-content/uploads/2017/08/Avocado-Shrimp-Salsa-Recipe-4.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
