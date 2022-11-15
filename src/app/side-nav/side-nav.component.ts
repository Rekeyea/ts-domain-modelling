import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type UrlMap = {url: string, text: string};

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  constructor(private router: Router) { }

  public routes: UrlMap[] = [
    {
      url: "new",
      text: "New ToDo"
    },
    {
      url: "list",
      text: "List"
    },
    {
      url: "history",
      text: "History"
    }
  ];

  public navigate(route:any){
    this.router.navigateByUrl(route);
  }
}
