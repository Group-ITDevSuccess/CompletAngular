import { Component, Input, OnChanges } from "@angular/core";


@Component({
  selector: 'app-star-rating',
  templateUrl:'./star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})

export class StartRatingComponent implements OnChanges{

  public starWidth: number;

  @Input()
  public rating: number;

  ngOnChanges() {
    this.starWidth = this.rating * 125 / 5;
  }

}
