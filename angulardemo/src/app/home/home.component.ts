import { Component, OnInit } from '@angular/core';
import { AlertaService } from '../alerta.service';
import { User } from '../models/user';

const HEROES = [
  {id: 1, name:"Superman"},
  {id: 2, name:"Batman"},
  {id: 3, name:"BatGirl"},
  {id: 4, name: "Robin"},
  {id: 5, name:"SuperWoman"},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // template: `<h1> Home </h1>`
  // <p> Sunt in componenta Home </p>
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Componenta Home';
  salut: string = 'Bine ati venit la cursul 2'
  nume: string = 'LinkAcademy'
  eroi = HEROES;
  user: User = {
    id: 1,
    nume: 'Popescu',
    prenume: 'Dan',
    email: 'dan@popescu.ro'
  };
  image: string = 'https://storage0.dms.mpinteractiv.ro/media/1/1/4728/17838649/1/ou.jpg?width=560';

  showImage: boolean = true;

  constructor(private alertaServices:AlertaService) { }

  ngOnInit(): void {
    this.alertaServices.showAlert( "Salut Mihai")
  }
  afiseazaImagine() {
    this.showImage = !this.showImage;
  }

}

