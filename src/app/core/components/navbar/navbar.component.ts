import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  private items: MenuItem[];
  private nametext = "Relatdfsdfsdfdor";

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: "File",
        items: [
          { label: "New", icon: "fa fa-plus" },
          { label: "Open", icon: "fa fa-download" }
        ]
      },
      {
        label: "Edit",
        items: [
          { label: "Undo", icon: "fa fa-refresh" },
          { label: "Redo", icon: "fa fa-repeat" }
        ]
      }
    ];
  }
}
