import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-faculties-cards',
  templateUrl: './faculties-cards.component.html',
  styleUrls: ['./faculties-cards.component.css'],
})
export class FacultiesCardsComponent {
  @Input() data: any;
  baseUrl : string = '';
  constructor(){
    this.baseUrl = environment.baseUrl;
  }
}
