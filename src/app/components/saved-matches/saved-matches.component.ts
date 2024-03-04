import { Component, OnInit } from '@angular/core';
import { VenuesService } from 'src/app/service/venues.service';

@Component({
  selector: 'app-saved-matches',
  templateUrl: './saved-matches.component.html',
  styleUrls: ['./saved-matches.component.scss']
})
export class SavedMatchesComponent implements OnInit {

  savedMatches: any[] = [];
  allMatches: any[] = [];
  constructor(private service: VenuesService) { }

  ngOnInit() {
    this.service.getVenues().subscribe((res: any) => {
      console.log("all matches from srvice =>", res.response.venues);
      this.allMatches = res.response.venues;

      const savedMatchesIds = JSON.parse(localStorage.getItem('favorites') || '[]');
      console.log("id from local storage =>", savedMatchesIds);

      this.savedMatches = this.allMatches.filter(match => savedMatchesIds.some((obj:any) => obj.id === match.id));
      console.log("Saved Matches =>", this.savedMatches);
    });
  }

  isSavedMatch(venue: any): boolean {
    return this.savedMatches.some((match: any) => match.id === venue.id);
  }

  toggleSavedMatch(venue: any): void {
    const index = this.savedMatches.findIndex(match => match.id === venue.id);
    if (index !== -1) {
      // Remove from saved matches
      this.savedMatches.splice(index, 1);
      // Update local storage
      const savedMatchesIds = JSON.parse(localStorage.getItem('favorites') || '[]');
      const updatedIds = savedMatchesIds.filter((obj: any) => obj.id !== venue.id);
      localStorage.setItem('favorites', JSON.stringify(updatedIds));
    }
  }
}
