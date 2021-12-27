import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  // @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      restoreFocus: false,
    });
  }
openProfile() {
    const dialogRef = this.dialog.open(ProfileComponent, {
      restoreFocus: false,
    });
  }
}
