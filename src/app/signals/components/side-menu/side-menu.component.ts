import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string
  router: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>( [
    {
      title: 'Counter', router: 'counter'
    },
    {
      title: 'User info', router: 'user-info'
    },
    {
      title: 'Properties', router: 'properties'
    }
  ])


  /* public menuItems: MenuItem[] = [
    {
      title: 'Counter', router: 'counter'
    },
    {
      title: 'User info', router: 'user-info'
    },
    {
      title: 'Properties', router: 'properties'
    }
  ] */
}
