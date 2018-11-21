import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './service/movies.service';
import { MovieComponent } from './movie/movie.component';
import { AppRouting } from './app.routing';
import { MovieFormComponent } from './movie-form/movie-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
