import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:  string = "iron man";
  public age:   number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    //TO DO:
    // throw 'Método no implementado'
    this.name = "spider man";
  }

  changeAge(): void {
    this.age = 23;
  }

  resetForm(): void {
    this.name = "iron man";
    this.age = 45;
  }
}
