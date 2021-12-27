import { Component, Input } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { SingleMovieModalComponent } from './single-movie-modal/single-movie-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'movieApp';

  constructor(public data: MyServiceService, public dialog: MatDialog) {}
  movieSelect: any;

  showDataInBanner(movieData: any) {
    this.movieSelect = movieData;
  }

  openDialog(singleMovieData: any) {
    this.data.singleMovieData = singleMovieData
    const dialogRef = this.dialog.open(SingleMovieModalComponent);

     dialogRef.afterClosed().subscribe((result) => {
       console.log(`Dialog result: ${result}`);
     });
  }
}
