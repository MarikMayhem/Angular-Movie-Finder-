import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  movies: object;
  form = new FormGroup({
    "userInput": new FormControl('')
  })

  isValid: boolean;
  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
  }


  getMovie() {

    let name = this.form.get('userInput').value

    this.moviesService.findAMovie(name)
      .subscribe(data => {
        if (data['results'].length < 1) {
          this.isValid = false;
        } else {
          this.movies = data
          this.isValid = true
        }
      })
  }
}
