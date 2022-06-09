import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: `<h1> Home </h1>`
  // <p> Sunt in componenta Home </p>
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Componenta Home';
  user: User = {
    id: 1,
    nume: 'Popescu',
    prenume: 'Dan',
    email: 'dan@popescu.ro'
  };
  image: string = 'https://storage0.dms.mpinteractiv.ro/media/1/1/4728/17838649/1/ou.jpg?width=560';

  showImage: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  afiseazaImagine() {
    this.showImage = !this.showImage;
  }

}

