import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  searchValue = ""
  headers = [
    { text: "Position", value: "position", sort: true },
    { text: "Name", value: "name" },
    { text: "Symbol", value: "symbol" },
    { text: "Weight", value: "weight" },
    { text: "Name2", value: "name2" },
  ]
  // data = []

  constructor(private http: HttpClient) {

  }

  get data() {
    return {
      items: [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', name2: 'Hydrogen' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', name2: 'Hydrogen' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', name2: 'Hydrogen' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', name2: 'Hydrogen' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', name2: 'Hydrogen' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', name2: 'Hydrogen' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', name2: 'Hydrogen' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', name2: 'Oxygen' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', name2: 'Fluorine' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', name2: 'Neon' },
        { position: 11, name: 'Neon', weight: 20.1797, symbol: 'Ne', name2: 'Neon' },
        { position: 12, name: 'Neon', weight: 20.1797, symbol: 'Ne', name2: 'Neon' },
        { position: 13, name: 'Neon', weight: 20.1797, symbol: 'Ne', name2: 'Neon' },
        { position: 14, name: 'Neon', weight: 20.1797, symbol: 'Ne', name2: 'Neon' },
        { position: 15, name: 'Neon', weight: 20.1797, symbol: 'Ne', name2: 'Neon' },
        { position: 16, name: 'Neon', weight: 20.1797, symbol: 'Ne', name2: 'Neon' },
        { position: 17, name: 'Neon', weight: 20.1797, symbol: 'Ne', name2: 'Neon' },
      ]
    }

  }

  onEdit(data) {
    console.log(data)
  }

  onDelete(data) {
    console.log(data)
  }
}
