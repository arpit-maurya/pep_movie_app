import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-single-movie-modal',
  templateUrl: './single-movie-modal.component.html',
  styleUrls: ['./single-movie-modal.component.css'],
})
export class SingleMovieModalComponent implements OnInit {
  singleMovieData: any;
  constructor(public data: MyServiceService) {
    this.singleMovieData = this.data.singleMovieData
   
  }

  ngOnInit(): void {}
}
