import { Injectable } from '@angular/core';

@Injectable()
export class AlertaService {

  constructor() { }
  showAlert(message: string) {
    alert(message);
  }
}
