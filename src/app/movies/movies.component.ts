import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: object;
  theaters: object;
  kids: object;
  dramas: object;
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.moviesService.getPopular()
      .subscribe(data => {
        this.popular = data;
      })

    this.moviesService.getInTheaters()
      .subscribe(data => {
        this.theaters = data;
      })
    this.moviesService.getKidsMovies()
      .subscribe(data => {
        this.kids = data;
      })
    this.moviesService.getDramaMovies()
      .subscribe(data => {
        this.dramas = data;
      })
  }

}
