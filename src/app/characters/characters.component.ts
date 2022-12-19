import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  r1: number = Math.floor(Math.random() * (826 - 1) + 1);
  r2: number = Math.floor(Math.random() * (826 - 1) + 1);
  r3: number = Math.floor(Math.random() * (826 - 1) + 1);
  r4: number = Math.floor(Math.random() * (826 - 1) + 1);
  r5: number = Math.floor(Math.random() * (826 - 1) + 1);
  r6: number = Math.floor(Math.random() * (826 - 1) + 1);
  r7: number = Math.floor(Math.random() * (826 - 1) + 1);
  r8: number = Math.floor(Math.random() * (826 - 1) + 1);
  characters: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log(this.r1);
    this.http.get("https://rickandmortyapi.com/api/character/"+this.r1+","+this.r2+","+this.r3+","+this.r4+","+this.r5+","+this.r6+","+this.r7+","+this.r8)
    .subscribe(
      result => {
        this.characters = result;
        console.log(this.characters);
      },
      error => {
        console.log("No se han podido seleccionar los personajes");
      }
    );
  }
}
