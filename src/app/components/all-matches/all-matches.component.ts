import { Component, OnInit } from '@angular/core';
import { VenuesService } from 'src/app/service/venues.service';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.scss']
})
export class AllMatchesComponent implements OnInit {
  responseData: any;
  constructor(private service: VenuesService) { }

  ngOnInit()
  {
    this.service.getVenues().subscribe((res: any) =>
    {
      this.responseData = res.response.venues;
      console.log(res);

      // check local storage favorites and mark venues as favorite if their IDs are stored
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      this.responseData.forEach((venue: any) => {
        venue.favorite = favorites.some((fav: any) => fav.id === venue.id);
      });
    },
    (error) => {
      console.error('Error fetching data: ', error);
    });

  }

 addOrRemoveFavorite(venue: any) {
    venue.favorite = !venue.favorite;

    if (venue.favorite) {
      // Save match details in local storage
      let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      favorites.push({ id: venue.id, name: venue.name });
      localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
      // Remove match details from local storage
      let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      favorites = favorites.filter((fav: any) => fav.id !== venue.id);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }
}
