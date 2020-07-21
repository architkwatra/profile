import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isNaveBarOpen = false;
  logo: String;
  ngOnInit(): void {
    this.logo = "https://cdn.pixabay.com/photo/2014/03/25/16/57/llama-297668_960_720.png";
  }

}
