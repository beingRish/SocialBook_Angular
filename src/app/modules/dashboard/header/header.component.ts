import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  settingsmenu: any
  darkBtn: any
  

  ngOnInit(): void {
    this.settingsmenu = document.querySelector<HTMLElement>(".settings-menu");
    this.darkBtn = document.getElementById("dark-btn") as HTMLElement;
  }

  settingsMenuToggle() {
    if (this.settingsmenu) {
      this.settingsmenu.classList.toggle("settings-menu-height");
    }
  }

  // darkBtn.onclick = function () {
  //   if (darkBtn) {
  //     darkBtn.classList.toggle("dark-btn-on");
  //     document.body.classList.toggle("dark-theme");

  //     if (localStorage.getItem("theme") === "light") {
  //       localStorage.setItem("theme", "dark");
  //     } else {
  //       localStorage.setItem("theme", "light");
  //     }
  //   }
  // };

  // if (localStorage.getItem("theme") === "light") {
  //   if (darkBtn) {
  //     darkBtn.classList.remove("dark-btn-on");
  //     document.body.classList.remove("dark-theme");
  //   }
  // } else if (localStorage.getItem("theme") === "dark") {
  //   if (darkBtn) {
  //     darkBtn.classList.add("dark-btn-on");
  //     document.body.classList.add("dark-theme");
  //   }
  // } else {
  //   localStorage.setItem("theme", "light");
  // }

}
