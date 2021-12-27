import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {

  constructor() { }
  singleMovieData: any;
  moviesData = [
    {
      _id: '5b21ca3eeb7f6fbccd471815',
      title: 'Terminator',
      genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Action' },
      numberInStock: 6,
      dailyRentalRate: 2.5,
      movieImg:
        'https://upload.wikimedia.org/wikipedia/en/7/70/Terminator1984movieposter.jpg',
    },
    {
      _id: '5b21ca3eeb7f6fbccd471816',
      title: 'Die Hard',
      genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Action' },
      numberInStock: 5,
      dailyRentalRate: 2.5,
      movieImg:
        'https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg',
    },
    {
      _id: '5b21ca3eeb7f6fbccd471817',
      title: 'Get Out',
      genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'Thriller' },
      numberInStock: 8,
      dailyRentalRate: 3.5,
      movieImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Xx_4vG8Jav0ZozySfJPxX53XFYyaunOpqA5U_dY5S-Mye2Ws',
    },
    {
      _id: '5b21ca3eeb7f6fbccd471819',
      title: 'Trip to Italy',
      genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Comedy' },
      numberInStock: 7,
      dailyRentalRate: 3.5,
      movieImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_MsM0lOOX5kUrAoMGIazi41XpO95orf-j4EuJMnepBQpI7hI',
    },
    {
      _id: '5b21ca3eeb7f6fbccd47181a',
      title: 'Airplane',
      genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Comedy' },
      numberInStock: 7,
      dailyRentalRate: 3.5,
      movieImg:
        'https://upload.wikimedia.org/wikipedia/en/2/21/Airplane%21_%281980_film%29.jpg',
    },
    {
      _id: '5b21ca3eeb7f6fbccd47181b',
      title: 'Wedding Crashers',
      genre: { _id: '5b21ca3eeb7f6fbccd471814', name: 'Comedy' },
      numberInStock: 7,
      dailyRentalRate: 3.5,
      movieImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBukmm_RJu3GDwhdupVqoPnp15O40XPqKfZcehj4cqcZVqE9Ev',
    },
    {
      _id: '5b21ca3eeb7f6fbccd47181e',
      title: 'Gone Girl',
      genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'Thriller' },
      numberInStock: 7,
      dailyRentalRate: 4.5,
      movieImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ14WrqnG_i2DUCsgsqKIme4ya5XaiEaIoQfsxeOkhDsx6e5ESe',
    },
    {
      _id: '5b21ca3eeb7f6fbccd47181f',
      title: 'The Sixth Sense',
      genre: { _id: '5b21ca3eeb7f6fbccd471820', name: 'Thriller' },
      numberInStock: 4,
      dailyRentalRate: 3.5,
      movieImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyD6klO2WW285UBGKLcmOm7C3R1j3xjVILMdKRuMriKSxEGpqM',
    },
    {
      _id: '5b21ca3eeb7f6fbccd471821',
      title: 'The Avengers',
      genre: { _id: '5b21ca3eeb7f6fbccd471818', name: 'Action' },
      numberInStock: 7,
      dailyRentalRate: 3.5,
      movieImg:
        'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg',
    },
  ];
}
