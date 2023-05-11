import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent {

    movies:any[]  //array

    constructor()    //defining array
    {
      this.movies = [
        {
          title:'102 Not Out',
          genre:'comedy',
          director:'Yashmeen'
        },
        {
          title:'Up',
          genre:'Cartoon',
          director:'Tipsy'
        },
        {
          title:'After',
          genre:'Drama',
          director:'Khushi'
        },
        {
          title:'A Perfect Date',
          genre:'action',
          director:'Rose'
        },
        {
          title:'Titanic',
          genre:'Tragedy',
          director:'XYZ'
        }
      ]
    }

   public getMovies()        //get method
  {
    return this.movies
  }  

}
