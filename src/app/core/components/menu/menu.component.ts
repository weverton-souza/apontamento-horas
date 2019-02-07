import { Component, OnInit } from "@angular/core";

import { MenuItem } from "primeng/api";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
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
