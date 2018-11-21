import { Routes, RouterModule, Router } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { HttpClientModule } from '../../node_modules/@angular/common/http';


import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';

//import components here

//Declare an array of objects to hold the path and associate it 

const routes: Routes = [
    { path: '', component: MoviesComponent },
    { path: 'movie/:id', component: MovieComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule] 

})

export class AppRouting {

}

