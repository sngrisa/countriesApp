import { Component } from '@angular/core';
import { IMenuItem } from '../../interfaces/menuItem.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  title: string = "Astra Countries";

  items: IMenuItem[] = [
    {
      id: 1,
      itemName: "Search by Country",
      url: "/name",
      icon: "bi bi-crosshair",
    },
    {
      id: 2,
      itemName: "Search by Region",
      url: "/region",
      icon: "bi bi-geo-alt-fill"
    },
    {
      id: 3,
      itemName: "Search by Capital",
      url: "/capital",
      icon: "bi bi-pin-map-fill"
    },
  ];

  aboutMe = (): void => {
    Swal.fire({
      title: "Countries App",
      text: "An aplicattion about countries, made by Santiago Grisafi",
      icon: "info",
      background: '#0f172a',
      color: 'whitesmoke',
      cancelButtonColor: "darkred",
      confirmButtonText: "Close",
    })
  }

}
