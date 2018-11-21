import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class MoviesService {
  path: string;
  popular: string;
  theaters: string;
  kids: string;
  search:string;
  dramas: string;
  authentication: string;
  apiKey: string;
  constructor(
    private httpClient: HttpClient

  ) {
    this.path = 'https://api.themoviedb.org/3/';
    this.search = 'search/movie?';
    this.popular = 'discover/movie?sort_by=popularity.desc'
    this.theaters = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22',
      this.kids = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc',
      this.dramas = 'discover/movie?with_genres=18&primary_release_year=2014',
      this.authentication = '&api_key=';
    this.apiKey = 'b631ed2cdb5b4ce5b5bd0cc2d33ee08f'
  }

  getPopular() {
    return this.httpClient.get(this.path + this.popular + this.authentication + this.apiKey)
  }
  getInTheaters() {
    return this.httpClient.get(this.path + this.theaters + this.authentication + this.apiKey)
  }
  getKidsMovies() {
    return this.httpClient.get(this.path + this.kids + this.authentication + this.apiKey)
  }
  getDramaMovies() {
    return this.httpClient.get(this.path + this.dramas + this.authentication + this.apiKey)
  }

  getMovie(id) {
    return this.httpClient.get(this.path + 'movie/' + id + '?api_key=' + this.apiKey)
  }

  findAMovie(name) {
   return this.httpClient.get('https://api.themoviedb.org/3/search/movie?api_key=b631ed2cdb5b4ce5b5bd0cc2d33ee08f&language=en-US&query=' + name)
  }

}
